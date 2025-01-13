import { Route, Routes } from "react-router-dom";
import { AdminPage, Login, Reports, Workers } from "./pages";
import { PrivateRoute } from "./router/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<AdminPage />} />
          <Route path="/reports/*" element={<Reports />} />
          <Route path="/workers/*" element={<Workers />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
