import { Box } from '@mui/material';
import noPage from '../../assets/images/noPage.svg';

const NoPage = () => {
  return (
    <Box width="100%" height="100%" mx="auto" textAlign='center'>
      <img src={noPage} alt="404" width="300px" height="100%" />
    </Box>
  )
}

export default NoPage;
