import { SideBar } from "../../components/shared/sideBar/sideBar";
import { useApi } from "../../hooks/useApi";
import css from "./style.module.css";

export const AdminPage = () => {
  const { wrapper, box, search_form, title, info, info_box } = css;
  const { data } = useApi("/dashboard");

  return (
    <div className={wrapper}>
      <SideBar />
      <div className={box}>
        <form className={search_form}>
          <input type="search" placeholder="Qidiruv" />
        </form>

        <div>
          <h1 className={title}>Xush kelibsiz, {data?.fullname}</h1>

          <p className={info}>Siz tizimga muvofiqiyatli kirdingiz</p>
          <p className={info}>Sizning rolingiz: {data?.role}</p>
          <p className={info}>
            Sessiya tugashiga qadar qolgan vaqt: {data?.session_lifetime} daqiqa
          </p>
        </div>
        <div className={info_box}>
          <p className={info}>
            Sizga onlayn konsultatsiya olish uchun ulangan bemorlar soni:{" "}
            {data?.online_patients_count}ta
          </p>
          <p className={info}>
            Siz bugun qabul qilishingiz kerak bo'lgan bemorlar soni:{" "}
            {data?.today_patients_count}ta
          </p>
          <p className={info}>
            Bugun qabul qilingan bemorlar soni:{" "}
            {data?.today_seen_patients_count} ta
          </p>
        </div>
      </div>
    </div>
  );
};
