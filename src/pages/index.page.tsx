import type { NextPage } from "next";
import { Global } from "@emotion/react";
import { Body } from "src/components/body";
import { Header } from "src/components/header";
import { resetcss } from "src/styles/resetstyle";
import { Footer } from "src/components/footer";

const Home: NextPage = () => (
    <>
        <Global styles={resetcss} />
        <div id="root">
            <Header />
            <Body />
            <Footer />
        </div>
        <div id="modal" />
    </>
);

export default Home;
