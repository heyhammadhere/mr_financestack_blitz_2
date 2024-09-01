import React, { createContext, useState } from 'react';


export const MessageBoxAcrossApplicationContext = createContext();


export const MessageBoxAcrossApplicationProvider = ({ children }) => {
  
  const [show, setShow] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [message, setMessage] = useState({});


  const updateMessageInfo = (newHeader, newBody, newVariant) => {
    setMessage(prevMessage => ({
      ...prevMessage,
      header: newHeader,
      body: newBody,
      variant: newVariant,     
     }));
  };


    return (
      <MessageBoxAcrossApplicationContext.Provider 
        

      value={{
        show,
        setShow,
        handleClose,
        handleShow,
        message,
        setMessage,
        updateMessageInfo
      }}
      >

  {children}
      </MessageBoxAcrossApplicationContext.Provider>
    );


}


export default MessageBoxAcrossApplicationProvider;
