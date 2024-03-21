import { render, screen, fireEvent } from "@testing-library/react";
import BookListHome from "../components/BookListHome";

// 5) Verifica che, cliccando su un libro, il suo bordo cambi colore.
// 6) Verifica che, cliccando su di un secondo libro dopo il primo, il bordo del primo libro ritorni normale.
// 7) Verifica che all’avvio della pagina, senza aver ancora cliccato su nessun libro, non ci siano istanze del componente SingleComment all’interno del DOM.
// 8) Verifica infine che, cliccando su di un libro con recensioni, esse vengano caricate correttamente all’interno del DOM.

describe("function card", () => {
  it("check change border-color", () => {
    render(<BookListHome />);
    const images = screen.getAllByTestId("img-id");
    fireEvent.click(images[0]); // questo è perché essendo un array il valore fornitoci da cards, dobbiamo digli di cliccare
    // il primo elemento dell'array (come un qualsiasi altro elemento dell'array) per verificare la funzionalità del componente
    const bookCard = screen.getAllByTestId("book-card-id");
    expect(bookCard[0]).toHaveStyle("border: 1px solid red");
  });
});
