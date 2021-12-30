export const CheckTime = () => {
  const hours = new Date().getHours();
  return hours > 0 && hours < 13 ? "light" : "dark";
};
