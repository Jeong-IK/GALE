import create from "zustand";
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
    DaterangeType,
    ViewlocationstoreType,
    ViewlocationType,
    PagenumberstoreType,
    DetailModalType,
    DetailpagemodalstoreType,
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

export const useDaterangeStore = create<DaterangeType>(set => ({
    startDate: null,
    endDate: null,
    draftStartDate: null,
    draftEndDate: null,
    focusedInput: null,
    setFocusedInput: input => set(() => ({ focusedInput: input })),
    setDate: (startDate, endDate) => set(() => ({ startDate, endDate })),
    setDraftDate: (startDate, endDate) =>
        set(() => ({ draftStartDate: startDate, draftEndDate: endDate })),
}));

export const useViewlocation = create<ViewlocationstoreType>(set => ({
    lat: 37.541,
    lng: 126.986,
    setLocation: ({ lat, lng }: ViewlocationType) => set(() => ({ lat, lng })),
}));

export const useReviewPage = create<PagenumberstoreType>(set => ({
    page: 0,
    setPage: (page: number) =>
        set(() => ({
            page,
        })),
}));

export const useDetailpagemodaltype = create<DetailpagemodalstoreType>(set => ({
    type: null,
    setType: (selecttype: DetailModalType) =>
        set(() => ({
            type: selecttype,
        })),
}));
