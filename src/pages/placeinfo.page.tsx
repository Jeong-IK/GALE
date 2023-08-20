import type { NextPage } from "next";
import { Global } from "@emotion/react";
import { resetcss } from "../styles/resetstyle";
import { Footer } from "../components/footer";
import { Headerlink } from "../components/common/headerlink";
import { DetailBody } from "../components/detailpage/body";

const Reviewupload: NextPage = () => (
    <>
        <Global styles={resetcss} />
        <div id="root">
            <Headerlink isIndex={false} />
            <DetailBody />
            <Footer />
        </div>
    </>
);

export default Reviewupload;
