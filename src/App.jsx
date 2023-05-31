import "./App.css";
import "react-responsive-modal/styles.css";

import Navbar from "./components/Navbar";
import TicketList from "./components/TicketList";

function App() {
  return (
    <>
      <Navbar />
      <TicketList />
    </>
  );
}

export default App;
