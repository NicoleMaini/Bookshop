import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// const obj = { comment: "", rate: 1, elementId: this.props.asin, author: "" };

class CommentAdd extends Component {
  // creao uno state, e una costante per ricevere i valori dal form e creare la fetch
  state = {
    review: { comment: "", rate: 1, elementId: this.props.asin },
  };

  formFetch = e => {
    e.preventDefault();
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.review), // qui sto inviando i miei value del form sottoforma di stringa al server
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxYjFiZDRjNTllYzAwMTk5MGQ3OWUiLCJpYXQiOjE3MDkyODk5MTgsImV4cCI6MTcxMDQ5OTUxOH0.Xetjs2pF9la9RUExay-929FxXJMdp812qWLuaQgmWwY",
        "Content-Type": "application/json",
      },
    })
      .then(resp => {
        if (resp.ok) {
          window.alert("Commento pubblicato");
          this.setState({ review: { comment: "", rate: 1, elementId: this.props.asin } }); // qui sto resettando il form
        }
      })
      .catch(error => {
        console.log("Error", error);
      });
  };

  render() {
    return (
      <Form className="card m-3 p-3" onSubmit={this.formFetch}>
        <h6 className="mb-3">Dicci qui sotto cosa ne pensi!</h6>
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            onChange={
              // funzione che viene eseguita ad ogni cambiamento dell'input
              e => {
                // setto il nuovo stato ma nel frattempo mi "spreaddo" quello vecchiio in modo da mantenermi tutti i valori
                this.setState({
                  review: {
                    ...this.state.review,
                    author: e.target.value,
                  },
                });
              }
            }
            value={this.state.review.author}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group> */}
        <Form.Group className="mb-3" controlId="formBasicTextarea">
          {/* <Form.Label></Form.Label> */}
          <Form.Control
            as="textarea"
            row={5}
            placeholder="Lascia qui il tuo commento"
            aria-label="With textarea"
            onChange={
              // funzione che viene eseguita ad ogni cambiamento dell'input
              e => {
                // setto il nuovo stato ma nel frattempo mi "spreaddo" quello vecchiio in modo da mantenermi tutti i valori
                this.setState({
                  review: {
                    ...this.state.review,
                    comment: e.target.value,
                  },
                });
              }
            }
            value={this.state.review.comment}
          />
        </Form.Group>
        <Form.Select
          aria-label="Default select example"
          onChange={
            // funzione che viene eseguita ad ogni cambiamento dell'input
            e => {
              // setto il nuovo stato ma nel frattempo mi "spreaddo" quello vecchiio in modo da mantenermi tutti i valori
              this.setState({
                review: {
                  ...this.state.review,
                  rate: e.target.value,
                },
              });
            }
          }
          value={this.state.review.rate}
        >
          <option>Lasciaci un voto:</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </Form.Select>
        <Button className="m-3 w-25 mx-auto" variant="danger" type="submit">
          Invia
        </Button>
      </Form>
    );
  }
}

export default CommentAdd;
