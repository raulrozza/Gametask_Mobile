import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { BarContainer, Progress } from './styles';

// Types
import { IProgressBar } from './types';

const ProgressBar: React.FC<IProgressBar> = ({
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
