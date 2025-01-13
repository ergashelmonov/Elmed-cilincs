import { useState } from "react";
import css from "./style.module.css";
import { useEffect } from "react";
import { useAuth } from "../../store/useAuth";
import { loginRu, loginUz } from "../../utils/contains";
import { useNavigate } from "react-router-dom";
import { apiClient } from "../../api";

export const Login = () => {
  const { wrapper, box, title, form, input, button, error_mes, checkbox } = css;
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const [hide, setHide] = useState(false);
  const { lang, setLang, setAuth } = useAuth();
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch("https://elmed-bot-a65501ed60c6.herokuapp.com/some-endpoint").then((data)=>console.log(data.data));
  // }, []);

  const submit = (e) => {
    e.preventDefault();

    apiClient
      .post(
        "/login",

        {
          username: name,
          password: password,
        }
      )
      .then((data) => {
        localStorage.setItem("token", data.data.token);
        navigate("/");
      });
  };
  const login = JSON.parse(localStorage.getItem("login"));
  useEffect(() => {
    setAuth(login);
  }, [login]);

  useEffect(() => {
    const lang = localStorage.getItem("lang");

    if (lang) {
      setLang(lang);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const changeLang = lang === "Узбекча" ? loginRu : loginUz;

  return (
    <div className={wrapper}>
      <div className={box}>
        <h2 className={title}>{changeLang.title}</h2>
        <form className={form} onSubmit={submit}>
          {err && <span className={error_mes}> {changeLang.error}</span>}
          <label htmlFor="name">{changeLang.name}</label>
          <input
            type="text"
            name="name"
            className={input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={changeLang.name}
          />
          <label htmlFor="password">{changeLang.password}</label>
          <input
            type={hide ? "text" : "password"}
            name="password"
            className={input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={changeLang.password}
          />

          <div className={checkbox}>
            <div className={checkbox}>
              <label htmlFor="check" style={{ margin: "0 10px 0 0" }}>
                {changeLang.hider}
              </label>
              <input
                type="checkbox"
                name="check"
                onClick={() => setHide(!hide)}
              />
            </div>
            <select
              name="тил"
              id="til"
              style={{ color: "#000" }}
              value={lang}
              onChange={(e) => setLang(e.target.value)}
            >
              <option value="Узбекча">Узбекча</option>
              <option value="O'zbekcha">O'zbekcha</option>
            </select>
          </div>

          <button className={button}>{changeLang.btn}</button>
        </form>
      </div>
    </div>
  );
};
