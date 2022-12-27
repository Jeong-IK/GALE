import type { NextPage } from "next";
import { Body } from "./Mainpages/body.page";
import { Header } from "./Mainpages/header.page";

const Home: NextPage = () => (
    <>
        <div id="root">
            <Header />
            <Body />
        </div>
        <div id="modal" />
    </>
);

export default Home;
