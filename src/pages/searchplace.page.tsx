import type { NextPage } from "next";
import { Global } from "@emotion/react";
import { resetcss } from "../styles/resetstyle";
import { Footer } from "../components/footer";

const SearchPlace: NextPage = () => (
    <>
        <Global styles={resetcss} />
        <div id="root">
            <Footer />
        </div>
        <div id="modal" />
    </>
);

export default SearchPlace;
