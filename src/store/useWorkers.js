import { create } from "zustand";

export const useWorkers = create((set) => ({
  deleteWorker: false,
  id: 0,
  setDeleteWorker: (data) => {
    set({ deleteWorker: data });
  },
  setId: (data) => {
    set({ id: data });
  },
}));
