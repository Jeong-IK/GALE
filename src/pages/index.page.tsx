import type { NextPage } from "next";
import { Global } from "@emotion/react";
import { Body } from "../components/body";
import { Header } from "../components/header";
import { resetcss } from "../styles/resetstyle";

const Home: NextPage = () => (
    <>
        <Global styles={resetcss} />
        <div id="root">
            <Header />
            <Body />
        </div>
        <div id="modal" />
    </>
);

export default Home;
