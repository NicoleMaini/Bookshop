import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CommentAdd = function (props) {
  // creao uno state, e una costante per ricevere i valori dal form e creare la fetch
  // state = {
  // review: { comment: "", rate: 1, elementId: this.props.asin }, // elementId nello stato non viene più riaggiornato in quanto lo state stesso
  // viene "sovrascritto" da this.props.asin
  // };

  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(1);
  const [elementId, setElementId] = useState(props.asin);

  const formFetch = e => {
    e.preventDefault();
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify({ comment, rate, elementId }), // qui sto inviando i miei value aggiornati allo stato attuale del form sottoforma di stringa al server
      // ma prima dall'insieme devo creare un oggetto che poi il stringify andrà a caricare
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY4NWRhOWFiYWQyODAwMTliZDUyZTEiLCJpYXQiOjE3MTA3NzU3MjIsImV4cCI6MTcxMTk4NTMyMn0.jx4VoW-lw4C_9Ipk-C6pWWjmhEX9pWzgP1_BCsXeiqM",
        "Content-Type": "application/json",
      },
    })
      .then(resp => {
        if (resp.ok) {
          window.alert("Commento pubblicato");
          setComment("");
          setRate(1);
          setElementId(props.asin); // qui sto resettando il form
          props.fetch();
        }
      })
      .catch(error => {
        console.log("Error", error);
      });
  };

  // creo un ambiente protetto per richiamare la fetch ogni volta che lo stato o le propr vengono cambiate
  useEffect(() => {
    setElementId(props.asin);
  }, [props.asin]);

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.setState({
  //       review: {
  //         ...this.state.comment, // spreddo il vecchio state e ci aggiungo l'elemento nuovo che si andrà a ricreare di volta in volta
  //         elementId: this.props.asin,
  //       },
  //     });
  //   }
  // }

  return (
    <Form className="card m-3 p-3" onSubmit={formFetch}>
      <h6 className="mb-3">Dicci qui sotto cosa ne pensi!</h6>
      <Form.Group className="mb-3" controlId="formBasicTextarea">
        <Form.Control
          as="textarea"
          row={5}
          placeholder="Lascia qui il tuo commento"
          aria-label="With textarea"
          onChange={
            // funzione che viene eseguita ad ogni cambiamento dell'input
            e => {
              // setto il nuovo stato ma nel frattempo mi "spreaddo" quello vecchiio in modo da mantenermi tutti i valori
              setComment(e.target.value);
            }
          }
          value={comment}
        />
      </Form.Group>
      <Form.Select
        aria-label="Default select example"
        onChange={
          // funzione che viene eseguita ad ogni cambiamento dell'input
          e => {
            // setto il nuovo stato ma nel frattempo mi "spreaddo" quello vecchiio in modo da mantenermi tutti i valori
            setRate(e.target.value);
          }
        }
        value={rate}
      >
        <option>Lasciaci un voto:</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </Form.Select>
      <Button className="m-3 w-25 mx-auto" variant="danger" type="submit">
        Invia
      </Button>
    </Form>
  );
};

export default CommentAdd;
