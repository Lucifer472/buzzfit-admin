import { create } from "zustand";
import { useQuestionModalType } from "./type";

export const useQuestionModal = create<useQuestionModalType>((set) => ({
  isOpen: false,
  setIsOpen: (v: boolean) => set({ isOpen: v }),
}));

export const useQuestionEditModal = create<useQuestionModalType>((set) => ({
  isOpen: false,
  setIsOpen: (v: boolean) => set({ isOpen: v }),
}));
