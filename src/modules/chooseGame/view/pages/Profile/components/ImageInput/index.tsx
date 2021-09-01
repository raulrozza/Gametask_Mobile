import React, { useEffect } from 'react';

// Components
import { TouchableOpacity } from 'react-native-gesture-handler';

// Hooks
import { useField } from 'formik';
import { useToastContext } from 'shared/view/contexts';

// Libs
import * as ImagePicker from 'expo-image-picker';

// Styles
import { Image } from './styles';

interface ImageInputProps {
  name: string;
}

const ImageInput: React.FC<ImageInputProps> = ({ name }) => {
  const toast = useToastContext();
  const [{ value }, , { setValue }] = useField(name);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();

      if (status !== 'granted')
        toast.showError('É necessária permissão para acessar a câmera.');
    })();
  }, [toast]);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setValue(result.uri);
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
            : require('assets/img/users/placeholder.png')
        }
      />
    </TouchableOpacity>
  );
};

export default ImageInput;
