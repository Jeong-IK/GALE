import create from "zustand";
import {
    Modaloption,
    Modalstatus,
    SignupErrorMsgType,
    EmailErrorMsgType,
    PwdErrorMsgType,
    CfmPwdErrorMsgType,
    NickNameErrorMsgType,
} from "./Mainpages/type";

// Modal 활성화 및 Modaltype

export const useModal = create<Modalstatus>()(set => ({
        modalOption: 0,
        setModaloption: (req: Modaloption) => set(() => ({ modalOption: req })),
    }));

export const useInputError = create<SignupErrorMsgType>()(set => ({
        emailErrorMsg: null,
        pwdErrorMsg: null,
        cfmPwdErrorMsg: null,
        nickNameErrorMsg: null,
        setEmailErrorMsg: (errorMsg: EmailErrorMsgType) => set(() => ({ emailErrorMsg: errorMsg })),
        setPwdErrorMsg: (errorMsg: PwdErrorMsgType) => set(() => ({ pwdErrorMsg: errorMsg })),
        setCfmPwdErrorMsg: (errorMsg: CfmPwdErrorMsgType) => set(() => ({ cfmPwdErrorMsg: errorMsg })),
        setNickNameErrorMsg: (errorMsg: NickNameErrorMsgType) => set(() => ({ nickNameErrorMsg: errorMsg })),
    }));
