import { useEffect, useState } from "react";
import api from "../api/base";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showErrorMsg, setShowErrorMsg] = useState(false);


  useEffect(() => {
    displayErrorMsg()
  }, [showErrorMsg])
  

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setShowErrorMsg(false); // cacher le message avant chaque tentative

    try {
      const res = await api.post("/login", { email, password });

      // ✅ Stocker le token dans le localStorage
      localStorage.setItem("token", res.data.token);
      alert("Connexion réussie !");
      console.log("✅ Connecté :", res.data);

      // Redirection éventuelle vers l’accueil :
      window.location.href = "/acceuil";
    } catch (error: any) {
      console.error("❌ Erreur de connexion :", error);

      // ✅ Si le serveur renvoie une erreur spécifique
      if (error.response?.data?.error) {
        setErrorMsg(error.response.data.error);
      } else {
        setErrorMsg("Erreur de connexion. Vérifiez vos identifiants.");
      }

      setShowErrorMsg(true);

      // Masquer après 2 secondes
      setTimeout(() => {
        setShowErrorMsg(false);
      }, 2000);
    }
  };

  const displayErrorMsg = () =>{
        setShowErrorMsg(true)
        setTimeout(() => {
          setShowErrorMsg(false)
        }, 2000);
  }

  return (
    <div className="container mt-5">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          placeholder="Email"
          className="form-control my-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          className="form-control my-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {showErrorMsg && (
          <div className="alert alert-danger py-2 text-center">
            {errorMsg}
          </div>
        )}
        
        <button className="btn btn-primary" type="submit">Se connecter</button>
      </form>
    </div>
  );
}
