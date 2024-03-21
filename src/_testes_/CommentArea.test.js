import { fireEvent, render, screen } from "@testing-library/react";
import BookListHome from "../components/BookListHome";

// 3) Verifica che il componente CommentArea venga renderizzato correttamente.
// 4) Verifica, magari con più tests, che il filtraggio dei libri tramite navbar si comporti come previsto.
// 5) Verifica che, cliccando su un libro, il suo bordo cambi colore.
// 6) Verifica che, cliccando su di un secondo libro dopo il primo, il bordo del primo libro ritorni normale.
// 7) Verifica che all’avvio della pagina, senza aver ancora cliccato su nessun libro, non ci siano istanze del componente SingleComment all’interno del DOM.
// 8) Verifica infine che, cliccando su di un libro con recensioni, esse vengano caricate correttamente all’interno del DOM.

// cotrolliamo se la comment area è presente allìavvio

describe("render commentArea", () => {
  it("invisible at lunch", () => {
    render(<BookListHome />);
    const area = screen.queryByTestId("comment-area-id");
    expect(area).toBeNull(); // per verificare che una cosa NON sia presente nella pagina al momento richiesto
  });

  // controlliamo se diventa presente al click della card

  it("visible at the click of book", () => {
    render(<BookListHome />);
    const cards = screen.getAllByTestId("img-id");
    fireEvent.click(cards[0]); // questo è perché essendo un array il valore fornitoci da cards, dobbiamo digli di cliccare
    // il primo elemento dell'array (come un qualsiasi altro elemento dell'array) per verificare la funzionalità del componente
    const area = screen.getByTestId("comment-area-id");
    expect(area).toBeInTheDocument("border: 1px solid red");
  });
});
