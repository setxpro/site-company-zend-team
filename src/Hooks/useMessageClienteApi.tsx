import axios from "axios";

const uri = axios.create({
  baseURL: "http://localhost:3333",
});

const useMessageClientApi = () => ({
  getMessage: async (
    name: string,
    email: string,
    phone: string,
    message: string
  ) => {
    const { data } = await uri.post("/message-client/create", {
      name,
      email,
      phone,
      message,
    });

    return data;
  },
});

export default useMessageClientApi;
