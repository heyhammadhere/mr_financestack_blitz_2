import React, { useState,useContext,useEffect } from "react";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import {MessageBoxAcrossApplicationContext} from '../../Context/MessageBoxAcrossApplicationContext'




const MessageBoxAcrossApplication = () => {
  const { show,handleClose,message} = useContext(MessageBoxAcrossApplicationContext);

       
    if(show)

    {
    return (
        <>
   

       <div></div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{message.header}</Modal.Title>
            </Modal.Header>
            <Modal.Body> {message.body} </Modal.Body>
            <Modal.Footer>
              <Button variant={message.variant} onClick={handleClose}>
                OK
              </Button>             
            
            </Modal.Footer>
          </Modal>
        </>
      );   
    }
    
    
    else {
      return (
        <>
       </>
      )
    }
      

  }
export default MessageBoxAcrossApplication
  