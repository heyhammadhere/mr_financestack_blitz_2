import React, { useState, useContext } from 'react';
import Alert from 'react-bootstrap/Alert';
import { AlertAcrossApplicationContext } from '../../Context/AlertAcrossApplicationContext'

// This serves as alerts sections for the application


function AlertAcrossApplication() {


  const { showAlert, variantAlert, alertHeading, alertText } = useContext(AlertAcrossApplicationContext);

  const [stateShowAlert, setStateShowAlert] = showAlert;
  const [stateVariantAlert, setStateVariantAlert] = variantAlert;
  const [stateAlertHeading, setStateAlertHeading] = alertHeading;
  const [StateAlertText, setStateAlertText] = alertText;



  if (stateShowAlert) {
    return (
        
        <div id="GlobalAlerts" className="col-sm-6 offset-sm-3">
        <br/>
        <br/>
        <Alert variant={stateVariantAlert} onClose={() => {

          setStateShowAlert(false)
          setStateVariantAlert(false)
          setStateAlertHeading(false)
          setStateAlertText(false)
        }

        } dismissible>
          <Alert.Heading>{stateAlertHeading}</Alert.Heading>

          <p>
            {StateAlertText}
          </p>

        </Alert>
      </div>
    );
  }

  else {
    return (

      <div>

      </div>
    )
  }

}


export default AlertAcrossApplication;