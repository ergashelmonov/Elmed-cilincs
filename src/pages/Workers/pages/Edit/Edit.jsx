import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { apiClient } from "../../../../api";
import css from "./style.module.css";

export const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [oldData, setOldData] = useState({});

  useEffect(() => {
    apiClient
      .get(`/employee/${id}`)
      .then((response) => {
        setOldData(response.data);
        Object.keys(response.data).forEach((key) => {
          setValue(key, response.data[key]);
        });
      })
      .catch((error) => {
        console.error("Error fetching doctor data:", error);
      });
  }, [id, setValue]);

  const onSubmit = (data) => {
    apiClient
      .post(`/employee/${id}`, data)
      .then(() => {
        navigate("/workers");
      })
      .catch((error) => {
        console.error("Error updating doctor data:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={css.wrapper}>
      <h2>Доктор маълумотларини таҳрирлаш</h2>

      <div className={css.box}>
        <label>
          Ходимнинг Узбек тили крилл алифбосидаги исми: {oldData.full_name_uz}
        </label>
        <input
          className={css.input}
          {...register("full_name_uz", { required: true })}
        />
        {errors.full_name_uz && <p>Бу майдон тўлдирилиши шарт</p>}
      </div>

      <div className={css.box}>
        <label>
          Ходимнинг Узбек тили лотин алифбосидаги исми:{" "}
          {oldData.full_name_uz_lat}
        </label>
        <input
          className={css.input}
          {...register("full_name_uz_lat", { required: true })}
        />
        {errors.full_name_uz_lat && <p>Бу майдон тўлдирилиши шарт</p>}
      </div>

      <div className={css.box}>
        <label>Ходимнинг Рус тилидаги исми: {oldData.full_name_ru}</label>
        <input
          className={css.input}
          {...register("full_name_ru", { required: true })}
        />
        {errors.full_name_ru && <p>Бу майдон тўлдирилиши шарт</p>}
      </div>

      <div className={css.box}>
        <label>Ходимнинг Қозоқ тилидаги исми: {oldData.full_name_kk}</label>
        <input
          className={css.input}
          {...register("full_name_kk", { required: true })}
        />
        {errors.full_name_kk && <p>Бу майдон тўлдирилиши шарт</p>}
      </div>

      <div className={css.box}>
        <label>Ходимнинг Тожик тилидаги исми: {oldData.full_name_tj}</label>
        <input
          className={css.input}
          {...register("full_name_tj", { required: true })}
        />
        {errors.full_name_tj && <p>Бу майдон тўлдирилиши шарт</p>}
      </div>

      <div className={css.box}>
        <label>
          Ходимнинг Узбек тили крилл алифбосидаги мутахассислиги:{" "}
          {oldData.directions_uz}
        </label>
        <input
          className={css.input}
          {...register("directions_uz", { required: true })}
        />
        {errors.directions_uz && <p>Бу майдон тўлдирилиши шарт</p>}
      </div>

      <div className={css.box}>
        <label>
          Ходимнинг Узбек тили лотин алифбосидаги мутахассислиги:{" "}
          {oldData.directions_uz_lat}
        </label>
        <input
          className={css.input}
          {...register("directions_uz_lat", { required: true })}
        />
        {errors.directions_uz_lat && <p>Бу майдон тўлдирилиши шарт</p>}
      </div>

      <div className={css.box}>
        <label>
          Ходимнинг Рус тилидаги мутахассислиги: {oldData.directions_ru}
        </label>
        <input
          className={css.input}
          {...register("directions_ru", { required: true })}
        />
        {errors.directions_ru && <p>Бу майдон тўлдирилиши шарт</p>}
      </div>

      <div className={css.box}>
        <label>
          Ходимнинг Қозоқ тилидаги мутахассислиги: {oldData.directions_kk}
        </label>
        <input
          className={css.input}
          {...register("directions_kk", { required: true })}
        />
        {errors.directions_kk && <p>Бу майдон тўлдирилиши шарт</p>}
      </div>

      <div className={css.box}>
        <label>
          Ходимнинг Тожик тилидаги мутахассислиги: {oldData.directions_tj}
        </label>
        <input
          className={css.input}
          {...register("directions_tj", { required: true })}
        />
        {errors.directions_tj && <p>Бу майдон тўлдирилиши шарт</p>}
      </div>

      <div className={css.box}>
        <label>Email: {oldData.email}</label>
        <input
          className={css.input}
          {...register("email", { required: true })}
        />
        {errors.email && <p>Бу майдон тўлдирилиши шарт</p>}
      </div>

      <div className={css.box}>
        <label>Телефон рақами: {oldData.phone_number}</label>
        <input
          className={css.input}
          {...register("phone_number", { required: true })}
        />
        {errors.phone_number && <p>Бу майдон тўлдирилиши шарт</p>}
      </div>

      <div className={css.box}>
        <label>Лавозими: {oldData.position}</label>
        <input
          className={css.input}
          {...register("position", { required: true })}
        />
        {errors.position && <p>Бу майдон тўлдирилиши шарт</p>}
      </div>

      <div className={css.box}>
        <label>Телеграм ID: {oldData.id_telegram}</label>
        <input
          className={css.input}
          {...register("id_telegram", { required: true })}
        />
        {errors.id_telegram && <p>Бу майдон тўлдирилиши шарт</p>}
      </div>

      <div className={css.box}>
        <label>Логин: {oldData.login}</label>
        <input
          className={css.input}
          {...register("login", { required: true })}
        />
        {errors.login && <p>Бу майдон тўлдирилиши шарт</p>}
      </div>

      <div className={css.box}>
        <label>Пароль:</label>
        <input className={css.input} {...register("password")} type="text" />
      </div>

      <div className={css.box}>
        <button className={css.btn} type="submit">
          Ўзгартишларни сақлаш
        </button>
      </div>
    </form>
  );
};
