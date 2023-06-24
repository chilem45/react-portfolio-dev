import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import styles from "./AlertMessage.scss";
const AlertMessage = ({ message, variant, show }) => {
  const [Show, setShow] = useState(show);

  if (show) {
    return (
        <Alert id="containerAlert" variant={variant} onClose={() => setShow(true)} dismissible>
          <Alert.Heading>Information sur l'envoie</Alert.Heading>
      <hr />
      <p className="mb-0">
      {message}
      </p>
        </Alert>
    );
  }
};

export default AlertMessage;
