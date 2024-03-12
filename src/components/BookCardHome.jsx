import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import books from "../data/fantasy.json";

function BookCardHome() {
  return (
    <Container style={{ marginTop: 60, marginBottom: 90 }}>
      <h2 className="text-center mb-5">Category: Romanzi Fantasy</h2>
      <Row>
        {books.map(book => {
          return (
            <Col xs={12} lg={6} xl={4} key={book.asin} className="p-2">
              <Card className="flex-row">
                <div style={{ width: "11rem", height: "15rem" }}>
                  <Card.Img
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    variant="top"
                    src={book.img}
                  />
                </div>
                <Card.Body className="col-8 d-flex flex-column">
                  <Card.Title className="mb-auto">{book.title}</Card.Title>
                  <div>
                    <Card.Text>
                      {book.category} | {book.price}€
                    </Card.Text>
                    <Button variant="danger">Compra</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default BookCardHome;
