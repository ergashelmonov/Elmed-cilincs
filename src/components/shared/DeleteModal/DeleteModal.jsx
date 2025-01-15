import { apiClient } from "../../../api";
import { useWorkers } from "../../../store/useWorkers";
import css from "./style.module.css";

export const DeleteModal = () => {
  const { setDeleteWorker, id } = useWorkers();

  function deleteWorker() {
    apiClient
      .post("/terminate-employee", { employee_id: id })
      .then((response) => setDeleteWorker(false));
    ;
  }

  return (
    <div
      className={css.wrapper}
      onClick={(e) => {
        e.target === e.currentTarget ? setDeleteWorker(false) : "";
      }}
    >
      <div className={css.modal}>
        <h2>Чиндан ҳам ушбу ходимни ишдан бўшатмоқчимисиз ?</h2>
        <div className={css.btn_box}>
          <button className={css.btn1} onClick={deleteWorker}>
            Ҳа
          </button>{" "}
          <button className={css.btn2} onClick={() => setDeleteWorker(false)}>
            Йўқ
          </button>
        </div>
      </div>
    </div>
  );
};
