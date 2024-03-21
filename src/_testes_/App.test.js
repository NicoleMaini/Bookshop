import { render, screen } from "@testing-library/react";
import BookWelcome from "../components/BookWelcome";
import BookListHome from "../components/BookListHome";
import booksFantasy from "../data/fantasy.json";

// 1) Verifica che il componente Welcome venga montato correttamente.
// 2) Verifica che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato.
// 3) Verifica che il componente CommentArea venga renderizzato correttamente.
// 4) Verifica, magari con più tests, che il filtraggio dei libri tramite navbar si comporti come previsto.
// 5) Verifica che, cliccando su un libro, il suo bordo cambi colore.
// 6) Verifica che, cliccando su di un secondo libro dopo il primo, il bordo del primo libro ritorni normale.
// 7) Verifica che all’avvio della pagina, senza aver ancora cliccato su nessun libro, non ci siano istanze del componente SingleComment all’interno del DOM.
// 8) Verifica infine che, cliccando su di un libro con recensioni, esse vengano caricate correttamente all’interno del DOM.

// delimita all'interno proprio del codice un gruppo di test che hanno qualcosa in comune
describe("render componenet", () => {
  it("render welcome", () => {
    // inserire render, ovvero il componente che ci renderizza il componenete che vogliamo testare
    render(<BookWelcome />);
    const alert = screen.getByText(/Benvenuto!/i); // testo scritto esattamente come all'interno dell'alert da controllorare
    expect(alert).toBeInTheDocument();
  });
});

describe("filter book", () => {
  it("render if cards === json.length", async () => {
    render(<BookListHome />); // inserire come componenete da analizzare il componenete in cui vengono inserite le cose da
    const bookCard = await screen.findAllByTestId("book-id");
    expect(bookCard).toHaveLength(booksFantasy.length);
  });
});
