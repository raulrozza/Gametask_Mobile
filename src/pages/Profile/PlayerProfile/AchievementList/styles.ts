import styled from 'styled-components/native';

export const Container = styled.View`
  width: 80%;
  border-radius: 5px;
  padding: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Title = styled.Text`
  width: 100%;
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.contrast};
  font-weight: bold;
  font-size: 36px;
  margin: 8px 0;
`;
