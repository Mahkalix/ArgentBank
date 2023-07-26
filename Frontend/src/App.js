import "../src/style/App.css";
import Route from "../src/router/route";
import Footer from "../src/components/Footer";
import Header from "../src/components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Route />
      <Footer />
    </div>
  );
}

export default App;
