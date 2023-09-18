import { useGetplaceinfo } from "src/hooks/useGetplaceinfo";
import { ReadplacerequestType } from "src/types/type";
import { placeinfoStyle } from "src/styles/style";
import Image from "next/image";
import bgdetailexample from "src/public/bgdetailexample.png";
import { AiTwotoneEnvironment } from "react-icons/ai";
import { Stargrade } from "./startgrade";
import { Reviewcnt } from "./reviewCnt";

export const Placedata = ({ board_idx }: ReadplacerequestType) => {
    const { placeinfoData } = useGetplaceinfo(board_idx as string);
    return (
        <>
            <div css={placeinfoStyle.placedata.totalDiv}>
                <div css={placeinfoStyle.placedata.textinfoDiv}>
                    <div css={placeinfoStyle.placedata.title}>
                        {placeinfoData?.locationname}
                        <button
                            type="button"
                            css={placeinfoStyle.placedata.reviewButton}
                        >
                            리뷰쓰기
                        </button>
                    </div>
                    <div css={placeinfoStyle.placedata.address}>
                        <AiTwotoneEnvironment />
                        {placeinfoData?.locationaddress}
                    </div>
                    <div css={placeinfoStyle.placedata.stargradeDiv}>
                        {placeinfoData ? (
                            <>
                                <Stargrade
                                    name="⭐ 총점"
                                    grade={placeinfoData.allAverage}
                                />

                                <Stargrade
                                    name="👍🏻 좋아요"
                                    grade={placeinfoData.satisfaction}
                                />

                                <Stargrade
                                    name="💸 비용"
                                    grade={placeinfoData.price}
                                />

                                <Stargrade
                                    name="👨‍👩‍👧‍👦 번잡도"
                                    grade={placeinfoData.congestion}
                                />

                                <Stargrade
                                    name="🚗 접근성"
                                    grade={placeinfoData.accessibility}
                                />

                                <Reviewcnt
                                    name="‍️📝 리뷰"
                                    grade={placeinfoData.reviewCount}
                                />
                            </>
                        ) : null}
                    </div>
                </div>
                <div css={placeinfoStyle.placedata.imageinfoDiv}>
                    <Image
                        src={
                            placeinfoData
                                ? placeinfoData.imageArrayUrl
                                : bgdetailexample
                        }
                        width={800}
                        height={460}
                        alt=""
                        css={placeinfoStyle.placedata.image}
                    />
                </div>
            </div>
        </>
    );
};
