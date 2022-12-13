import React, { useRef, useState } from "react";
// import { Datacheck } from "../type";
// simport axios from "axios";

type EmailErrorMsgType = "8자이상 입력" | "입력안할래??" | "넘길어 ㅋㅋ" | null;

export const Signup = () => {
    const inputEmail = useRef<HTMLInputElement>(null);
    const inputPasswd = useRef<HTMLInputElement>(null);
    const confirmPwd = useRef<HTMLInputElement>(null);
    const inputNickname = useRef<HTMLInputElement>(null);

    const [emailErrorMsg, setEmailErrorMsg] = useState<EmailErrorMsgType>(null);

    const Signupaction = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputEmail.current?.value) {
            console.log(inputEmail.current?.value);
        }
        //     if (inputPasswd.current.value === confirmPwd.current.value) {
        //         axios
        //             .post(
        //                 "http://175.212.160.106:7777/auth/signup",
        //                 {
        //                     Email: inputEmail.current.value,
        //                     Password: inputPasswd.current.value,
        //                     Nickname: inputNickname.current.value,
        //                 },
        //                 { withCredentials: true }
        //             )
        //             .then(response => {
        //                 if (response.status === 200) {
        //                     alert("회원가입에 성공하였습니다.");
        //                 }
        //             });
        //    }
        // }
    };

    // onblur를 이용하여 유효성 검증 코드 작성
    return (
        <form onSubmit={Signupaction}>
            <label>
                이메일
                <input
                    type="text"
                    ref={inputEmail}
                    onChange={() => {
                        if (!inputEmail.current?.value?.length) return;
                        if (inputEmail.current?.value?.length < 8) {
                            setEmailErrorMsg("8자이상 입력");
                            return;
                        }
                        if (inputEmail.current?.value?.length > 20) {
                            setEmailErrorMsg("넘길어 ㅋㅋ");
                            return;
                        }
                        setEmailErrorMsg(null);
                    }}
                />
            </label>
            {emailErrorMsg}
            <br />
            <label>
                비밀번호 입력
                <input type="password" ref={inputPasswd} />
            </label>
            <br />
            <label>
                비밀번호 확인
                <input type="password" id="confirmpwd" ref={confirmPwd} />
            </label>
            <br />
            <label>
                닉네임
                <input type="text" ref={inputNickname} />
            </label>

            <button type="submit">회원가입</button>
        </form>
    );
};
