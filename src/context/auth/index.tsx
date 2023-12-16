import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { useCallback } from "react";
import { getToken } from "../../utils";
import { apiGet, apiPost } from "../../axois";
import { AxiosResponse } from "axios";
import { UserStatus } from "../../interfaces";

type AuthContextProps = {
  user: any;
  role: 'admin' | 'user' | '';
  completedExercises: string[];
  setUser: (user: any) => void;
  setRole: (role: 'admin' | 'user' | '') => void;
  getUserExercises: () => void;
}

type User = {
  id: string
  name: string
  email: string
  email_verified_at: string | null
  user_type: string
  created_at: string
  updated_at: string
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  role: '',
  completedExercises: [],
  setUser: (user: any) => { },
  setRole: (role: 'admin' | 'user' | '') => { },
  getUserExercises: () => { }
});

type ReactNodeProps = {
  children: ReactNode
}

export const AuthContextProvider: FC<ReactNodeProps> = ({ children }): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<'admin' | 'user' | ''>('');
  const [completedExercises, setCompletedExercises] = useState<string[]>([])

  const hasToken = getToken();

  const getUserExercises = useCallback(async () => {
    try {
      const { data } = await apiGet<AxiosResponse>('/exercise/users/all/status');

      if (data) {
        const { users } = data;
        const currentUser: UserStatus = (users.filter((userStat: UserStatus) => userStat.user_id === user?.id) || [null])[0]
        
        if(currentUser){
          setCompletedExercises(currentUser.completed_exercises.all)
        }
      }
    } catch (error) { }
  }, [user?.id])

  const getUser = useCallback(async () => {
    try {
      const { data } = await apiPost<AxiosResponse>('/profile');

      if (data) {
        const { user } = data || {}
        const { user_type } = user || {}

        setUser(user);

        if (user_type === 1) {
          setRole('admin');
        } else {
          setRole('user')
          await getUserExercises()
        }
      }
    } catch (error) { }
  }, [getUserExercises])

  useEffect(() => {
    hasToken && getUser();
  }, [hasToken, getUser]);

  return (
    <AuthContext.Provider value={{
      user,
      role,
      completedExercises,
      setRole,
      setUser,
      getUserExercises,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
