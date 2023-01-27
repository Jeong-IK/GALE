export type ModalOption = "logIn" | "signUp" | "date" | null;

export interface Modalstatus {
    modalOption: ModalOption;
    setModaloption: (type: ModalOption) => void;
}

export interface SignupProps extends LoginProps {
    cfmPasswd: string;
    nickname: string;
}

export interface LoginProps {
    email: string;
    passwd: string;
}

export interface CheckNicknameExistProps {
    nickname: string;
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
}
