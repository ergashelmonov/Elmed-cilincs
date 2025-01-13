import { useState } from "react";
import css from "./style.module.css";
import { apiClient } from "../../../../api";
import { Link } from "react-router-dom";

export const CashReports = () => {
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
        .post("/cash_period_report", data)
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
            курсатилган хизматлар хисоботи.
          </h1>

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
              {data?.report?.map((item, i) => (
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
        <form onSubmit={handleSubmit} className={css.box}>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="startDate">
              Курсатилган хизматлар хисобот даврининг бошланиш санасини танланг
              :
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
              Курсатилган хизматлар хисобот даврининг тугаш санасини танланг :
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
          <button type="submit">Хисоботни курсатиш</button>
        </form>
      )}
    </>
  );
};
