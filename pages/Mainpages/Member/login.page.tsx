import { useRef, useState } from "react";
import axios from "axios";
import { LoginErrorMsgType } from "../type";

export const Login = (): JSX.Element => {
    const inputEmail = useRef<HTMLInputElement>(null);
    const inputPasswd = useRef<HTMLInputElement>(null);
    const [logInErrorMsg, setLogInErrorMsg] = useState<LoginErrorMsgType>();

    const logInAction = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (
            !inputEmail.current?.value.length ||
            !inputPasswd.current?.value.length
        )
            return;

        axios
            .post(
                "http://175.212.160.106:7777/auth/login",
                {
                    Email: inputEmail.current.value,
                    Password: inputPasswd.current.value,
                },
                { withCredentials: true }
            )
            .then(response => {
                alert(response.data.message);
            })
            .catch(response => {
                alert(response.response.data.message);
                setLogInErrorMsg("이메일/비밀번호를 다시 확인해주세요.");
            });
    };

    return (
        <form onSubmit={logInAction}>
            <input
                type="text"
                placeholder="example@gmail.com"
                ref={inputEmail}
            />
            {logInErrorMsg}
            <input
                type="password"
                ref={inputPasswd}
                placeholder="영어 대소문자, 특수문자, 숫자 포함 8자리 이상"
            />
            {logInErrorMsg}
            {inputEmail.current?.value && inputPasswd.current?.value ? (
                <button type="submit">로그인 하기</button>
            ) : (
                <button type="submit" disabled>
                    로그인 하기
                </button>
            )}
        </form>
    );
};
