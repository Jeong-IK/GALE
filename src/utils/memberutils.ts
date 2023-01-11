import {
    CheckLoginIdValueProps,
    CheckLoginPwdValueProps,
    CheckSignupCfmPwdProps,
    CheckSignupEmailProps,
    CheckSignupNicknameProps,
    CheckSignupPwdProps,
} from "../types/type";

export const checkEmailValue = ({
    inputEmail,
    setEmailErrorMsg,
}: CheckSignupEmailProps) => {
    if (!inputEmail.current?.value?.length) return;
    if (inputEmail.current?.value?.length < 8) {
        setEmailErrorMsg("8자이상으로 입력해주세요.");
        return;
    }
    if (inputEmail.current?.value?.length > 20) {
        setEmailErrorMsg("이메일 길이가 너무 깁니다.");
        return;
    }
    if (
        inputEmail.current?.value.match(
            /[a-z0-9]([-_₩.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_₩.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        ) == null
    ) {
        setEmailErrorMsg("이메일 형식으로 입력해주시기 바랍니다.");
        return;
    }
    setEmailErrorMsg(null);
};

export const checkPwdValue = ({
    inputPasswd,
    setPwdErrorMsg,
}: CheckSignupPwdProps) => {
    if (!inputPasswd?.current?.value.length) return;
    if (inputPasswd?.current?.value.length === 0) {
        setPwdErrorMsg("비밀번호를 입력해주세요.");
        return;
    }
    if (
        inputPasswd.current.value.match(
            /(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/
        ) === null
    ) {
        setPwdErrorMsg(
            "영어 대소문자, 특수문자, 숫자 포함 8자리 이상 입력해주세요."
        );
        return;
    }
    if (inputPasswd?.current?.value.length > 16) {
        setPwdErrorMsg("비밀번호길이가 너무 깁니다.");
        return;
    }
    setPwdErrorMsg(null);
};

export const checkCfmPwdValue = ({
    confirmPwd,
    inputPasswd,
    setCfmPwdErrorMsg,
}: CheckSignupCfmPwdProps) => {
    if (!confirmPwd?.current?.value.length) return;
    if (confirmPwd?.current?.value.length === 0) {
        setCfmPwdErrorMsg("비밀번호를 한번 더 입력해주세요.");
        return;
    }
    if (confirmPwd.current.value !== inputPasswd.current?.value) {
        setCfmPwdErrorMsg("비밀번호가 서로 일치하지 않습니다.");
        return;
    }
    setCfmPwdErrorMsg(null);
};

export const checkNicknameValue = ({
    inputNickname,
    setNickNameErrorMsg,
}: CheckSignupNicknameProps) => {
    if (!inputNickname?.current?.value.length) return;
    if (inputNickname?.current?.value.length === 0) {
        setNickNameErrorMsg("닉네임을 입력해주세요.");
        return;
    }
    if (
        inputNickname.current.value.match(
            /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]){3,10}$/
        ) == null
    ) {
        setNickNameErrorMsg("올바른 닉네임 형식으로 입력해주세요.");
        return;
    }
    setNickNameErrorMsg("중복검사를 실행해주시기 바랍니다.");
};

export const checkLoginIdValue = ({
    inputEmail,
    setIdErrorMsg,
}: CheckLoginIdValueProps) => {
    if (!inputEmail.current?.value.length) {
        setIdErrorMsg("이메일을 입력해주세요.");
        return;
    }
    if (
        inputEmail.current?.value.match(
            /[a-z0-9]([-_₩.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_₩.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
        ) == null
    ) {
        setIdErrorMsg("이메일 형식으로 입력해주시기 바랍니다.");
        return;
    }
    setIdErrorMsg(null);
};

export const checkLoginPwdValue = ({
    inputPasswd,
    setPwdErrorMsg,
}: CheckLoginPwdValueProps) => {
    if (!inputPasswd.current?.value.length) {
        setPwdErrorMsg("비밀번호를 입력해주세요.");
        return;
    }
    setPwdErrorMsg(null);
};
