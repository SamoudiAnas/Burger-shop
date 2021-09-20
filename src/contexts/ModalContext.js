import React, { useContext, createContext, useState } from "react";

const ModalContext = createContext();

function ModalProvider({ children }) {
  var initialState = {
    selectedModal: "sign up",
    showModal: false,
  };

  const [modal, setModal] = useState(initialState);

  return (
    <ModalContext.Provider value={[modal, setModal]}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;

export const useModalContext = () => {
  return useContext(ModalContext);
};
