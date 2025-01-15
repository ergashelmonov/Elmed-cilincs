import { Route, Routes } from "react-router-dom";
import { SideBar } from "../../components/shared/sideBar/sideBar";
import css from "./style.module.css";
import { Main } from "./pages/Main/Main";
import { Add } from "./pages/Add/Add";
import { Edit } from "./pages/Edit/Edit";
import { useWorkers } from "../../store/useWorkers";
import { DeleteModal } from "../../components/shared/DeleteModal/DeleteModal";

export const Workers = () => {
  const { deleteWorker } = useWorkers();

  return (
    <div className={css.wrapper}>
      {deleteWorker && <DeleteModal />}
      <SideBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/add-employee" element={<Add />} />
        <Route path="/employee/:id" element={<Edit />} />
      </Routes>
    </div>
  );
};
