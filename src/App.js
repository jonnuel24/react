import "./App.css";
import Root from "./routes/root";
import "bootstrap/dist/css/bootstrap.min.css";

// import { BeatLoader, ClipLoader } from "react-spinners";
// Importing toastify module
import { ToastContainer } from "react-toastify";
// Import toastify css file
import "react-toastify/dist/ReactToastify.css";
// toast-configuration method,
// it is compulsory method.
// toast.configure();

function App() {
  return (
    <div className="App h-full">
      <Root />
      <ToastContainer />
    </div>
  );
}

export default App;
