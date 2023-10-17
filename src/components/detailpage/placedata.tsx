import { placeinfoStyle } from "src/styles/style";
import Image from "next/image";
import router from "next/router";
import { usePlaceinfo } from "src/stores/store";
import bgdetailexample from "src/public/bgdetailexample.png";
import { AiTwotoneEnvironment } from "react-icons/ai";
import { Stargrade } from "./startgrade";
import { Reviewcnt } from "./reviewCnt";



export const Placedata = () => {
    const {data} = usePlaceinfo();
   
    const goreviewuploadpage = () => {
        if(!localStorage.getItem("email"))
            alert("리뷰 쓰기는 로그인 시 가능합니다.");
        router.push({
            pathname: "/reviewupload",
            query: { board_idx: data?.board_number.toString() },
        });
    };

   return ( <>
        <div css={placeinfoStyle.placedata.totalDiv}>
            <div css={placeinfoStyle.placedata.textinfoDiv}>
                <div css={placeinfoStyle.placedata.title}>
                    {data?.locationname}
                    <button
                        type="button"
                        css={placeinfoStyle.placedata.reviewButton}
                        onClick={goreviewuploadpage}
                    >
                        리뷰쓰기
                    </button>
                </div>
                <div css={placeinfoStyle.placedata.address}>
                    <AiTwotoneEnvironment />
                    {data?.locationaddress}
                </div>
                <div css={placeinfoStyle.placedata.stargradeDiv}>
                    {data ? (
                        <>
                            <Stargrade
                                name="⭐ 총점"
                                grade={data.allAverage}
                            />

                            <Stargrade
                                name="👍🏻 좋아요"
                                grade={data.satisfaction}
                            />

                            <Stargrade name="💸 비용" grade={data.price} />

                            <Stargrade
                                name="👨‍👩‍👧‍👦 번잡도"
                                grade={data.congestion}
                            />

                            <Stargrade
                                name="🚗 접근성"
                                grade={data.accessibility}
                            />

                            <Reviewcnt
                                name="‍️📝 리뷰"
                                grade={data.reviewCount}
                            />
                        </>
                    ) : null}
                </div>
            </div>
            <div css={placeinfoStyle.placedata.imageinfoDiv}>
                <Image
                    src={data ? data.imageArrayUrl[0] : bgdetailexample}
                    width={800}
                    height={460}
                    alt=""
                    css={placeinfoStyle.placedata.image}
                />
            </div>
        </div>
    </>
);
}
