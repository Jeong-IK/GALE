import { placeinfoStyle } from "src/styles/style";
import Image from "next/image";
import bgdetailexample from "src/public/bgdetailexample.png";
import { AiTwotoneEnvironment } from "react-icons/ai";
import { ReadplacecontentresponseType } from "src/types/type";
import { Stargrade } from "./startgrade";
import { Reviewcnt } from "./reviewCnt";

export const Placedata = (props: ReadplacecontentresponseType) => (
    <>
        <div css={placeinfoStyle.placedata.totalDiv}>
            <div css={placeinfoStyle.placedata.textinfoDiv}>
                <div css={placeinfoStyle.placedata.title}>
                    {props?.locationname}
                    <button
                        type="button"
                        css={placeinfoStyle.placedata.reviewButton}
                    >
                        리뷰쓰기
                    </button>
                </div>
                <div css={placeinfoStyle.placedata.address}>
                    <AiTwotoneEnvironment />
                    {props?.locationaddress}
                </div>
                <div css={placeinfoStyle.placedata.stargradeDiv}>
                    {props ? (
                        <>
                            <Stargrade
                                name="⭐ 총점"
                                grade={props.allAverage}
                            />

                            <Stargrade
                                name="👍🏻 좋아요"
                                grade={props.satisfaction}
                            />

                            <Stargrade name="💸 비용" grade={props.price} />

                            <Stargrade
                                name="👨‍👩‍👧‍👦 번잡도"
                                grade={props.congestion}
                            />

                            <Stargrade
                                name="🚗 접근성"
                                grade={props.accessibility}
                            />

                            <Reviewcnt
                                name="‍️📝 리뷰"
                                grade={props.reviewCount}
                            />
                        </>
                    ) : null}
                </div>
            </div>
            <div css={placeinfoStyle.placedata.imageinfoDiv}>
                <Image
                    src={props ? props.imageArrayUrl[0] : bgdetailexample}
                    width={800}
                    height={460}
                    alt=""
                    css={placeinfoStyle.placedata.image}
                />
            </div>
        </div>
    </>
);
