import type { NextPage } from "next";
import { Global } from "@emotion/react";
import { Body} from "src/components/destinationlist/body"
import { resetcss } from "../styles/resetstyle";
import { Footer } from "../components/footer";
import { Headerlink } from "../components/common/headerlink";

const SearchPlace: NextPage = () => (
    <>
        <Global styles={resetcss} />
        <div id="root">
            <Headerlink isIndex={false} />
                <Body />
                <Footer />
        </div>
        <div id="modal" />
    </>
);

export default SearchPlace;
