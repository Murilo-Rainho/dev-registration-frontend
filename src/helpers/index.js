import { toast } from 'react-toastify';

export const capitalize = (string) => {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
};

export const notify = (type = 'info', message = '') => toast[type](message, {
  theme: "dark",
});

export const ageCalculator = (birthday, now) => {
  return Math.floor(Math.ceil(Math.abs(birthday.getTime() - now.getTime()) / (1000 * 3600 * 24)) / 365.25);
}
