import create from "zustand";
import { Modaloption, Modalstatus } from "./Mainpages/type";

// Modal 활성화 및 Modaltype

export const useModal = create<Modalstatus>()(set => {
    return {
        modalOption: 0,
        setModaloption: (req: Modaloption) => {
            return set(() => {
                return { modalOption: req };
            });
        },
    };
});
