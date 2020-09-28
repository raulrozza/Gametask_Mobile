import React from 'react';

// Styles
import { BarContainer, Progress } from './styles';

// Types
import { ProgressBarProps } from './types';

const ProgressBar: React.FC<ProgressBarProps> = ({
  unfilledColor,
  fillColor,
  borderColor,
  progress = 0,
}) => {
  return (
    <BarContainer backgroundColor={unfilledColor} borderColor={borderColor}>
      <Progress backgroundColor={fillColor} width={progress * 100} />
    </BarContainer>
  );
};

export default ProgressBar;
