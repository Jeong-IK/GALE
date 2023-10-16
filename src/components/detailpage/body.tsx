import { useRouter } from "next/router";
import { placeinfoStyle } from "src/styles/style";
import { useGetplaceinfo } from "src/hooks/useGetplaceinfo";
import { Placedata } from "./placedata";
import { Reviewdata } from "./reviewdata";
import { Modal } from "./modal/modal";

export const DetailBody = () => {
    const router = useRouter();
    const { board_idx } = router.query;
    const { placeinfoData } = useGetplaceinfo(Number(board_idx));

    if (board_idx && placeinfoData) {
        console.log(placeinfoData?.reviewCount);
        return (
            <>
                <div css={placeinfoStyle.bodydiv}>
                    <Placedata {...placeinfoData} />
                    <Reviewdata
                        board_idx={Number(board_idx)}
                        reviewcnt={placeinfoData.reviewCount}
                    />
                </div>
                <Modal />
            </>
        );
    }
    return <div />;
};
