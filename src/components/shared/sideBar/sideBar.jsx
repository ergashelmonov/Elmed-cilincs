import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../store/useAuth";
import {
  adminPanelNavbarRu,
  adminPanelNavbarUz,
} from "../../../utils/contains";
import { FaArrowRightFromBracket } from "react-icons/fa6";

import css from "./style.module.css";
import { apiClient } from "../../../api";

export const SideBar = () => {
  const { side_bar, side_bar_header, navbar, active, link, close_btn } = css;
  const { lang, setLang } = useAuth();
  const changeLang =
    lang === "Узбекча" ? adminPanelNavbarRu : adminPanelNavbarUz;
  const navigate = useNavigate();

  const logout = () => {
    const logoutP = async () => await apiClient.post("/logout");
    logoutP();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <aside className={side_bar}>
      <div className={side_bar_header}>
        <img src="/assets/icons/logo.png" alt="" />
      </div>
      <nav className={navbar}>
        {changeLang.map((item, index) => {
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
