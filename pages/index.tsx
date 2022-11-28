import type { NextPage } from "next";
import { useRef } from "react";
import { useMemberStore } from "./store";

const Home: NextPage = () => {
    const Getdata = useMemberStore(state => {
        return state;
    });
    const Inputemail = useRef<HTMLInputElement>(null);
    const Inputpasswd = useRef<HTMLInputElement>(null);

    return (
        <>
            <h1>{Getdata.email}</h1>
            <h1>{Getdata.password}</h1>
            <form>
                <input
                    type="text"
                    placeholder="아이디를 입력해주세요"
                    ref={Inputemail}
                />
                <input type="password" id="passwd" ref={Inputpasswd} />
                <button type="submit">데이터 삽입</button>
            </form>
        </>
    );
};

export default Home;
