import { useEffect, useState } from "react";
import { apiClient } from "../../../../api";
import css from "./style.module.css";
import { Link } from "react-router-dom";

export const DailyCashReport = () => {
  const [data, setData] = useState(null);
  const [date, setDate] = useState("");

  const submit = (e) => {
    e.preventDefault();

    apiClient
      .post("/daily_cash_register_report", { date: date })
      .then((data) => {
        setData(data.data);
      });
  };

  return (
    <>
      {data ? (
        <div className={css.box}>
          <h1 className={css.title}>{data?.date}</h1>

          <table className={css.table}>
            <thead>
              <tr>
                <th>Сана</th>
                <th>Транзакция вакти</th>
                <th>Хизмат тури</th>
                <th>Хизмат номи</th>
                <th>Хизмат курсатувчи ходим</th>
                <th>Мижоз номи</th>
                <th>Касса амалини бажарган ходим</th>
                <th>Касса амалиёти</th>
                <th>Кирим</th>
                <th>Чиким</th>
                <th>Колдик</th>
              </tr>
            </thead>
            <tbody>
              {data?.records?.map((item, i) => (
                <tr>
                  <td>{item?.date}</td>
                  <td style={{ textAlign: "center" }}>{item?.time}</td>
                  <td>{item?.type_service}</td>
                  <td>{item?.type_servicel}</td>
                  <td>{item?.service_person}</td>
                  <td>{item?.full_name_patient}</td>
                  <td>{item?.cash_person}</td>
                  <td>{item?.cash_oper}</td>
                  <td style={{ textAlign: "center" }}>{item?.income}</td>
                  <td style={{ textAlign: "center" }}>{item?.expence}</td>
                  <td style={{ textAlign: "center" }}>{item?.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to={"/reports"} style={{ marginLeft: "30px", color: "blue" }}>
            Оркага кайтиш
          </Link>
        </div>
      ) : (
        <form
          onSubmit={submit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            margin: "100px auto",
          }}
        >
          <label htmlFor="date">
            Курсатилган хизматлар хисобот санасини танланг
          </label>
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={css.input}
          />
          <button>Хисоботни курсатиш</button>
        </form>
      )}
    </>
  );
};
