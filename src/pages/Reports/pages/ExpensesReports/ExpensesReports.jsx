import { useState } from "react";
import css from "./style.module.css";
import { apiClient } from "../../../../api";
import { Link } from "react-router-dom";

export const ExpensesReports = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);

    if (endDate && newStartDate > endDate) {
      setError("Тугаш вақти бошланиш вақтидан олдин булмаслиги шарт !");
    } else {
      setError("");
    }
  };

  const handleEndDateChange = (e) => {
    const newEndDate = e.target.value;
    setEndDate(newEndDate);

    if (startDate && newEndDate < startDate) {
      setError("Тугаш вақти бошланиш вақтидан олдин булмаслиги шарт !");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!startDate || !endDate) {
      setError("Иккала сана xам талаб қилинади !");
      return;
    }

    if (startDate > endDate) {
      setError("Тугаш вақти бошланиш вақтидан олдин булмаслиги шарт !");
      return;
    }

    setError("");

    const data = {
      start_date: startDate,
      end_date: endDate,
    };

    try {
      const response = apiClient
        .post("/period_expense_list", data)
        .then((data) => setData(data.data));
      console.log("Reports fetched successfully:", response.data);
    } catch (error) {
      console.error("Error fetching reports:", error);
      setError("xисоботларни олиб болмади Илтимос қайта уриниб коринг");
    }
  };

  return (
    <>
      {data ? (
        <div className={css.box}>
          <h1 className={css.title}>
            {data?.start_date} ва {data?.end_date} оралигидаги саналарда
            xаражатлар руйҳати
          </h1>

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
              {data?.expense_list?.map((item, i) => (
                <tr>
                  <td>{item?.date}</td>
                  <td>{item?.expense_name}</td>
                  <td>{item?.expense_initiator}</td>
                  <td>{item?.note}</td>
                  <td style={{ textAlign: "center" }}>
                    {item?.expense_amount}
                  </td>
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
        <form onSubmit={handleSubmit} className={css.box}>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="startDate">
              Касса хисоботи даврининг бошланиш санасини танланг :
            </label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={handleStartDateChange}
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="endDate">
              Касса хисоботи даврининг тугаш санасини танланг :
            </label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={handleEndDateChange}
              required
            />
          </div>
          {error && (
            <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
          )}
          <button type="submit">Харажатлар руйхатини курсатиш</button>
        </form>
      )}
    </>
  );
};
