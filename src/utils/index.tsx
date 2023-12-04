import { ADMIN_ACCOUNT, ADMIN_KEY, TOKEN } from "../constants";
import { AdminAccount, LoginInputs } from "../interfaces";

export const getToken = () => {
  return localStorage.getItem(TOKEN) || ''
}

export const setToken = () => {
  localStorage.setItem(TOKEN, new Date().toISOString())
}

export const getAdminAccount = (): AdminAccount | null => {
  const admin = localStorage.getItem(ADMIN_KEY) ? JSON.parse(localStorage.getItem(ADMIN_KEY) as string) : null

  return admin ? admin as AdminAccount : null;
}

export const setAdminAccount = () => {
  localStorage.setItem(ADMIN_KEY, JSON.stringify(ADMIN_ACCOUNT))
};

export const requiredMessage = (fieldName: string) => `${(fieldName)} is required`;

export const checkCredentials = ({ email, password }: LoginInputs): Boolean => {
  const admin = getAdminAccount();

  return admin ? admin?.email === email && admin?.password === password : false;
}