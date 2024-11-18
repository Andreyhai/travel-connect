import React from 'react';
import {
  Modal,
  Button,
  TextField,
  Typography,
  Box,
} from '@mui/material';

import { loginUser  } from "../../firebase";
import { useNavigate } from "react-router-dom"; // Для навигации
import { ACCOUNT_ROUTE } from '../../utils/CONSTS';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  border: 'none',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

const AuthModal = ({ open, handleClose }) => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await loginUser (email, password);
            localStorage.setItem('auth', true)
            window.location.replace(ACCOUNT_ROUTE)
            handleClose()
            // navigate("/user"); // Перенаправление на страницу пользователя
        } catch (error) {
            // setError(error.message); // Установка сообщения об ошибке
            alert('такого пользователя не существует!')
        }
    };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Typography style={{textAlign: 'center'}} id="modal-title" variant="h6" component="h2">
          Авторизация
        </Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Электронная почта"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Пароль"
          type="password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button style={{width : 'fit-content', margin: '20px auto 0 auto', padding: '10px 20px'}} variant="contained" onClick={handleLogin}>
          Войти
        </Button>
      </Box>
    </Modal>
  );
};

export default AuthModal;