import "./styles.css";
import Accordion from "./Accordion";
import options from "./data/options";
import Sandbox from "./Sandbox";

export default function App() {
  return (
    <>
      <Sandbox>CodeSandbox</Sandbox>
      <div className="App">
        <Accordion options={options} />
      </div>
    </>
  );
}
