import React from "react";
import { useForm } from "react-hook-form";
import css from "./style.module.css";
import { apiClient } from "../../../../api";
import { useNavigate } from "react-router-dom";

export const Add = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    apiClient.post("/add-employee", data).then((data) => {
      data.status === 201 ? navigate("/workers") : null;
    });
  };

  return (
    <form className={css.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={css.box}>
        <label>Тўлиқ исми (ўзбекча):</label>
        <input
      
          className={css.input}
          {...register("full_name_uz", { required: true })}
          placeholder="Тўлиқ исми (ўзбекча)"
        />
        {errors.full_name_uz && <p>Бу майдон мажбурий</p>}
      </div>

      <div className={css.box}>
        <label>Тўлиқ исми (лотинча):</label>
        <input
          className={css.input}
          {...register("full_name_uz_lat", { required: true })}
          placeholder="Тўлиқ исми (лотинча)"
        />
        {errors.full_name_uz_lat && <p>Бу майдон мажбурий</p>}
      </div>

      <div className={css.box}>
        <label>Тўлиқ исми (Руссиан):</label>
        <input
          className={css.input}
          {...register("full_name_ru", { required: true })}
          placeholder="Тўлиқ исми (Руссиан)"
        />
        {errors.full_name_ru && <p>Бу майдон мажбурий</p>}
      </div>

      <div className={css.box}>
        <label>Тўлиқ исми (инглизча):</label>
        <input
          className={css.input}
          {...register("full_name", { required: true })}
          placeholder="Тўлиқ исми (инглизча)"
        />
        {errors.full_name && <p>Бу майдон мажбурий</p>}
      </div>

      <div className={css.box}>
        <label>Тўлиқ исми (тожикча):</label>
        <input
          className={css.input}
          {...register("full_name_tj", { required: true })}
          placeholder="Тўлиқ исми (тожикча)"
        />
        {errors.full_name_tj && <p>Бу майдон мажбурий</p>}
      </div>

      <div className={css.box}>
        <label>Тўлиқ исми (қозоқча):</label>
        <input
          className={css.input}
          {...register("full_name_kk", { required: true })}
          placeholder="Тўлиқ исми (қозоқча)"
        />
        {errors.full_name_kk && <p>Бу майдон мажбурий</p>}
      </div>

      <div className={css.box}>
        <label>Йўналишлар (ўзбек тилида):</label>
        <input
          className={css.input}
          {...register("directions_uz", { required: true })}
          placeholder="Йўналишлар (ўзбек тилида)"
        />
        {errors.directions_uz && <p>Бу майдон мажбурий</p>}
      </div>

      <div className={css.box}>
        <label>Йўналишлар (лотин тилида):</label>
        <input
          className={css.input}
          {...register("directions_uz_lat", { required: true })}
          placeholder="Йўналишлар (лотин тилида)"
        />
        {errors.directions_uz_lat && <p>Бу майдон мажбурий</p>}
      </div>

      <div className={css.box}>
        <label>Йўналишлар (инглиз тилида):</label>
        <input
          className={css.input}
          {...register("directions", { required: true })}
          placeholder="Йўналишлар (инглиз тилида)"
        />
        {errors.directions && <p>Бу майдон мажбурий</p>}
      </div>

      <div className={css.box}>
        <label>Йўналишлар (рус тилида):</label>
        <input
          className={css.input}
          {...register("directions_ru", { required: true })}
          placeholder="Йўналишлар (рус тилида)"
        />
        {errors.directions_ru && <p>Бу майдон мажбурий</p>}
      </div>

      <div className={css.box}>
        <label>Йўналишлар (тожикча):</label>
        <input
          className={css.input}
          {...register("directions_tj", { required: true })}
          placeholder="Йўналишлар (тожикча)"
        />
        {errors.directions_tj && <p>Бу майдон мажбурий</p>}
      </div>

      <div className={css.box}>
        <label>Йўналишлар (қозоқ тилида):</label>
        <input
          className={css.input}
          {...register("directions_kk", { required: true })}
          placeholder="Йўналишлар (қозоқ тилида)"
        />
        {errors.directions_kk && <p>Бу майдон мажбурий</p>}
      </div>

      <div className={css.box}>
        <label>Телефон рақами:</label>
        <input
          className={css.input}
          type="tel"
          {...register("phone_number", { required: true })}
          placeholder="Телефон рақами"
        />
        {errors.phone_number && <p>Бу майдон мажбурий</p>}
      </div>

      <div className={css.box}>
        <label>Email:</label>
        <input
          type="email"
          className={css.input}
          {...register("email", { required: true })}
          placeholder="Email"
        />
        {errors.email && <p>Бу майдон мажбурий</p>}
      </div>

      <div className={css.box}>
        <label>Фойдаланувчи номи (Логин):</label>
        <input
          className={css.input}
          {...register("user_login", { required: true })}
          placeholder="Фойдаланувчи номи (Логин)"
        />
        {errors.user_login && <p>Бу майдон мажбурий</p>}
      </div>

      <div className={css.box}>
        <label>Telegram ID рақами:</label>
        <input
          className={css.input}
          {...register("id_telegram", { required: true })}
          placeholder="Telegram ID рақами"
        />
        {errors.id_telegram && <p>Бу майдон мажбурий</p>}
      </div>

      <div className={css.box}>
        <label>Лавозим:</label>
        <input
          className={css.input}
          {...register("position", { required: true })}
          placeholder="Лавозим"
        />
        {errors.position && <p>Бу майдон мажбурий</p>}
      </div>

      <div className={css.box}>
        <label>Ишга олиш санаси:</label>
        <input
          className={css.input}
          type="date"
          {...register("hire_date", { required: true })}
          placeholder="Ишга олиш санаси"
        />
        {errors.hire_date && <p>Бу майдон мажбурий</p>}
      </div>

      <div className={css.box}>
        <button type="submit" className={css.btn}>
          Сақлаш
        </button>
      </div>
    </form>
  );
};
