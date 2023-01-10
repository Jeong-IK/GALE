import axios from "axios";
import { SignupProps, CheckNicknameProps, LoginProps } from "../types/type";

export const signupAction = ({
    inputEmail,
    inputPasswd,
    confirmPwd,
    inputNickname,
    setModaloption,
}: SignupProps) => {
    if (
        !inputEmail.current?.value ||
        !inputPasswd.current?.value ||
        !confirmPwd.current?.value ||
        !inputNickname.current?.value
    )
        return;
    axios
        .post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`, {
            Email: inputEmail.current.value,
            Password: inputPasswd.current.value,
            ConfirmPassword: confirmPwd.current.value,
            Nickname: inputNickname.current.value,
        })
        .then(response => {
            alert(response.data.message);
            setModaloption("logIn");
        })
        .catch(error => {
            console.log(error.response.data);
            alert(error.response.data.message);
        });
};

export const checkNicknameExist = ({
    inputNickname,
    setNickNameErrorMsg,
}: CheckNicknameProps) => {
    if (!inputNickname.current?.value.length) return;
    axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup/exist-nickname`, {
            params: { Nickname: inputNickname.current.value },
        })
        .then(response => {
            alert(response.data.message);
            setNickNameErrorMsg(null);
        })
        .catch(error => {
            if (error.response.status === 503)
                alert(error.response.data.message);
            setNickNameErrorMsg("이미 존재하는 닉네임입니다.");
        });
};

export const loginAction = ({
    inputEmail,
    inputPasswd,
    setModaloption,
    setIdErrorMsg,
    setPwdErrorMsg,
}: LoginProps) => {
    if (!inputEmail.current?.value.length || !inputPasswd.current?.value.length)
        return;

    axios
        .post(
            `${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`,
            {
                inputEmail: inputEmail.current.value,
                Password: inputPasswd.current.value,
            },
            { withCredentials: true }
        )
        .then(response => {
            localStorage.setItem("accessToken", response.data.data.accessToken);
            localStorage.setItem(
                "refreshToken",
                response.data.data.refreshToken
            );
            setModaloption(null);
        })
        .catch(error => {
            if (
                error.response.status === 401 ||
                error.response.statue === 404
            ) {
                setIdErrorMsg("이메일/비밀번호를 다시 확인해주세요.");
                setPwdErrorMsg("이메일/비밀번호를 다시 확인해주세요.");
            }
            console.log(error);
            alert(error.response.data.message);
        });
};

export const logoutAction = () => {
    if (!localStorage.getItem("accessToken")) return;

    axios
        .post(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`, [
            {
                // Email: "vkxld134@naver.com",
                Token: localStorage.getItem("accessToken"),
            },
            {
                withCredentials: true,
            },
        ])
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error.response.data.message);
        });
};
