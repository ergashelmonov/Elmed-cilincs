import { useState } from "react";
import { apiClient } from "../../../../api";
import css from "./style.module.css";
import { Link } from "react-router-dom";

export const DailyExpenses = () => {
  const [data, setData] = useState(null);
  const [date, setDate] = useState("");

  const submit = (e) => {
    e.preventDefault();

    apiClient
      .post("/daily_expense_list", { selected_date: date })
      .then((data) => {
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
                <th>Сана</th>
                <th>Харажатлар номи</th>
                <th>Харажат инициатори</th>
                <th>Шарх</th>
                <th>Харажат суммаси</th>
              </tr>
            </thead>
            <tbody>
              {data?.expenses?.map((item, i) => (
                <tr key={i}>
                  <td>{item?.date}</td>
                  <td>{item?.expense_name}</td>
                  <td>{item?.initiator}</td>
                  <td>{item?.note}</td>
                  <td style={{ textAlign: "center" }}>{item?.amount}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={4} style={{ textAlign: "center" }}>
                  Жами
                </td>
                <td style={{ textAlign: "center" }}>{data?.total_expense}</td>
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
          <label htmlFor="date">Харажатлар руйхати санасини танланг</label>
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
