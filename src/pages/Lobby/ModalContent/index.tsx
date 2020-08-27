import React, { useState } from 'react';

// Styes
import { Container, Wrapper, PasteGroup } from './styles';

const ModalContent: React.FC = () => {
  const [code, setCode] = useState('');

  const handleCodePaste = () => {
    setCode('randomText');
  };

  return (
    <Wrapper>
      <Container>
        <PasteGroup.Container>
          <PasteGroup.Input value={code} />
          <PasteGroup.Button onPress={handleCodePaste}>
            <PasteGroup.Icon name="content-paste" />
          </PasteGroup.Button>
        </PasteGroup.Container>
      </Container>
    </Wrapper>
  );
};

export default ModalContent;
