import { useEffect, useState } from "react";
import { apiClient } from "../../../../api";
import css from "./style.module.css";
import { Link } from "react-router-dom";

export const DailyReports = () => {
  const [data, setData] = useState(null);
  const [date, setDate] = useState("");

  const submit = (e) => {
    e.preventDefault();

    apiClient.post("/daily-revenue", { selected_date: date }).then((data) => {
      setData(data.data);
    });
  };

  return (
    <>
      {data ? (
        <div className={css.box}>
          <h1 className={css.title}>{data?.correct_date}</h1>

          <table className={css.table}>
            <thead>
              <tr>
                <th>Хизмат тури</th>
                <th>Хизмат курсатувчи ходим</th>
                <th>Мижоз исм шарифи</th>
                <th>Картадан туланган</th>
                <th>Накд туланган</th>
                <th>Онлайн туланган</th>
                <th>Туланмаган</th>
              </tr>
            </thead>
            <tbody>
              {data?.detailed_data?.map((item, i) => (
                <tr key={i}>
                  <td>{item?.type}</td>
                  <td>{item?.doctor}</td>
                  <td>{item?.patient}</td>
                  <td style={{ textAlign: "center" }}>{item?.paid_card}</td>
                  <td style={{ textAlign: "center" }}>{item?.paid_cash}</td>
                  <td style={{ textAlign: "center" }}>{item?.paid_online}</td>
                  <td style={{ textAlign: "center" }}>{item?.not_paid}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={3} style={{ textAlign: "center" }}>
                  Жами
                </td>
                <td style={{ textAlign: "center" }}>
                  {data?.totals?.paid_card}
                </td>
                <td style={{ textAlign: "center" }}>
                  {data?.totals?.paid_cash}
                </td>
                <td style={{ textAlign: "center" }}>
                  {data?.totals?.paid_online}
                </td>
                <td style={{ textAlign: "center" }}>
                  {data?.totals?.not_paid}
                </td>
              </tr>
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
