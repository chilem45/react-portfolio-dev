import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import styles from "./AlertMessage.scss";
const AlertMessage = ({ message, variant }) => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
        <div id="containerAlert">
      <Alert variant={variant} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{message}</Alert.Heading>
      </Alert>
      </div>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
};

export default AlertMessage;