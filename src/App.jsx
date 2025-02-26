import { Suspense } from "react";
import { CircleLoader } from "react-spinners";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";
function App() {
  return (
    <Suspense fallback={<CircleLoader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="work" element={<Projects />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
