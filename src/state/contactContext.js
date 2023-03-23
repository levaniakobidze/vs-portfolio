import { createContext, useState, useEffect } from "react";

export const ContactContext = createContext();
const ContextProvider = (props) => {
  const [contact, setContact] = useState(true);
  const [socials, setSocials] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 1023) {
      setContact(false);
      setSocials(false);
    }
  }, []);
  return (
    <ContactContext.Provider
      value={{ contact, setContact, socials, setSocials }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContextProvider;
