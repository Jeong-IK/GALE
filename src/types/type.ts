import { ReactNode } from "react";

export type ModalchildrenType = { children: ReactNode };

export type Modaloption = "logIn" | "signUp" | null;

export interface Modalstatus {
    modalOption: Modaloption;
    setModaloption: (type: Modaloption) => void;
}

export type SignupEmailErrorMsgType =
    | "8자이상으로 입력해주세요."
    | "이메일을 입력해주새요."
    | "이메일 길이가 너무 깁니다."
    | "이메일 형식으로 입력해주시기 바랍니다."
    | null;
export type SignupPwdErrorMsgType =
    | "영어 대소문자, 특수문자, 숫자 포함 8자리 이상 입력해주세요."
    | "비밀번호를 입력해주세요."
    | "비밀번호길이가 너무 깁니다."
    | null;

export type SignupCfmPwdErrorMsgType =
    | "비밀번호가 서로 일치하지 않습니다."
    | "비밀번호를 한번 더 입력해주세요."
    | null;

export type SignupNickNameErrorMsgType =
    | "닉네임을 입력해주세요."
    | "올바른 닉네임 형식으로 입력해주세요."
    | "이미 존재하는 닉네임입니다."
    | "중복검사를 실행해주시기 바랍니다."
    | null;

export type LoginIdErrorMsgType =
    | "이메일/비밀번호를 다시 확인해주세요."
    | "찾을 수 없는 이메일입니다."
    | "이메일을 입력해주세요."
    | null;
export type LoginPwdErrorMsgType =
    | "이메일/비밀번호를 다시 확인해주세요."
    | "비밀번호가 맞지 않습니다."
    | "비밀번호를 입력해주세요."
    | null;

export interface SignupProps {
    email: React.RefObject<HTMLInputElement>;
    pwd: React.RefObject<HTMLInputElement>;
    confirmpwd: React.RefObject<HTMLInputElement>;
    nickname: React.RefObject<HTMLInputElement>;
    setModaloption: (type: Modaloption) => void;
}

export interface CheckNicknameProps {
    nickname: React.RefObject<HTMLInputElement>;
    setNickNameErrorMsg: (errorMsg: SignupNickNameErrorMsgType) => void;
}