import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookCardHome from "./BookCardHome";
import booksFantasy from "../data/fantasy.json";
import booksHistory from "../data/history.json";
import booksHorror from "../data/horror.json";
import booksRomance from "../data/romance.json";
import booksScifi from "../data/scifi.json";
import CommentArea from "./CommentArea";

const BookListHome = function () {
  // converto in Hook lo state
  const [singleBook, setSingleBook] = useState(booksFantasy);
  const [asin, setAsin] = useState("");

  // sta roba non ti serve più
  // state = {
  //   singleBook: booksFantasy,
  //   asin: "",
  // };
  // funzione che cambia lo state, grazie al parametro
  // changeAsin = newAsin => {
  //   this.setState({ asin: newAsin });
  // };

  return (
    <Container style={{ marginTop: 60, marginBottom: 90 }}>
      <Nav variant="tabs" defaultActiveKey="/home" className="my-5 justify-content-center">
        <Nav.Item>
          <Nav.Link
            href="#"
            onClick={() => {
              setSingleBook(booksFantasy);
            }}
          >
            Fantasy
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              setSingleBook(booksHistory);
            }}
          >
            History
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-2"
            onClick={() => {
              setSingleBook(booksHorror);
            }}
          >
            Horror
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-3"
            onClick={() => {
              setSingleBook(booksRomance);
            }}
          >
            Romance
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-4"
            onClick={() => {
              setSingleBook(booksScifi);
            }}
          >
            Scifi
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <h2 className="text-center mb-5">Category: Romanzi Fantasy</h2>
      <Row>
        <Col className={asin !== "" ? "md-12" : "md-8"}>
          <Row>
            {singleBook.map(book => {
              return (
                <BookCardHome
                  book={book}
                  key={book.asin}
                  setAsin={setAsin}
                  asin={asin} // informiamo il componenete libro di quale libro sia seleziato
                />
              );
            })}
          </Row>
        </Col>
        {/* questa comparazione mi serve per dire: se è selezionato un libro allora fammi vedere i commenti affianco, altrimenti no */}
        {asin !== "" && (
          <Col md={4}>
            <CommentArea asin={asin} />
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default BookListHome;
