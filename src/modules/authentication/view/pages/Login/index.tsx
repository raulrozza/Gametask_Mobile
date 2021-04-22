import React, { useState } from 'react';

// Components
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

// Styles
import {
  HomePage,
  TitleContainer,
  Title,
  FormContainer,
  Container,
  FormToggle,
  ToggleButton,
} from './styles';

const Login: React.FC = () => {
  const [formToggle, setFormToggle] = useState(true);

  return (
    <HomePage>
      <TitleContainer>
        <Title.View>
          <Title.Text variant="title" fontBold="bold">
            GAMETASK
          </Title.Text>
        </Title.View>
      </TitleContainer>

      <FormContainer>
        <Container>
          <FormToggle>
            <ToggleButton.Button
              active={formToggle}
              onPress={() => setFormToggle(true)}
            >
              <ToggleButton.Text active={formToggle}>Entre</ToggleButton.Text>
            </ToggleButton.Button>

            <ToggleButton.Button
              active={!formToggle}
              onPress={() => setFormToggle(false)}
            >
              <ToggleButton.Text active={!formToggle}>
                Cadastre-se
              </ToggleButton.Text>
            </ToggleButton.Button>
          </FormToggle>

          <LoginForm active={formToggle} />

          <SignupForm active={!formToggle} />
        </Container>
      </FormContainer>
    </HomePage>
  );
};

export default Login;
