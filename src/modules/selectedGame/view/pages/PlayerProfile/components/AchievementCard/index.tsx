import React from 'react';

// Entities
import IAchievement from 'modules/selectedGame/entities/IAchievement';

// Hooks
import { useNavigation } from '@react-navigation/native';

// Styles
import { Container, Image, Text } from './styles';

interface AchievementCardProps {
  achievement: IAchievement & { obtained: boolean };
}

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
      <Image image={achievement.image_url} />

      <Text>{achievement.name}</Text>
    </Container>
  );
};

export default AchievementCard;
