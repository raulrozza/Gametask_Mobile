import React, { useCallback, useState } from 'react';

// Components
import Button from '../../../../../../../components/Button';
import { Clipboard, TouchableOpacity } from 'react-native';

// Hooks
import { useApiGet } from '../../../../../../../hooks/api/useApiGet';
import { useNavigation } from '@react-navigation/native';
import useToastContext from 'shared/container/contexts/ToastContext/contexts/useToastContext';

// Services
import { decrypt } from '../../../../../../../services/encrypting';

// Styles
import { Container, Wrapper, PasteGroup, PageTitle } from './styles';

// Types
import { IInvitationData } from '../../../../../../../interfaces/api/InvitationData';
import { ModalContentProps } from './types';

const ModalContent: React.FC<ModalContentProps> = ({ closeModal }) => {
  const [code, setCode] = useState('');
  const [inviteData, setInviteData] = useState<IInvitationData | null>(null);

  const { navigate } = useNavigation();
  const toast = useToastContext();
  const apiGet = useApiGet();

  const handleCodePaste = useCallback(async () => {
    const clipboardText = await Clipboard.getString();
    const SECRET = process.env.REACT_NATIVE_SECRET;

    const decrypted = decrypt<IInvitationData>(clipboardText, SECRET);

    if (!decrypted || !decrypted.gameId || !decrypted.inviter) {
      toast.showError('Código de jogo inválido.');
      setCode('');
      return setInviteData(null);
    }

    setCode(clipboardText);

    return setInviteData(decrypted);
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
