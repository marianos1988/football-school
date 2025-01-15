import { useState } from "react";


export const useRegister = () => {

  const [statePass, setStatePass] = useState(false);
  const [statePass2, setStatePass2] = useState(false);

  const viewPass = () => {
    setStatePass(!statePass);
  }

  const viewPass2 = () => {
    setStatePass2(!statePass2);
  }

  return {
    statePass,
    statePass2,
    viewPass,
    viewPass2
  }
}

