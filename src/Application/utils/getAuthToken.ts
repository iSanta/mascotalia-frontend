export const getAuthToken = () => {
  const token = localStorage.getItem("auth");
  if (token) return token;
  return null;
};
