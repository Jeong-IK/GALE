import type { NextPage } from "next";
import { Body } from "../components/body";
import { Header } from "../components/header";

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
