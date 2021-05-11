import React, { useCallback, useMemo, useState } from 'react';

// Components
import Clipboard from 'expo-clipboard';
import Button from 'shared/view/components/Button';

// Hooks
import { useNavigation } from '@react-navigation/native';
import useToastContext from 'shared/container/contexts/ToastContext/contexts/useToastContext';

// Providers
import { makeCryptoProvider } from 'modules/chooseGame/container/providers';

// Styles
import { Container, Wrapper, PasteGroup, PageTitle } from './styles';

interface IInvitationData {
  gameId: string;
  inviter: string;
}

interface ModalContentProps {
  closeModal(): void;
}

const ModalContent: React.FC<ModalContentProps> = ({ closeModal }) => {
  const [code, setCode] = useState('');
  const [inviteData, setInviteData] = useState<IInvitationData | null>(null);

  const { navigate } = useNavigation();
  const toast = useToastContext();

  const crypto = useMemo(() => makeCryptoProvider(), []);

  const handleCodePaste = useCallback(async () => {
    const clipboardText = await Clipboard.getStringAsync();

    const decrypted = crypto.decrypt<IInvitationData>(clipboardText);

    if (!decrypted || !decrypted.gameId || !decrypted.inviter) {
      toast.showError('Código de jogo inválido.');
      setCode('');
      return setInviteData(null);
    }

    setCode(clipboardText);

    return setInviteData(decrypted);
  }, [crypto, toast]);

  const handleSubmitInvitation = useCallback(async () => {
    if (code === '' || !inviteData) return;

    closeModal();

    return navigate('GameInvite', {
      gameId: inviteData.gameId,
      inviterId: inviteData.inviter,
    });
  }, [code, inviteData, closeModal, navigate]);

  return (
    <Wrapper>
      <Container>
        <PageTitle>Entrar em um Jogo</PageTitle>

        <PasteGroup.Container>
          <PasteGroup.Input
            value={code}
            editable={false}
            placeholder="Clique para colar da área de transferência"
          />

          <PasteGroup.Button onPress={handleCodePaste} activeOpacity={0.6}>
            <PasteGroup.Icon name="content-paste" />
          </PasteGroup.Button>
        </PasteGroup.Container>

        <Button onPress={handleSubmitInvitation} type="touchable-opacity">
          ENTRAR
        </Button>
      </Container>
    </Wrapper>
  );
};

export default ModalContent;
