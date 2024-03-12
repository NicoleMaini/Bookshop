import "./App.css";
// agg bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import BookNavbar from "./components/BookshopNavbar";
import BookFooter from "./components/BookshopFooter";
import BookCardHome from "./components/BookCardHome";
import BookWelcome from "./components/BookWelcome";

function App() {
  return (
    <div>
      <BookNavbar />
      <BookWelcome />
      <BookCardHome />
      <BookFooter />
    </div>
  );
}

export default App;
