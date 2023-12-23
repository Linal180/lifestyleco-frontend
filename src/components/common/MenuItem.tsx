import { Button, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

interface MenuItemProps {
  path: string;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ path, label }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === path;

  return (
    <Button
      onClick={() => navigate(path)}
      sx={{
        borderBottom: isActive ? '5px solid #46A53D' : '5px solid #d7ebdc',
        borderRadius: 0,
        paddingBottom: isActive ? '10px' : 0,
      }}
    >
      <Typography variant="h6" color="black" textAlign="center">
        {label}
      </Typography>
    </Button>
  );
};

export default MenuItem;