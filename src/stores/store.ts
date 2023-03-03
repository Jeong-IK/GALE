import create from "zustand";
import { ErrorMsgType, ModalOption, Modalstatus } from "../types/type";

// Modal 활성화 및 Modaltype
export const useModal = create<Modalstatus>()(set => ({
    modalOption: null,
    setModaloption: (req: ModalOption) => set(() => ({ modalOption: req })),
}));

export const useErrorMsg = create<ErrorMsgType>()(set => ({
    errorMsgType: "",
    setErrorMsgType: (Message: string) =>
        set(() => ({ errorMsgType: Message })),
}));
