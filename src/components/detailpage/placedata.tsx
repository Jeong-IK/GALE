import { placeinfoStyle } from "src/styles/style";
import Image from "next/image";
import router from "next/router";
import { useGetplaceinfo } from "src/hooks/useGetplaceinfo";
import bgdetailexample from "src/public/bgdetailexample.png";
import { AiTwotoneEnvironment } from "react-icons/ai";
import { Stargrade } from "./startgrade";
import { Reviewcnt } from "./reviewCnt";



export const Placedata = ({board_idx} : {board_idx:number}) => {
    const { placeinfoData } = useGetplaceinfo(Number(board_idx));
    // console.log("placeData", placeinfoData?.imageArrayUrl[0]);
    const goreviewuploadpage = () => {  
        if(!localStorage.getItem("email")){
            alert("리뷰 쓰기는 로그인 시 가능합니다.");
            return 0;
    }
        router.push({
            pathname: "/reviewupload",
            query: { board_idx: placeinfoData?.board_number.toString() },
        });
    };

   return ( <>
        <div css={placeinfoStyle.placedata.totalDiv}>
            <div css={placeinfoStyle.placedata.textinfoDiv}>
                <div css={placeinfoStyle.placedata.title}>
                    {placeinfoData?.locationname}
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

                            <Stargrade name="💸 비용" grade={placeinfoData.price} />

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
                    src={placeinfoData ? placeinfoData.imageArrayUrl[0] : bgdetailexample}
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
