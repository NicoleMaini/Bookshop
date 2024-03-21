import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const BookCardHome = function (props) {
  // state = {
  //   selected: false,
  // };

  return (
    // qui abbiamo utilizzato la props che entra con il nome apposito assegnatogli nel file BookListHome, per avere il riferimento dell'elemento da usare

    <Col data-testid="book-id" className={props.asin ? "col-lg-6 p-2 bookCard" : "col-md-6 col-lg-4 p-2 bookCard"}>
      {/* invece di comparare il valore boleano selected, ora compariamo l'asin del libro selezionato con l'asin del componente */}
      <Card
        data-testid="book-card-id"
        className="flex-row"
        style={{ border: props.book.asin === props.asin ? "1px solid red" : "1px solid gray" }}
      >
        <div style={{ width: "11rem", height: "14rem", overflow: "hidden" }}>
          <Card.Img
            data-testid="img-id"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderTopRightRadius: 0,
              borderBottomLeftRadius: 5,
            }}
            onClick={() => {
              // this.setState({ selected: !this.state.selected });
              props.asin === props.book.asin ? props.setAsin("") : props.setAsin(props.book.asin);
              // cambiamo la proprietà asin nello stato di book card
              // gli abbiamo detto di prendere la funzione che setta lo stato dal componente padre e settarla sull'asin attuale
            }}
            variant="top"
            src={props.book.img}
          />
        </div>
        <Card.Body className="col-8 d-flex flex-column">
          <Card.Title className="mb-auto">{props.book.title}</Card.Title>
          <div>
            <Card.Text>
              {props.book.category} | {props.book.price}€
            </Card.Text>
            <Button variant="danger">Compra</Button>
          </div>
        </Card.Body>
      </Card>
      {/* {this.state.selected === true && <CommentArea asin={this.props.book.asin} />} */}
    </Col>
  );
};

export default BookCardHome;
