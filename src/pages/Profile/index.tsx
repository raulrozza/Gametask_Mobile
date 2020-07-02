import React from 'react';
import { Text, SafeAreaView, TouchableOpacity } from 'react-native';

// Contexts
import { useTheme } from '../../contexts/Theme';
import { useAuth } from '../../contexts/Authorization';

// Styles
import { Container } from './styles';

const Profile: React.FC = () => {
  const { user, signOut } = useAuth();
  const { theme } = useTheme();

  return (
    <SafeAreaView>
      <Container theme={theme}>
        <Text>{user.firstname}</Text>
        {user.currentTitle && <Text>{user.currentTitle.name}</Text>}
        <TouchableOpacity onPress={() => signOut()}>
          <Text>Sair</Text>
        </TouchableOpacity>
      </Container>
    </SafeAreaView>
  );
};

export default Profile;
