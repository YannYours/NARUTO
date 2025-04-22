import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Confirm() {
  const [confirmationCodeUser, setConfirmationCodeUser] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const req = await api.post("/confirm_registering", { confirmationCodeUser });
      const response = req.data;

      if (response.success) {
        setMessage("Inscription réussie !");
        setTimeout(() => {
          navigate("/");
        }, 2000); // redirige après 2 secondes
      } else {
        setMessage(response.message || "Une erreur est survenue.");
      }
    } catch (err) {
      setMessage("Erreur lors de l'action exécutée");
      console.error(err.message);
    }
  }

  return (
    <form className="form" id="ConfirmRegisterForm" onSubmit={handleSubmit}>
      <p className="title">Confirmation Inscription</p>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          name="confirmationCodeUser"
          id="confirmationCodeUser"
          placeholder="Entrez votre code de confirmation"
          required
          value={confirmationCodeUser}
          onChange={(e) => setConfirmationCodeUser(e.target.value)}
        />
      </div>
      <small className="form-text text-muted">
        Le code n'est valide que pour 1 heure. Passé ce délai, recommencez le processus.
      </small>
      <br />
      <button type="submit">
        Valider
      </button>
      <br />

      {message && (
        <div className="alert alert-info text-center mt-3">{message}</div>
      )}
    </form>
  );
}
