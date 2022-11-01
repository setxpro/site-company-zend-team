import React, { useState, useContext } from "react";

import * as C from "./styles";
import { toast } from "react-toastify";
import { MessagesClientContext } from "../../contexts/MessagesClientContext/MessagesClientContext";

const FormContact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sendMessage, setSendMEssage] = useState(false);

  const { getMessage } = useContext(MessagesClientContext);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!name && !email && !phone && !message) {
      toast.error("Por favor, Preencha todos os campos antes de enviar.");
      return;
    }
    if (name && email && phone && message) {
      getMessage(name, email, phone, message);
      toast("Mensagem enviada com sucesso!");
    }

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setSendMEssage(true);
  };

  return (
    <C.FormeContactContent>
      <C.FormContent>
        <C.UserIcon />
        <C.Input
          type="text"
          name="name"
          placeholder="Nome..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </C.FormContent>
      <C.FormContent>
        <C.MailIcon />
        <C.Input
          type="email"
          name="email"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </C.FormContent>
      <C.FormContent>
        <C.WappIcon />
        <C.Input
          type="tel"
          name="phone"
          placeholder="Telefone..."
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </C.FormContent>
      <C.TextAreaContent
        rows={8}
        cols={50}
        placeholder="Mensagem..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></C.TextAreaContent>
      <C.Button onClick={handleSubmit} disabled={sendMessage}>
        Enviar
      </C.Button>
    </C.FormeContactContent>
  );
};

export default FormContact;
