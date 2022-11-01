import React from "react";

import * as C from "./styles";

const Main = ({ children }: { children: React.ReactNode }) => {
  return <C.Container>{children}</C.Container>;
};

export default Main;
