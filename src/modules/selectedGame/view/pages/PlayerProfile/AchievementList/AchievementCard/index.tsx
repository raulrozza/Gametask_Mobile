import React from 'react';

// Hooks
import { useNavigation } from '@react-navigation/native';

// Styles
import { Container, Image, Text } from './styles';

// Types
import { AchievementCardProps } from './types';

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const { navigate } = useNavigation();

  return (
    <Container
      obtained={achievement.obtained || false}
      onTouchEnd={() =>
        navigate('achievementDetails', {
          achievement,
        })
      }
    >
      <Image achievement={achievement} />
      <Text>{achievement.name}</Text>
    </Container>
  );
};

export default AchievementCard;
