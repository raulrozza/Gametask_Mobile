import React from 'react';
import PropTypes from 'prop-types';

import { BarContainer, Progress } from './styles';

interface Props {
  unfilledColor: string;
  borderColor: string;
  fillColor: string;
  progress?: number;
}

const ProgressBar: React.FC<Props> = ({
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

ProgressBar.propTypes = {
  unfilledColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  fillColor: PropTypes.string.isRequired,
  progress: PropTypes.number,
};

export default ProgressBar;
