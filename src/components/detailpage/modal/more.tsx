import Image from "next/image";
import { useGetdetailreview } from "src/hooks/useDetailrevieweinfo";
import { useDetailpagemodaltype } from "src/stores/store";
import example from "src/public/profileexample.png";
import placeexample from "src/public/reviewCardexample.png";
import { Stargrade } from "../startgrade";


export const Moreshow = () => {
    const { board_review_Number } = useDetailpagemodaltype(); 
    const { reviewData } = useGetdetailreview(board_review_Number as number);
    // console.log("profileimageUrl",reviewData?.userProfileImageUrl);
    // console.log("moreshow_imageArray",reviewData?.imageArrayUrl[0]);

    return (<div>   
        <div>
            <div>
                <Image src={reviewData?.userProfileImageUrl && reviewData.userProfileImageUrl !== "null" ? reviewData.userProfileImageUrl : example} alt="" width={300} height={300}/>
                <div>
                    <div>{reviewData?.userNickname}</div>
                   <div>{reviewData?.regdate}</div>
                </div>
                <Image src={reviewData?.imageArrayUrl && reviewData.imageArrayUrl[0] !== "null" ? reviewData.imageArrayUrl[0] : placeexample} alt="" width={300} height={300}/>
            </div>
            <div>
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
                <div>
                    {reviewData?.content}
                </div>
            </div>
        </div>
    </div>)};
