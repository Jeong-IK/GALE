import type { NextPage } from "next";
import { Global } from "@emotion/react";
import { resetcss } from "../styles/resetstyle";
import { Footer } from "../components/footer";
import { Mypageheader } from "../components/mypage/header";
import { Mypagebody } from "../components/mypage/body";

const Mypage: NextPage = () => (
    <>
        <Global styles={resetcss} />
        <div id="root">
            <Mypageheader />
            <Mypagebody />
            <Footer />
        </div>
        <div id="modal" />
    </>
);

export default Mypage;
