import styled from 'styled-components/native';

// Styles
import DefaultTitle from '../../styles/Title';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.primaryLowShade};
`;

export const Title = styled(DefaultTitle)`
  color: ${({ theme }) => theme.secondary};
  text-align: center;
  margin-bottom: 16px;
`;
