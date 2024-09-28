import { Box, Button, Stack } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
const Login = () => {
  return (
    <Box sx={{ border: 1, color: "divider", p: 5 }}>
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          sx={{ minWidth: 400 }}
          variant="outlined"
          startIcon={<GoogleIcon />}
        >
          Login with Google
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;
