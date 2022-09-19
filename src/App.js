import "./App.css";
import Navbar from "./Components/Navbar";
import Mainbar from "./Components/Mainbar";
import Chatbar from "./Components/Chatbar";

function App() {
  return (
      <div className="App grid grid-cols-19 bg-[#25262b] w-full h-screen divide-x divide-slate-100/70 ">
          <Navbar />
          <Mainbar />
          <Chatbar />
     </div>
  );
}

export default App;
