import logo from "./logo.svg";
import "./App.css";
import FactoryFilters from "./components/FactoryFilters";
import useDebounce from "./hooks/useDebounce";
import { useState } from "react";
import CodePreview from "@uiw/react-code-preview";
function App() {
  const [factoryInfo, setFactoryInfo] = useState("");
  const factoryPollution = useDebounce(factoryInfo, 1000);
  return (
    <div
      className="App"
      style={{
        padding: "8px",
        width: "100vw",
        height: "auto",
        flexFlow: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <CodePreview style={{ textAlign: "left" }} onlyEdit code={code} />
      <div
        style={{
          width: "300px",
          height: "300px",
          margin: "0 auto",
        }}>
        <input
          type="text"
          style={{
            width: "100%",
            height: "33px",
            outline: "3px solid black",
            borderRadius: "8px",
            boxSizing: "border-box",
            border: "unset",
            padding: "6px 10px",
            background: "#efefef",
          }}
          onChange={(e) => setFactoryInfo(e.target.value)}
        />
        <FactoryFilters factoryPollution={factoryPollution} />
      </div>
    </div>
  );
}

export default App;
const code = `import MinHeap from "./heapq";
export default function calculateRequiredFilters(input) {
  let totalFilter = sumArray(input);
  const targetFilter = totalFilter / 2;
  const heap = new MinHeap();
  input.forEach((item) => {
    heap.add(-item);
  });
  let filters = 0;
  while (totalFilter > targetFilter) {
    let lowest = heap.poll();
    let nextItem = lowest / 2;
    totalFilter += nextItem;
    heap.add(nextItem);
    filters++;
  }
  return [filters, totalFilter];
}
function sumArray(arr) {
  let sum = 0;
  arr.forEach((item) => (sum += item));
  return sum;
}
`;
