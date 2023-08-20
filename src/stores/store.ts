import create from "zustand";
import { DayRange } from "react-modern-calendar-datepicker";
import {
    ErrorMsgType,
    LoginstateType,
    ModalOption,
    Modalstatus,
    ImagelistStore,
    Uploadimagetype,
    Reviewalertstatus,
    Reviewalertoption,
    Mypagecontentstore,
    Mypagecontenttype,
    Plandatestoretype,
} from "../types/type";

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

export const useLoginState = create<LoginstateType>()(set => ({
    loginState: false,
    setLoginState: (state: boolean) => set(() => ({ loginState: state })),
}));

export const useImagelistStore = create<ImagelistStore>()(set => ({
    imageList: [],
    setImagelist: (
        listImage:
            | Uploadimagetype[]
            | ((prevImages: Uploadimagetype[]) => Uploadimagetype[])
    ) =>
        set(state => ({
            imageList:
                typeof listImage === "function"
                    ? listImage(state.imageList)
                    : listImage,
        })),
}));

export const useAlertstore = create<Reviewalertstatus>()(set => ({
    alerText: null,
    setAlertext: (context: Reviewalertoption) => {
        console.log(context);
        set(() => ({ alerText: context }));
    },
}));

export const useMypagecontent = create<Mypagecontentstore>()(set => ({
    contentType: "위시플레이스",
    setContenttype: (type: Mypagecontenttype) => {
        set(() => ({ contentType: type }));
    },
}));

export const useTravledate = create<Plandatestoretype>()(set => ({
    planDate: {
        from: null, // 초기값
        to: null, // 초기값
    },
    setPlandate: (value: DayRange) => set({ planDate: value }),
}));
