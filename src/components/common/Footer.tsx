import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route: string) => {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <Box sx={{ width: '100%', maxWidth: '992px', height: '60px', position: 'fixed', bottom: '0px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', gap: '20px', bgcolor: '#d7ebdc', boxShadow: '0px -5px 4px 0px rgb(0 0 0 / 20%), 0px 4px 5px -2px rgb(0 0 0 / 14%), 0px 1px 2px 0px rgb(0 0 0 / 12%)}' }}>
        <Button onClick={() => navigate("/evening")}>
          <Typography variant="h6" color="black" textAlign="center"
            className={`${pathMatchRoute("/evening") && "active-menu"}`}>
            شام
          </Typography>
        </Button>
        <Button onClick={() => navigate("/afternoon")}>
          <Typography variant="h6" color="black" textAlign="center"
            className={`${pathMatchRoute("/afternoon") && "active-menu"}`}>
            دوپہر
          </Typography>
        </Button>
        <Button onClick={() => navigate("/")}>
          <Typography variant="h6" color="black" textAlign="center"
            className={`${pathMatchRoute("/") && "active-menu"}`}>
            صبح
          </Typography>
        </Button>
      </Box>
    </Box>
  )
}

export default Footer;
