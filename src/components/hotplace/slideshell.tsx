import { AiOutlineRightCircle, AiOutlineLeftCircle } from "react-icons/ai";
import { useState } from "react";
import { hotPlaceStyle } from "../../styles/style";
import { Shells } from "./shell";
import { SlidShellSubject } from "../../types/type";

export const Slideshell = (slideSubject: SlidShellSubject) => {
    const { subject } = slideSubject;
    const [slidePage, setSlidePage] = useState<number>(0);
    const goNext = () => {
        setSlidePage(slidePage + 1);
    };
    const goPrev = () => {
        setSlidePage(slidePage - 1);
    };
    return (
        <div css={hotPlaceStyle.slideDiv}>
            <div css={hotPlaceStyle.hotPlaceSubject}>
                <div>{subject}</div>
                <div css={hotPlaceStyle.totalShell}>
                    <div css={hotPlaceStyle.totalPage}>
                        <div css={hotPlaceStyle.currentPage(slidePage)} />
                    </div>
                    <button
                        type="button"
                        onClick={goPrev}
                        css={hotPlaceStyle.slideButton}
                    >
                        <AiOutlineLeftCircle />
                    </button>
                    0{slidePage + 1}/02
                    <button
                        type="button"
                        onClick={goNext}
                        css={hotPlaceStyle.slideButton}
                    >
                        <AiOutlineRightCircle />
                    </button>
                </div>
            </div>
            <div css={hotPlaceStyle.totalShell}>
                <Shells cssType={slidePage} />
                <Shells cssType={slidePage} />
                <Shells cssType={slidePage} />
                <Shells cssType={slidePage} />
                <Shells cssType={slidePage} />
                <Shells cssType={slidePage} />
                <Shells cssType={slidePage} />
                <Shells cssType={slidePage} />
                <Shells cssType={slidePage} />
                <Shells cssType={slidePage} />
                <Shells cssType={slidePage} />
                <Shells cssType={slidePage} />
            </div>
        </div>
    );
};
