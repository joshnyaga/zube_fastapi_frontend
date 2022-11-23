import "antd/dist/antd.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./Projects";
import Layout from "./Layout";
import WorkSpace from "./WorkSpace";
import Analytics from "./Analytics";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Projects />} />
          <Route path="/workspace/*" element={<WorkSpace />} />
          <Route path="/analytics/*" element={<Analytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


