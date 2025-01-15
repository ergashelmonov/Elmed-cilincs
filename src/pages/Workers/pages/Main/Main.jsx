import css from "./style.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useWorkers } from "../../../../store/useWorkers";
import { apiClient } from "../../../../api";

export const Main = () => {
  const [data, setData] = useState([]);
  const { setDeleteWorker, setId, deleteWorker } = useWorkers();

  useEffect(() => {
    apiClient.get("/inactive-employees").then((data) => {
      setData(data.data);
    });
  }, [deleteWorker]);

  return (
    <div className={css.box}>
      <h1 className={css.title}>
        EL-MED клиникасида ишловчи ишчи-ходимлар руйхати реестри
      </h1>
      <table className={css.table}>
        <thead>
          <tr>
            <td>№</td>
            <td>Ходим ФИШ</td>
            <td>Лавозими</td>
            <td>Ишга кабул килинган сана</td>
            <td>Телефон раками</td>
            <td>ID телеграмм</td>
            <td>эл@ почта</td>
            <td>Role</td>
            <td>Логин</td>
            <td>Статус</td>
            <td>Паролни узгартириш</td>
            <td>Маълумотларни узгартириш</td>
            <td>Руйхатдан учириш</td>
          </tr>
        </thead>
        <tbody>
          {data
            ?.sort((a, b) => a["№"] - b["№"])
            .map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item["№"]}</td>
                  <td>{item["Ходим ФИШ"]}</td>
                  <td>{item["Лавозими"]}</td>
                  <td>{item["Ишга кабул килинган сана"]}</td>
                  <td>{item["Телефон рақами"]}</td>
                  <td>{item["ID телеграмм"]}</td>
                  <td>{item["эл@ почта"]}</td>
                  <td>{item["Role"]}</td>
                  <td>{item["Логин"]}</td>
                  <td>{item["Статус"]}</td>
                  <td>Паролни қайта ўрнатиш</td>
                  <td>
                    <Link
                      to={"/workers/employee/" + item?.id}
                      style={{ textDecoration: "underline" }}
                    >
                      Тахрирлаш
                    </Link>
                  </td>
                  <td
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                    onClick={() => {
                      setDeleteWorker(true);
                      setId(item?.id);
                    }}
                  >
                    Ходимни ишдан бушатиш
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <Link to={"/workers/add-employee"}>
        <button className={css.btn}>Руйхатга янги ходим кушиш</button>
      </Link>
    </div>
  );
};
