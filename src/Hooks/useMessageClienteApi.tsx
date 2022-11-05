import axios from "axios";

const uri = axios.create({
  baseURL: "https://system-admin-zendteam.herokuapp.com",
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
