import "./App.css";
// agg bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import BookNavbar from "./components/BookshopNavbar";
import BookFooter from "./components/BookshopFooter";
import BookListHome from "./components/BookListHome";
import BookWelcome from "./components/BookWelcome";

function App() {
  return (
    <div>
      <BookNavbar />
      <BookWelcome />
      <BookListHome />
      <BookFooter />
    </div>
  );
}

export default App;
