import type { NextPage } from "next";
import { useRef } from "react";
import axios from "axios";

const Home: NextPage = () => {
    const Inputemail = useRef<HTMLInputElement>(null);
    const Inputpasswd = useRef<HTMLInputElement>(null);
    const Loginaction = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (Inputemail.current?.value && Inputpasswd.current?.value) {
            axios
                .post(
                    "http://175.212.160.106:7777/user/login",
                    {
                        Email: Inputemail.current.value,
                        Password: Inputpasswd.current.value,
                    },
                    { withCredentials: true }
                )
                .then(response => {
                    alert(response.status);
                });
        } else {
            Inputemail.current?.focus();
        }
    };

    return (
        <form onSubmit={Loginaction}>
            <input
                type="text"
                placeholder="아이디를 입력해주세요"
                ref={Inputemail}
            />
            <input type="password" ref={Inputpasswd} />
            <button type="submit">데이터 삽입</button>
        </form>
    );
};

export default Home;
