import React, { useCallback, useMemo, useState } from 'react';

// Components
import Clipboard from 'expo-clipboard';
import Button from 'shared/view/components/Button';
import { BarCodeScannedCallback } from 'expo-barcode-scanner';

// Hooks
import { useNavigation } from '@react-navigation/native';
import { useCodeScannerPermission } from './hooks';
import useToastContext from 'shared/container/contexts/ToastContext/contexts/useToastContext';

// Providers
import { makeCryptoProvider } from 'modules/chooseGame/container/providers';

// Styles
import {
  Container,
  Wrapper,
  PasteGroup,
  PageTitle,
  ScannerContainer,
  CodeScanner,
} from './styles';
import { Modal } from 'react-native';

interface IInvitationData {
  gameId: string;
  inviter: string;
}

interface ModalContentProps {
  closeModal(): void;
}

const QRCODE_TYPE = 256;

const ModalContent: React.FC<ModalContentProps> = ({ closeModal }) => {
  const [code, setCode] = useState('');
  const [inviteData, setInviteData] = useState<IInvitationData | null>(null);

  const scannerPermission = useCodeScannerPermission();
  const [showScanner, setShowScanner] = useState(false);

  const { navigate } = useNavigation();
  const toast = useToastContext();

  const crypto = useMemo(() => makeCryptoProvider(), []);

  const decryptCode = useCallback(
    (encrypted: string): IInvitationData | undefined => {
      const decrypted = crypto.decrypt<IInvitationData>(encrypted);

      if (!decrypted || !decrypted.gameId || !decrypted.inviter) {
        toast.showError('Código de jogo inválido.');

        return undefined;
      }

      return decrypted;
    },
    [crypto, toast],
  );

  const handleCodeScan = useCallback<BarCodeScannedCallback>(
    ({ data, type }) => {
      if (Number(type) !== QRCODE_TYPE) return;

      setShowScanner(false);

      const inviteData = decryptCode(data);

      if (!inviteData) return setInviteData(null);

      setCode(data);

      return setInviteData(inviteData);
    },
    [decryptCode],
  );

  const handleCodePaste = useCallback(async () => {
    const clipboardText = await Clipboard.getStringAsync();

    const inviteData = decryptCode(clipboardText);

    if (!inviteData) return setInviteData(null);

    setCode(clipboardText);

    return setInviteData(inviteData);
  }, [decryptCode]);

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

        {scannerPermission === 'granted' && (
          <ScannerContainer>
            <Modal
              visible={showScanner}
              statusBarTranslucent={true}
              supportedOrientations={['portrait']}
            >
              <CodeScanner onBarCodeScanned={handleCodeScan} />
            </Modal>

            <Button
              outline
              onPress={() => setShowScanner(true)}
              type="touchable-opacity"
            >
              Ler Código QR
            </Button>
          </ScannerContainer>
        )}

        <Button onPress={handleSubmitInvitation} type="touchable-opacity">
          ENTRAR
        </Button>
      </Container>
    </Wrapper>
  );
};

export default ModalContent;
