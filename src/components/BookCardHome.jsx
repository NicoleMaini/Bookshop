import { Component } from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class BookCardHome extends Component {
  // state = {
  //   selected: false,
  // };
  render() {
    return (
      // qui abbiamo utilizzato la props che entra con il nome apposito assegnatogli nel file BookListHome, per avere il riferimento dell'elemento da usare
      <Col xs={12} lg={6} className="p-2 bookCard">
        {/* invece di comparare il valore boleano selected, ora compariamo l'asin del libro selezionato con l'asin del componente */}
        <Card
          className="flex-row"
          style={{ border: this.props.book.asin === this.props.asin ? "1px solid red" : "1px solid gray" }}
        >
          <div style={{ width: "11rem", height: "14rem", overflow: "hidden" }}>
            <Card.Img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderTopRightRadius: 0,
                borderBottomLeftRadius: 5,
              }}
              onClick={() => {
                // this.setState({ selected: !this.state.selected });
                this.props.changeAsin(this.props.book.asin); // cambiamo la proprietà asin nello stato di book card
                // gli abbiamo detto di prendere la funzione che setta lo stato dal componente padre e settarla sull'asin attuale
              }}
              variant="top"
              src={this.props.book.img}
            />
          </div>
          <Card.Body className="col-8 d-flex flex-column">
            <Card.Title className="mb-auto">{this.props.book.title}</Card.Title>
            <div>
              <Card.Text>
                {this.props.book.category} | {this.props.book.price}€
              </Card.Text>
              <Button variant="danger">Compra</Button>
            </div>
          </Card.Body>
        </Card>
        {/* {this.state.selected === true && <CommentArea asin={this.props.book.asin} />} */}
      </Col>
    );
  }
}

export default BookCardHome;
