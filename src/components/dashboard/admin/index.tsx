import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AxiosResponse } from "axios";

import { apiPost } from "../../../axois";
import { UserStatus } from "../../../interfaces";

const AdminDashboard = () => {
  const [stats, setStats] = useState<UserStatus[]>([])

  const getUserStates = useCallback(async () => {
    try {
      const { status, data } = await apiPost<AxiosResponse>('/exercise/users/status');

      if (status === 200) {
        setStats(data);
      }
    } catch (error) {
      toast.error("Failed to load exercises");
    }
  }, [])

  useEffect(() => {
    getUserStates()
  }, [getUserStates]);

  console.log(stats);

  return (
    <>
      <h1>Admin Dashboard</h1>
    </>
  );
}

export default AdminDashboard;
