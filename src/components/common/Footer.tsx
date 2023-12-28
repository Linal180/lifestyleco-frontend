import { Box } from "@mui/material";
import MenuItem from "./MenuItem";

const Footer = () => {
  return (
    <Box sx={{ width: '100%', maxWidth: '992px', height: '60px', position: 'fixed', bottom: '0px', bgcolor: '#d7ebdc', boxShadow: '0px -5px 4px 0px rgb(0 0 0 / 20%), 0px 4px 5px -2px rgb(0 0 0 / 14%), 0px 1px 2px 0px rgb(0 0 0 / 12%)}' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'space-evenly', gap: '20px', }}>
        <MenuItem path="/" label="صبح" />
        <MenuItem path="/afternoon" label="دوپہر" />
        <MenuItem path="/evening" label="شام" />
      </Box>
    </Box>
  )
}

export default Footer;
