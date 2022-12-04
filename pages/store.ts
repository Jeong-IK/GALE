import create from "zustand";
import { Modalstatus } from "./Header/type_header";

// Modal 활성화 및 Modaltype

export const useModal = create<Modalstatus>()(set => {
    return {
        Modaloption: 0,
        setModaloption: (req: Modalstatus["Modaloption"]) => {
            return set(() => {
                return { Modaloption: req };
            });
        },
    };
});
