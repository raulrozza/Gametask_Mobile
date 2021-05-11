import React from 'react';
import { AppLoading } from 'expo';

// Fonts
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import {
  OpenSans_400Regular,
  OpenSans_700Bold,
  useFonts,
} from '@expo-google-fonts/open-sans';

interface FontLoaderProps {
  children: React.ReactElement;
}

const FontLoader: React.FC<FontLoaderProps> = ({ children }) => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return children;
};

export default FontLoader;
