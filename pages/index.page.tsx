import type { NextPage } from "next";
import { Body } from "./mainpages/body.page";
import { Header } from "./mainpages/header.page";

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
