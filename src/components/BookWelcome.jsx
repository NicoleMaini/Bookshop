import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function BookWelcome() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success" style={{ marginTop: 90 }} className="w-50 mx-auto">
        <Alert.Heading>Benvenuto!</Alert.Heading>
        <p>
          Qui potrai sfogliare la nostra libreria e scegliere fra una vasta gamma di offerte il libro che fa per te :)
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Chiudi
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  );
}

export default BookWelcome;
