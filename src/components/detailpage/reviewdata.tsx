import { useGetreviewdata } from "src/hooks/useGetplaceinfo";
import { placeinfoStyle } from "src/styles/style";
import { ReadplacerequestType } from "src/types/type";

export const Reviewdata = ({ board_idx }: ReadplacerequestType) => {
    const { reviewData } = useGetreviewdata(board_idx as string);
    return <div css={placeinfoStyle.reviewdata.totalDiv}>review</div>;
};
