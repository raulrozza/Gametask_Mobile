import React from 'react';
import styled from 'styled-components/native';
import { ColorPallete } from 'theme';

interface Props {
  theme: ColorPallete;
}

export const Container = styled.ScrollView<Props>`
  background-color: ${({ theme }) => theme.primaryLowShade};
  min-height: 100%;
`;
