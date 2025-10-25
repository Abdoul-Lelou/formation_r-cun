import api from "../api/base";

// 📦 Type utilisateur (facultatif mais recommandé)
export interface IUser {
  _id?: string;
  firstname: string;
  lastname: string;
  email: string;
  password?: string;
  roles?: string[];
}

/**
 * 📥 Connexion utilisateur
 */
export const loginUser = async (email: string, password: string) => {
  const response = await api.post("/login", { email, password });
  return response.data;
};

/**
 * ➕ Inscription utilisateur
 */
export const registerUser = async (data: IUser) => {
  const response = await api.post("/users", data);
  return response.data;
};

/**
 * 📋 Liste des utilisateurs
 */
export const getAllUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

/**
 * 🔍 Obtenir un utilisateur par ID
 */
export const getUserById = async (id: string) => {
  const response = await api.get(`/getUserById/${id}`);
  return response.data;
};

/**
 * 🔍 Obtenir un utilisateur par ID
 */
export const getMe = async () => {
  const response = await api.get(`/auth/me}`);
  return response.data;
};

/**
 * ✏️ Modifier un utilisateur
 */
export const updateUser = async (id: string, data: IUser) => {
  const response = await api.patch(`/editUser/${id}`, data);
  return response.data;
};

/**
 * ❌ Supprimer un utilisateur
 */
export const deleteUser = async (id: string) => {
  const response = await api.delete(`/deleteUser/${id}`);
  return response.data;
};
