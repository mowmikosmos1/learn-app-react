import { isGeneratorObject } from "util/types";
import "./App.css";

import Button from "./components/buttonElement";
import AppC from "./components/AppContent";

function App() {
  return (
    <>
      <AppC content="content" />
      <div>
        <Button buttonName="przejdz" url="" />
      </div>
    </>
  );
}

export default App;
