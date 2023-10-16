import { AiOutlineRightCircle, AiOutlineLeftCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useGetcategory } from "src/hooks/useGetrisingcategory";
import { SlidshellCategory, SlidepageType } from "src/types/type";
import { hotPlaceStyle } from "src/styles/style";
import { Shells } from "./shell";

export const Slideshell = (slidecategory: SlidshellCategory) => {
    const { subject, categoryCode } = slidecategory;
    // 페이지 이동 상태
    const [slidePage, setSlidePage] = useState<SlidepageType>(0);
    const { categoryData, refetch } = useGetcategory({
        board_Category_Number: categoryCode,
        currentPage: slidePage,
    });

    useEffect(() => {
        refetch();
    }, [slidePage]);

    const goOtherpage = () => {
        setSlidePage(slidePage === 1 ? 0 : 1);
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
                        onClick={goOtherpage}
                        css={hotPlaceStyle.slideButton}
                    >
                        <AiOutlineLeftCircle />
                    </button>
                    0{slidePage + 1}/02
                    <button
                        type="button"
                        onClick={goOtherpage}
                        css={hotPlaceStyle.slideButton}
                    >
                        <AiOutlineRightCircle />
                    </button>
                </div>
            </div>
            <div css={hotPlaceStyle.totalShell}>
                {categoryData
                    ? categoryData.list.map(data => (
                          <Shells
                              cssType={-1}
                              title={data.locationname}
                              address={data.locationaddress}
                              imageUrl={data.firstImageUrl}
                              key={data.board_number}
                              board_number={data.board_number}
                              latitue={data.latitude}
                              longitude={data.longitude}
                          />
                      ))
                    : null}
            </div>
        </div>
    );
};
