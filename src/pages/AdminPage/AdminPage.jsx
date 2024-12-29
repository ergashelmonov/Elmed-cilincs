import { SideBar } from "../../components/shared/sideBar/sideBar";
import css from "./style.module.css";

export const AdminPage = () => {
  const { wrapper, box, search_form, title, info ,info_box} = css;
  return (
    <div className={wrapper}>
      <SideBar />
      <div className={box}>
        <form className={search_form}>
          <input type="search" placeholder="Qidiruv" />
        </form>

        <div>
          <h1 className={title}>
            Xush kelibsiz, Kamalov Fazlidin Isammiddinovich
          </h1>

          <p className={info}>Siz tizimga muvofiqiyatli kirdingiz</p>
          <p className={info}>Sizning rolingiz: BOSS</p>
          <p className={info}>Sesiya tugashiga qadar qolgan vaqt:00:00:--</p>
        </div>
        <div className={info_box}>
          <p className={info}>
            Sizga onlayn konsultatsiya olish uchun ulangan bemorlar soni: 5ta
          </p>
          <p className={info}>
            Siz bugun qabul qilishingiz kerak bo'lgan bemorlar soni: 10ta
          </p>
          <p className={info}>
            Bugun qabul qilingan bemorlar soni: 6ta
          </p>
        </div>
      </div>
    </div>
  );
};
