import styled from 'styled-components/native';

const Title = styled.Text`
  font-family: ${({ theme }) => theme.typography.family.title.bold};
  font-size: 24px;
`;

export default Title;
