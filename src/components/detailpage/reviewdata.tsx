import { useGetreviewlistdata } from "src/hooks/useGetplaceinfo";
import { useReviewPage } from "src/stores/store";
import { placeinfoStyle } from "src/styles/style";
import { GetplacereviewresponseType } from "src/types/type";
import { Reviewcard } from "./reviewcard";

export const Reviewdata = ({
    board_idx,
}: {
    board_idx: number;
}) => {
    const { page, setPage } = useReviewPage();

    const { reviewlistData } = useGetreviewlistdata({
        board_Number: board_idx,
        sortType: "new",
        orderType: "asc",
        currentPage: page,
    });
    
    return (
        <div css={placeinfoStyle.reviewdata.totalDiv}>
            <div css={placeinfoStyle.reviewdata.sortBy}>
                최신순 | 최고 별점순 | 최저 별점순
            </div>
            <div css={placeinfoStyle.reviewdata.startLine} />
            {reviewlistData
                ? reviewlistData.map((data: GetplacereviewresponseType) => (
                      <Reviewcard {...data} key={data.board_review_number} />
                  ))
                : null}

            {reviewlistData &&
                [0, 1, 2, 3, 4, 5].map((value: number) =>
                    value <= reviewlistData.length / 5 ? (
                        <button type="button" onClick={() => setPage(value)}>
                            {value + 1}
                        </button>
                    ) : null
                )}
        </div>
    );
};
