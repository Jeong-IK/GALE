import { useRouter } from "next/router";
import { placeinfoStyle } from "src/styles/style";
import { Placedata } from "./placedata";
import { Reviewdata } from "./reviewdata";

export const DetailBody = () => {
    const router = useRouter();
    const { board_idx } = router.query;

    return (
        <div css={placeinfoStyle.bodydiv}>
            <Placedata board_idx={board_idx as string} />
            <Reviewdata board_idx={board_idx as string} />
        </div>
    );
};
