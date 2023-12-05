import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { useCallback } from "react";
import { getToken } from "../../utils";
import { apiPost } from "../../axois";
import { AxiosResponse } from "axios";

type AuthContextProps = {
  user: any;
  role: 'admin' | 'user' | '';
  setUser: (user: any) => void;
  setRole: (role: 'admin' | 'user' | '') => void;
}

type User = {
  id: number
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
  setUser: (user: any) => { },
  setRole: (role: 'admin' | 'user' | '') => { }
});

type ReactNodeProps = {
  children: ReactNode
}

export const AuthContextProvider: FC<ReactNodeProps> = ({ children }): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<'admin' | 'user' | ''>('');
  const hasToken = getToken();

  const getUser = useCallback(async () => {
    try {
      const { data } = await apiPost<AxiosResponse>('/profile');

      if (data) {
        const { user } = data || {}
        setUser(user);
      }
    } catch (error) { }
  }, [])

  useEffect(() => {
    hasToken && getUser();
  }, [hasToken, getUser]);

  return (
    <AuthContext.Provider value={{
      role, setRole, setUser, user
    }}>
      {children}
    </AuthContext.Provider>
  );
};
