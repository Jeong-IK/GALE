import type { NextPage } from "next";
import { Global } from "@emotion/react";
import { resetcss } from "../styles/resetstyle";
import { Footer } from "../components/footer";
import { Headerlink } from "../components/common/headerlink";
import { reviewStyle } from "../styles/style";
import { Reviewform } from "../components/reviewform/reviewform";
import { Alertmodal } from "../components/reviewform/modal";

const Reviewupload: NextPage = () => (
    <>
        <Global styles={resetcss} />
        <div id="root">
            <Headerlink isIndex={false} />
            <div css={reviewStyle.reviewTotalDiv}>
                <Reviewform />
            </div>
            <Footer />
        </div>
        <Alertmodal />
        <div id="alertModal" />
    </>
);

export default Reviewupload;
