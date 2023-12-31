import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

const Login = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    console.log('Username:', username);
    console.log('Password:', password);

    setOpen(false);
  };

  const handleCancel = () => {

    setOpen(false);
  };

  const handleClickOpen = () => {

    setOpen(true);
  };

  return (
    <div>
      <Button variant ="contained" data-testid="login" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <TextField
          variant="standard"
            id="username"
            label="Username"
            type="text"
           
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            data-testid="username"
          />
          <TextField
          variant="standard"
            id="password"
            label="Password"
            type="password"
          
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            data-testid="password"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} data-testid="cancel">
            Cancel
          </Button>
          <Button onClick={handleLogin} data-testid="dia-login">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Login;