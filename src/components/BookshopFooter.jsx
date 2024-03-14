import Container from "react-bootstrap/Container";
import Anchor from "react-bootstrap/Anchor";
import { MdOutlinePayment, MdQuestionAnswer } from "react-icons/md";
import { ImTruck } from "react-icons/im";
import { FaHeadset } from "react-icons/fa";

function BookFooter() {
  return (
    <div className="bg-body-tertiary">
      <Container fluid className="d-flex justify-content-center py-4 fs-5">
        <Anchor href="#" className="text-decoration-none text-dark me-4">
          <MdOutlinePayment /> Carta
        </Anchor>
        <Anchor href="#" className="text-decoration-none text-dark me-4">
          <MdQuestionAnswer /> Assistenza clienti
        </Anchor>
        <Anchor href="#" className="text-decoration-none text-dark me-4">
          <FaHeadset /> Contattaci
        </Anchor>
        <Anchor href="#" className="text-decoration-none text-dark ">
          <ImTruck /> Spedizioni
        </Anchor>
      </Container>
    </div>
  );
}

export default BookFooter;
