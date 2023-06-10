export type ModalOption = "logIn" | "signUp" | "date" | null;

export interface Modalstatus {
    modalOption: ModalOption;
    setModaloption: (type: ModalOption) => void;
}

export interface ErrorMsgType {
    errorMsgType: string;
    setErrorMsgType: (message: string) => void;
}

export interface SignupProps extends LoginProps {
    confirmpassword: string;
    nickname: string;
}

export interface LoginProps {
    email: string;
    password: string;
}

export interface ExistNicknameProps {
    nickname: string;
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
}
export interface RefreshTokenProps {
    email: string;
    toeken: string;
}
export interface RefreshTokenResponse {
    message: string;
    Success: boolean;
}

export interface GeneralResponse {
    code: string;
    message: string;
}

export interface GeneralError extends Error {
    response: {
        status: number;
        data: GeneralResponse;
    };
}

export type ButtonStatusProps = {
    inputValue: string;
};

export interface ShellProps {
    cssType: number;
}

export interface SlidShellSubject {
    subject: string;
}
