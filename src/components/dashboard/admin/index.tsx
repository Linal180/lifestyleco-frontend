import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { apiGet } from "../../../axois";
import { UserStatus } from "../../../interfaces";
import { Box, Container, Divider, Typography } from "@mui/material";
import UserDetail from "../../common/UserDetail";

const AdminDashboard = () => {
  const [stats, setStats] = useState<UserStatus[]>([])

  const getUserStates = useCallback(async () => {
    try {
      const { statusCode, data } = await apiGet<any>('/exercise/users/all/status');

      if (statusCode === 200) {
        const { users } = data || {};

        setStats(users);
      }
    } catch (error) {
      toast.error("Failed to load exercises");
    }
  }, [])

  useEffect(() => {
    getUserStates()
  }, [getUserStates]);

  return (
    <Container>
      <Typography variant="h4">Admin Dashboard</Typography>

      <Box my={5}>
        <Divider />
      </Box>

      <UserDetail users={stats} />
    </Container>
  );
}

export default AdminDashboard;
