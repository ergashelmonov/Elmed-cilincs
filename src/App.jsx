import { Route, Routes } from "react-router-dom";
import { AdminPage, Login } from "./pages";
import { PrivateRoute } from "./router/PriviteRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<AdminPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
