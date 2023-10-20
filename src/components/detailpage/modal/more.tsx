import Image from "next/image";
import { useGetdetailreview } from "src/hooks/useDetailrevieweinfo";
import { useDetailpagemodaltype } from "src/stores/store";
import example from "src/public/profileexample.png";
import placeexample from "src/public/example.png";
import { Stargrade } from "../startgrade";


export const Moreshow = () => {
    const { board_review_number } = useDetailpagemodaltype(); 
    const {reviewData} = useGetdetailreview(board_review_number as number);
    console.log(reviewData);
    return (<div>
        <div>
            <div>
                <Image src={reviewData?.userProfileImageUrl ? reviewData.userProfileImageUrl : example} alt=""/>
                <div>
                    <div>{reviewData?.userNickname}</div>
                   <div>{reviewData?.regdate}</div>
                </div>
                <Image src={reviewData?.imageArrayUrl ? reviewData.imageArrayUrl : placeexample} alt=""/>
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
