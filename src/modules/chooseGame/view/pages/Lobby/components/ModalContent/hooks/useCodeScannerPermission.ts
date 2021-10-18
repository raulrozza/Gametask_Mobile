import { BarCodeScanner } from 'expo-barcode-scanner';
import { useEffect, useState } from 'react';

type IPermission = 'waiting' | 'granted' | 'ungranted';

export default function useCodeScannerPermission(): IPermission {
  const [hasPermission, setHasPermission] = useState<IPermission>('waiting');

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted' ? 'granted' : 'ungranted');
    })();
  }, []);

  return hasPermission;
}
