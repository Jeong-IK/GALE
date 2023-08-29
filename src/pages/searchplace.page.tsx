import type { NextPage } from "next";
import { Global } from "@emotion/react";
import { resetcss } from "../styles/resetstyle";
import { Footer } from "../components/footer";
import { Headerlink } from "../components/common/headerlink";
import { TravlePlan } from "../components/travleplan/travlePlan";
import { Destinationcomplelte } from "../components/destinationlist/destinationcomplete";
import { destinationComplete } from "../styles/style";

const SearchPlace: NextPage = () => (
    <>
        <Global styles={resetcss} />
        <div id="root">
            <Headerlink isIndex={false} />
            <div css={destinationComplete.distinationBgcolor}>
                <TravlePlan />
                <Destinationcomplelte />
                <Footer />
            </div>
        </div>
        <div id="modal" />
    </>
);

export default SearchPlace;
