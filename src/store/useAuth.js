import { create } from "zustand";

export const useAuth = create((set) => ({
  auth: false,
  lang: "Узбекча",
  setAuth: (data) => {
    set({ auth: data });
  },
  setLang: (data) => {
    set({ lang: data });
  },
}));
