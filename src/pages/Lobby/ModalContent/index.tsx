import React, { useCallback, useState } from 'react';
import { Clipboard, TouchableOpacity } from 'react-native';

// Libs
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import crypto from 'react-native-crypto-js';

// Styles
import { Container, Wrapper, PasteGroup, PageTitle } from './styles';
import Button from '../../../components/Button';

// Services
import api from '../../../services/api';

// Types
import { IInvitationData } from '../../../interfaces/api/InvitationData';
import { IModalContent } from '../types';

// Utils
import handleApiErrors from '../../../utils/handleApiErrors';

const ModalContent: React.FC<IModalContent> = ({ closeModal }) => {
  const [code, setCode] = useState('');
  const [inviteData, setInviteData] = useState<IInvitationData | null>(null);

  const { navigate } = useNavigation();

  const handleCodePaste = useCallback(async () => {
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
      showMessage({ message: 'Código de jogo inválido.', type: 'danger' });
      setCode('');
      setInviteData(null);
    }
  }, []);

  const handleSubmitInvitation = useCallback(async () => {
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

      handleApiErrors(error);
    }
  }, []);

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

export default ModalContent;
