export default function useAuth() {
  const userData = localStorage.getItem("user");
  if (!userData) return null;
  return JSON.parse(userData);
}