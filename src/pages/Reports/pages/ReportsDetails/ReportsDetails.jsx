import { Link } from "react-router-dom";
import { useApi } from "../../../../hooks/useApi";
import css from "./style.module.css";
export const ReportsDetails = () => {
  const { data } = useApi("/details");
  return (
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
            <tr>
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
            <td style={{ textAlign: "center" }}>{data?.totals?.paid_card}</td>
            <td style={{ textAlign: "center" }}>{data?.totals?.paid_cash}</td>
            <td style={{ textAlign: "center" }}>{data?.totals?.paid_online}</td>
            <td style={{ textAlign: "center" }}>{data?.totals?.not_paid}</td>
          </tr>
        </tbody>
      </table>
      <Link to={"/reports"} style={{ marginLeft: "30px", color: "blue" }}>
        Оркага кайтиш
      </Link>
    </div>
  );
};
