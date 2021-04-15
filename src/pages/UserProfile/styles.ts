import styled from 'styled-components/native';

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding: ${({ theme }) => theme.layout.spacing(4)};
`;

export const InputGroup = styled.View`
  width: 80%;
  margin-bottom: ${({ theme }) => theme.layout.spacing(2)};
`;
