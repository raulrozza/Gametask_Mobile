import React, { useEffect } from 'react';

// Components
import { TouchableOpacity } from 'react-native-gesture-handler';

// Hooks
import useToastContext from 'shared/container/contexts/ToastContext/contexts/useToastContext';

// Libs
import * as ImagePicker from 'expo-image-picker';

// Styles
import { Image } from './styles';

// Types
import { ImageInputProps } from './types';

const ImageInput: React.FC<ImageInputProps> = ({ value = null, onChange }) => {
  const toast = useToastContext();

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();

      if (status !== 'granted')
        toast.showError('É necessária permissão para acessar a câmera.');
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
