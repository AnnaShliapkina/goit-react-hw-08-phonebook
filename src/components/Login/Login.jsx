import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

export default function Login() {
  return (
    <Button
      component={RouterLink}
      to="/login"
      key="Log in"
      sx={{
        mx: 1,
        my: 2,
        color: 'yellow',
        display: 'block',
        border: 2,
        borderRadius: '10px',
      }}
    >
      Sign in
    </Button>
  );
}
