import { createContext, ReactNode, useState } from "react";
import useMessageClientApi from "./../../Hooks/useMessageClienteApi";

type MessagesClientType = {
  getMessage: (
    name: string,
    email: string,
    phone: string,
    messageServer: string
  ) => Promise<any>;
  messageServer: string;
};

export const MessagesClientContext = createContext({} as MessagesClientType);

export const MessagesClientProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const api = useMessageClientApi();

  const [messageServer, setMessageServer] = useState("");

  const getMessage = async (
    name: string,
    email: string,
    phone: string,
    message: string
  ) => {
    const data = await api.getMessage(name, email, phone, message);
    setMessageServer(data.message);
    return data;
  };

  return (
    <MessagesClientContext.Provider value={{ getMessage, messageServer }}>
      {children}
    </MessagesClientContext.Provider>
  );
};
