import { useRef, useState } from "react";
import axios from "axios";
import { useModal } from "../../store";
import { LoginErrorMsgType } from "../type";
import { Formtable, Modalform } from "../style";

export const Login = (): JSX.Element => {
    const inputEmail = useRef<HTMLInputElement>(null);
    const inputPasswd = useRef<HTMLInputElement>(null);
    const [logInErrorMsg, setLogInErrorMsg] = useState<LoginErrorMsgType>();
    const { setModaloption } = useModal();
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
        <div css={Modalform}>
            <p>이미 회원이신가요?</p>
            <p>갈래에 여행기록을 남겨보세요! ✍🏻</p>
            <form onSubmit={logInAction}>
                <table css={Formtable}>
                    <tr>
                        <th>이메일</th>
                        <th>
                            <input
                                type="text"
                                placeholder="example@gmail.com"
                                ref={inputEmail}
                            />
                        </th>
                    </tr>
                    <tr>
                        <th>{logInErrorMsg}</th>
                    </tr>
                    <tr>
                        <th>비밀번호 입력</th>
                        <th>
                            <input
                                type="password"
                                ref={inputPasswd}
                                placeholder="영어 대소문자, 특수문자, 숫자 포함 8자리 이상"
                            />
                        </th>
                    </tr>
                    <tr>
                        <th>{logInErrorMsg}</th>
                    </tr>
                    <tr>
                        {inputEmail.current?.value.length &&
                        inputPasswd.current?.value.length ? (
                            <button type="submit">로그인 하기</button>
                        ) : (
                            <button type="submit" disabled>
                                로그인 하기
                            </button>
                        )}
                    </tr>
                </table>
            </form>
            <p>
                회원이 아니신가요?
                <strong
                    onClick={() => {
                        setModaloption("signUp");
                    }}
                    role="presentation"
                >
                    가입하기
                </strong>
            </p>
        </div>
    );
};
