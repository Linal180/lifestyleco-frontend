import { TOKEN } from "../constants";
import { VIDEOS_LIBRARY } from "../data/Exercise";

export const getToken = () => {
  return localStorage.getItem(TOKEN) || ''
}

export const setToken = () => {
  localStorage.setItem(TOKEN, new Date().toISOString())
}

export const requiredMessage = (fieldName: string) => `${(fieldName)} is required`;

export const getApiCallHeaders = () => {
  const token = getToken() || '';

  return {
    Authorization: `Bearer ${token}`,
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0"
  }
}

export const getVideoURL = (key: string): string => {
  if (VIDEOS_LIBRARY.hasOwnProperty(key)) {
    const videoUrl = (VIDEOS_LIBRARY as any)[key];
  
    return videoUrl;
  }

  return "";
}