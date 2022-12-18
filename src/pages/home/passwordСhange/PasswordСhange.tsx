import React from 'react'
import type { FC } from "react";
import { Box } from '@mui/material';

export const PasswordСhange: FC = ({  }) => {
  return (
    <div>
      
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
    </div>
  );
};
