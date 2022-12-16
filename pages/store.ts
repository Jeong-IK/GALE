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

export const useInputError = create<SignupErrorMsgType>()(set => {
    return {
        emailErrorMsg: null,
        pwdErrorMsg: null,
        cfmPwdErrorMsg: null,
        nickNameErrorMsg: null,
        setEmailErrorMsg: (errorMsg: EmailErrorMsgType) => {
            return set(() => {
                return { emailErrorMsg: errorMsg };
            });
        },
        setPwdErrorMsg: (errorMsg: PwdErrorMsgType) => {
            return set(() => {
                return { pwdErrorMsg: errorMsg };
            });
        },
        setCfmPwdErrorMsg: (errorMsg: CfmPwdErrorMsgType) => {
            return set(() => {
                return { cfmPwdErrorMsg: errorMsg };
            });
        },
        setNickNameErrorMsg: (errorMsg: NickNameErrorMsgType) => {
            return set(() => {
                return { nickNameErrorMsg: errorMsg };
            });
        },
    };
});
