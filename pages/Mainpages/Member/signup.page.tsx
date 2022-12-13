import React, { useRef } from "react";
// import { Datacheck } from "../type";
// simport axios from "axios";

export const Signup = () => {
    const inputEmail = useRef<HTMLInputElement>(null);
    const inputPasswd = useRef<HTMLInputElement>(null);
    const confirmPwd = useRef<HTMLInputElement>(null);
    const inputNickname = useRef<HTMLInputElement>(null);
    // const [dataValid, setDatavalid] = useState<Datacheck>({
    //     email: "",
    //     pwd: true,
    //     confirmPwd: true,
    //     nickName: true,
    // });

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
                <input type="text" ref={inputEmail} />
            </label>
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
