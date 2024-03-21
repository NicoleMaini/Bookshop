import { render, screen, fireEvent } from "@testing-library/react";
import BookListHome from "../components/BookListHome";

// 4) Verifica, magari con più tests, che il filtraggio dei libri tramite navbar si comporti come previsto.
// 5) Verifica che, cliccando su un libro, il suo bordo cambi colore.
// 6) Verifica che, cliccando su di un secondo libro dopo il primo, il bordo del primo libro ritorni normale.
// 7) Verifica che all’avvio della pagina, senza aver ancora cliccato su nessun libro, non ci siano istanze del componente SingleComment all’interno del DOM.
// 8) Verifica infine che, cliccando su di un libro con recensioni, esse vengano caricate correttamente all’interno del DOM.

// delimita all'interno proprio del codice un gruppo di test che hanno qualcosa in comune
describe("function serch-bar book", () => {
  it("first lunch serch-bar visible", () => {
    render(<BookListHome />);
    const search = screen.getByPlaceholderText(/Cerca un libro/i);
    expect(search).toBeInTheDocument();
  });

  it("search ice in the search-bar", async () => {
    render(<BookListHome />);
    const search = screen.getByPlaceholderText(/Cerca un libro/i);
    fireEvent.change(search, { target: { value: "ice" } });
    const booklist = await screen.findAllByTestId("book-id");
    expect(booklist).toHaveLength(8);
  });
});
