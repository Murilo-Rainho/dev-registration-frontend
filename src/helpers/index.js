import { toast } from 'react-toastify';

export const capitalize = (string) => {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
};

export const notify = (type = 'info', message = '') => toast[type](message, {
  theme: "dark",
});

export const URL = 'http://localhost:8080';
