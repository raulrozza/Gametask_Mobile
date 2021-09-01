import React from 'react';

import { BarContainer, Progress } from './styles';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => (
  <BarContainer>
    <Progress width={progress * 100} />
  </BarContainer>
);

export default ProgressBar;
