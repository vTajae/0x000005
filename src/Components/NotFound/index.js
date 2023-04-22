import React from 'react';
import { Box, Typography } from '@mui/material';
import { MessageContainer } from './styles';

const NotFoundPage = () => {
  return (
    <MessageContainer>
      <Typography variant="h4" gutterBottom>
        404 - Page not found
      </Typography>
      <Typography variant="body1" gutterBottom>
        That page doesn't exist... yet!
      </Typography>
    </MessageContainer>
  );
};

export default NotFoundPage;