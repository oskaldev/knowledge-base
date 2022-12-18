import type { FC } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import HttpsIcon from "@mui/icons-material/Https";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "react-router-dom";

export const PasswordСhange: FC = ({}) => {
  const paperStyle = {
    padding: 21,
    height: "70vh",
    width: 480,
    margin: "10px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "40px 0" };
  const linkTo = {color:'white', padding: "0px 50px", textDecoration:'none'}
  return (
    <Grid sx={{ pt: 10 }}>
      <Paper elevation={10} style={paperStyle}>
        <Grid2 sx={{ pt: 10 }}>
          <Avatar style={avatarStyle}>
            <HttpsIcon />
          </Avatar>
          <Typography variant="h4" sx={{ pt: 2 }}>
            Поменяйте пароль
          </Typography>
        </Grid2>
        <Typography sx={{ pt: 2 }}>
          <TextField type="password" label="Введите новый пароль" fullWidth required />
        </Typography>
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          <Link style={linkTo} to="/">
            Войти
          </Link>
        </Button>
      </Paper>
    </Grid>
  );
};
