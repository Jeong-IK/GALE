import type { NextPage } from "next";
import { Header } from "./Mainpages/header.page";

const Home: NextPage = () => (
    <>
        <div id="root">
            <Header />
        </div>
        <div id="modal" />
    </>
);

export default Home;
