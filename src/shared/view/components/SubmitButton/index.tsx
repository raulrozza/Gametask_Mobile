import { useFormikContext } from 'formik';
import React, { useCallback } from 'react';
import Button, { ButtonProps } from 'shared/view/components/Button';

const SubmitButton: React.FC<ButtonProps> = ({ onPress, ...props }) => {
  const formik = useFormikContext();

  const handlePress = useCallback(() => {
    onPress?.();
    formik.handleSubmit();
  }, []);

  return <Button {...props} onPress={handlePress} />;
};

export default SubmitButton;
