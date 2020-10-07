import React, { useEffect } from 'react';

// Components
import { TouchableOpacity } from 'react-native-gesture-handler';

// Libs
import * as ImagePicker from 'expo-image-picker';

// Styles
import { Image } from './styles';

// Types
import { ImageInputProps } from './types';

// Utils
import displayErrorMessage from '../../utils/displayErrorMessage';

const ImageInput: React.FC<ImageInputProps> = ({ value = null, onChange }) => {
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();

      if (status !== 'granted')
        displayErrorMessage('É necessária permissão para acessar a câmera.');
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      onChange(result.uri);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      <Image
        source={
          value
            ? {
                uri: value,
              }
            : require('../../assets/img/users/placeholder.png')
        }
      />
    </TouchableOpacity>
  );
};

export default ImageInput;
