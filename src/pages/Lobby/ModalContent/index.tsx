import React, { useCallback, useState } from 'react';

// Hooks
import { useApiGet } from '../../../hooks/api/useApiGet';
import { useNavigation } from '@react-navigation/native';

// Libs
import crypto from 'react-native-crypto-js';
import { Clipboard, TouchableOpacity } from 'react-native';

// Styles
import { Container, Wrapper, PasteGroup, PageTitle } from './styles';
import Button from '../../../components/Button';

// Types
import { IInvitationData } from '../../../interfaces/api/InvitationData';
import { ModalContentProps } from './types';

// Utils
import displayErrorMessage from '../../../utils/displayErrorMessage';

const ModalContent: React.FC<ModalContentProps> = ({ closeModal }) => {
  const [code, setCode] = useState('');
  const [inviteData, setInviteData] = useState<IInvitationData | null>(null);

  const { navigate } = useNavigation();
  const apiGet = useApiGet();

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
      displayErrorMessage('Código de jogo inválido.');
      setCode('');
      setInviteData(null);
    }
  }, []);

  const handleSubmitInvitation = useCallback(async () => {
    if (code === '' || !inviteData) return;

    const data = await apiGet(
      `/invite/${inviteData.gameId}/${inviteData.inviter}`,
    );

    closeModal();

    if (data)
      return navigate('GameInvite', {
        gameData: data,
        inviteData,
      });
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
