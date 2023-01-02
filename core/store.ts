import create from "zustand";
import { Modaloption, Modalstatus } from "../src/types/type";

// Modal 활성화 및 Modaltype
export const useModal = create<Modalstatus>()(set => ({
    modalOption: null,
    setModaloption: (req: Modaloption) => set(() => ({ modalOption: req })),
}));
