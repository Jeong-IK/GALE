import { useRouter } from "next/router";
import { useEffect } from "react";
import { usePlaceinfo } from "src/stores/store";
import { placeinfoStyle } from "src/styles/style";
import { useGetplaceinfo } from "src/hooks/useGetplaceinfo";
import { Placedata } from "./placedata";
import { Reviewdata } from "./reviewdata";
import { Modal } from "./modal/modal";



export const DetailBody = () => {
    const router = useRouter();
    const { board_idx } = router.query;
    const {data, setData} = usePlaceinfo();

    useEffect(()=> {
        const { placeinfoData } = useGetplaceinfo(Number(board_idx));
    if(placeinfoData)
        setData(placeinfoData);
    }, []);

    if (data) {
        return (
            <>
                <div css={placeinfoStyle.bodydiv}>
                    <Placedata />
                    <Reviewdata
                        board_idx={Number(board_idx)}
                        reviewcnt={data.reviewCount}
                    />
                </div>
                <Modal />
            </>
        );
    }
    return <div />;
};
