import React, { useRef, useState } from "react";
import axios from "axios";

export const Signup = () => {
    const Inputemail = useRef<HTMLInputElement>(null);
    const Inputpasswd = useRef<HTMLInputElement>(null);
    const [Confirmpasswd, setConfirmpasswd] = useState<string>("");
    const Inputnickname = useRef<HTMLInputElement>(null);

    const Changepassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmpasswd(e.target.value);
    };

    const Signupaction = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (
            Inputemail.current?.value &&
            Inputpasswd.current?.value &&
            Confirmpasswd &&
            Inputnickname.current?.value
        ) {
            if (Inputpasswd.current.value === Confirmpasswd) {
                axios
                    .post(
                        "http://175.212.160.106:7777/auth/signup",
                        {
                            Email: Inputemail.current.value,
                            Password: Inputpasswd.current.value,
                            Nickname: Inputnickname.current.value,
                        },
                        { withCredentials: true }
                    )
                    .then(response => {
                        if (response.status === 200) {
                            alert("회원가입에 성공하였습니다.");
                        }
                    });
            }
            if (Inputpasswd.current.value !== Confirmpasswd) {
                alert("비밀번호가 서로 일치하지 않습니다.");
            }
        }
    };

    return (
        <form onSubmit={Signupaction}>
            <label>
                이메일
                <input type="text" ref={Inputemail} />
            </label>
            <br />
            <label>
                비밀번호 입력
                <input type="password" ref={Inputpasswd} />
            </label>
            <br />
            <label>
                비밀번호 확인
                <input
                    type="password"
                    id="confirmpwd"
                    onChange={Changepassword}
                />
            </label>
            <br />
            {Confirmpasswd &&
            Inputpasswd.current?.value &&
            Confirmpasswd === Inputpasswd.current?.value ? (
                <p>일치</p>
            ) : (
                <p>불일치</p>
            )}
            <br />
            <label>
                닉네임
                <input type="text" ref={Inputnickname} />
            </label>

            <button type="submit">회원가입</button>
        </form>
    );
};
