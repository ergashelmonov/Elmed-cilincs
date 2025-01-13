import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../store/useAuth";

import { FaArrowRightFromBracket } from "react-icons/fa6";

import css from "./style.module.css";
import { apiClient } from "../../../api";

export const SideBarUnvers = ({ title, url, pages }) => {
  const { side_bar, side_bar_header, navbar, active, link, close_btn } = css;
  const { lang, setLang } = useAuth();

  const navigate = useNavigate();

  const logout = () => {
    const logoutP = async () => await apiClient.post("/logout");
    logoutP();
    navigate("/login");
  };

  return (
    <aside className={side_bar}>
      <div className={side_bar_header}>
        <img src="/assets/icons/logo.png" alt="" />
      </div>
      <div style={{ margin: "40px 0" }}>
        <NavLink to={"/"} className={link}>
          Бош саҳифага кайтиш
        </NavLink>
      </div>
      <NavLink
        to={url}
        className={({ isActive }) => (isActive ? active : link)}
      >
        {title}
      </NavLink>
      <nav className={navbar}>
        {pages.map((item, index) => {
          return (
            <NavLink
              key={index}
              to={item.url}
              className={({ isActive }) => (isActive ? active : link)}
            >
              {item.title}
            </NavLink>
          );
        })}
        <button className={close_btn} onClick={() => logout()}>
          {lang === "Узбекча" ? " Тизимдан чиқиш" : "Tizimdan chiqish"}
          <FaArrowRightFromBracket color="red" />
        </button>
        <select
          name="тил"
          id="til"
          style={{ color: "#000", outline: "none" }}
          value={lang}
          onChange={(e) => setLang(e.target.value)}
        >
          <option value="Узбекча">Узбекча</option>
          <option value="O'zbekcha">O'zbekcha</option>
        </select>
      </nav>
    </aside>
  );
};
