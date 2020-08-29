import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Clipboard, TouchableOpacity } from 'react-native';

// Libs
import { useNavigation } from '@react-navigation/native';
import crypto from 'react-native-crypto-js';

// Styles
import { Container, Wrapper, PasteGroup, PageTitle } from './styles';
import Button from '../../../components/Button';

// Services
import api from '../../../services/api';

// Types
import { IInviteData } from 'game';
import { IModalContent } from '../types';

const ModalContent: React.FC<IModalContent> = ({ closeModal }) => {
  const [code, setCode] = useState('');
  const [inviteData, setInviteData] = useState<IInviteData | null>(null);

  const { navigate } = useNavigation();

  const handleCodePaste = async () => {
    const clipboardText = await Clipboard.getString();
    const SECRET = process.env.REACT_NATIVE_SECRET || '';

    try {
      const decryptedCode = crypto.AES.decrypt(clipboardText, SECRET);

      const { gameId, inviter } = JSON.parse(
        decryptedCode.toString(crypto.enc.Utf8),
      );

      if (!gameId || !inviter) throw new Error('Incorrect keys');

      setCode(clipboardText);
      setInviteData({ gameId, inviter });
    } catch (error) {
      console.error('Code in incorrect format', error);
      setCode('');
      setInviteData(null);
    }
  };

  const handleSubmitInvitation = async () => {
    if (code === '' || !inviteData) return;

    try {
      const { data } = await api.get(
        `/invite/${inviteData.gameId}/${inviteData.inviter}`,
      );

      closeModal();

      return navigate('GameInvite', {
        gameData: data,
        inviteData,
      });
    } catch (error) {
      closeModal();

      console.error(error);
    }
  };

  return (
    <Wrapper>
      <Container>
        <PageTitle>Entrar em um Jogo</PageTitle>

        <PasteGroup.Container>
          <PasteGroup.Input value={code} editable={false} />
          <PasteGroup.Button onPress={handleCodePaste} activeOpacity={0.6}>
            <PasteGroup.Icon name="content-paste" />
          </PasteGroup.Button>
        </PasteGroup.Container>

        <Button
          as={TouchableOpacity}
          activeOpacity={0.6}
          onPress={handleSubmitInvitation}
        >
          ENTRAR
        </Button>
      </Container>
    </Wrapper>
  );
};

ModalContent.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default ModalContent;
