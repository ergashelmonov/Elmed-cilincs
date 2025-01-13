import { Link } from "react-router-dom";
import css from "./style.module.css";
import { useApi } from "../../../hooks/useApi";

export const ReportsTable = () => {
    const { data } = useApi("/report");
  return (
    <div className={css.box}>
      <h1 className={css.title}>{data?.correct_date}</h1>

      <table className={css.table}>
        <thead>
          <tr>
            <th>Сана</th>
            <th>Хизмат тури</th>
            <th>Картадан туланган</th>
            <th>Накд туланган</th>
            <th>Онлайн туланган</th>
            <th>Туланмаган</th>
          </tr>
        </thead>
        <tbody>
          {data?.services?.map((item, i) => (
            <tr key={i}>
              <td>{data?.correct_date}</td>
              <td>{item?.type}</td>
              <td style={{ textAlign: "center" }}>{item?.paid_card}</td>
              <td style={{ textAlign: "center" }}>{item?.paid_cash}</td>
              <td style={{ textAlign: "center" }}>{item?.paid_online}</td>
              <td style={{ textAlign: "center" }}>{item?.not_paid}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={2} style={{ textAlign: "center" }}>
              Жами
            </td>
            <td style={{ textAlign: "center" }}>{data?.totals?.paid_card}</td>
            <td style={{ textAlign: "center" }}>{data?.totals?.paid_cash}</td>
            <td style={{ textAlign: "center" }}>{data?.totals?.paid_online}</td>
            <td style={{ textAlign: "center" }}>{data?.totals?.not_paid}</td>
          </tr>
        </tbody>
      </table>
      <Link to={"details"} style={{ marginLeft: "30px", color: "blue" }}>
        Хисоботнинг батафсил маълумотлари бу ерда
      </Link>
    </div>
  );
};
