import create from "zustand";
import { ModalOption, Modalstatus } from "../types/type";

// Modal 활성화 및 Modaltype
export const useModal = create<Modalstatus>()(set => ({
    modalOption: null,
    setModaloption: (req: ModalOption) => set(() => ({ modalOption: req })),
}));
