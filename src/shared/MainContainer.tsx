import React from 'react';
import Box from '@mui/material/Box';
import { styled } from 'styled-components';
import Header from '@/components/header/Header';
import { StyledComponentProps } from '@mui/material';

export const Container = styled(Box)<StyledComponentProps>`
  margin-left: ${({ theme }) => `calc(${theme.spacing(7)})`};
  min-height: calc(100vh - 80px);
  padding: ${({ theme }) => theme.spacing(3)};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainContainer = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default MainContainer;
