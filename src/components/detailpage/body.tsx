import { useRouter } from "next/router";
import { placeinfoStyle } from "src/styles/style";
import { Placedata } from "./placedata";
import { Reviewdata } from "./reviewdata";
import { Modal } from "./modal/modal";



export const DetailBody =  (): JSX.Element | Promise<JSX.Element>  => {
    const router = useRouter();
    const { board_idx } = router.query;
    
    if (!board_idx) return <div />;

    return (
        <>
            <div css={placeinfoStyle.bodydiv}>
                <Placedata board_idx={Number(board_idx)} />
                <Reviewdata
                    board_idx={Number(board_idx)}
                />
            </div>
            <Modal />
        </>
    );
};
