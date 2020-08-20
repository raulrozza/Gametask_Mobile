import PropTypes from 'prop-types';

export const themeProps = PropTypes.shape({
  primary: PropTypes.string.isRequired,
  primaryTransparent: PropTypes.string.isRequired,
  primaryContrast: PropTypes.string.isRequired,
  primaryLowShade: PropTypes.string.isRequired,
  primaryShade: PropTypes.string.isRequired,
  primaryExtraShade: PropTypes.string.isRequired,
  primaryIntense: PropTypes.string.isRequired,
  primaryExtraIntense: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
  secondaryTransparent: PropTypes.string.isRequired,
  secondaryContrast: PropTypes.string.isRequired,
  secondaryLowShade: PropTypes.string.isRequired,
  secondaryShade: PropTypes.string.isRequired,
  secondaryExtraShade: PropTypes.string.isRequired,
  secondaryIntense: PropTypes.string.isRequired,
  secondaryExtraIntense: PropTypes.string.isRequired,
  statusBar: PropTypes.oneOf([
    'light-content' as const,
    'dark-content' as const,
    'default' as const,
  ]).isRequired,
}).isRequired;
