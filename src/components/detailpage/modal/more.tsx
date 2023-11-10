import Image from "next/image";
import { useGetdetailreview } from "src/hooks/useDetailrevieweinfo";
import { useDetailpagemodaltype } from "src/stores/store";
import example from "src/public/profileexample.png";
import placeexample from "src/public/reviewCardexample.png";
import { placeinfoStyle } from "src/styles/style";
import {MdOutlineClose} from "react-icons/md";
import {Stargrade} from "./stargrade";


export const Moreshow = () => {
    const { board_review_Number } = useDetailpagemodaltype(); 
    const { reviewData } = useGetdetailreview(board_review_Number as number);
    const { setType } = useDetailpagemodaltype();

    // console.log("profileimageUrl",reviewData?.userProfileImageUrl);
    // console.log("moreshow_imageArray",reviewData?.imageArrayUrl[0]);

    return ( 
        <div css={{display:"flex"}}>
            <button css={placeinfoStyle.modalStyle.closeButton}
            onClick={() => setType(null)} type="button">
                <MdOutlineClose/>
            </button>
            <div>
                <div css={placeinfoStyle.modalStyle.moreshowStyle.profileDiv}>
                    <Image css={placeinfoStyle.modalStyle.moreshowStyle.profileImage}src={reviewData?.userProfileImageUrl && reviewData.userProfileImageUrl !== "null" ? reviewData.userProfileImageUrl : example} alt="" width={300} height={300}/>
                    <div css={placeinfoStyle.modalStyle.moreshowStyle.title}>
                        {reviewData?.userNickname}
                       <div css={placeinfoStyle.modalStyle.moreshowStyle.regdate}>{reviewData?.regdate}</div>
                    </div>
                </div>
                    <Image css={placeinfoStyle.modalStyle.moreshowStyle.placeimage}src={reviewData?.imageArrayUrl && reviewData.imageArrayUrl[0] !== "null" ? reviewData.imageArrayUrl[0] : placeexample} alt="" width={300} height={300}/>
            </div>
            <div css={{margin:"0 0 0 2.5rem"}}>
                <div>
                {reviewData ? (
                        <>
                            <Stargrade
                                name="⭐ 총점"
                                grade={reviewData.average}
                            />

                            <Stargrade
                                name="👍🏻 좋아요"
                                grade={reviewData.satisfaction}
                            />

                            <Stargrade name="💸 비용" grade={reviewData.price} />

                            <Stargrade
                                name="👨‍👩‍👧‍👦 번잡도"
                                grade={reviewData.congestion}
                            />

                            <Stargrade
                                name="🚗 접근성"
                                grade={reviewData.accessibility}
                            />
                        </>
                    ) : null}
                </div>
                <div css={placeinfoStyle.modalStyle.moreshowStyle.starline}/>
                <div css={placeinfoStyle.modalStyle.moreshowStyle.contentDiv}>
                    {reviewData?.content}
                </div>
            </div>
        </div>
    )};
