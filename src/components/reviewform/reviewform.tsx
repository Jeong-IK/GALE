import { AiTwotoneEnvironment } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
import { reviewStyle } from "../../styles/style";
import { Starratingform } from "./starratingform";
import { StarValuetype, Contentform } from "../../types/type";
import { useReviewupload } from "../../hooks/useReviewupload";
import { Photoform } from "./photoform";
import { useImagelistStore } from "../../stores/store";

const example = {
    name: "안터생태공원",
    address: "안알랴줌",
    board_category: 1,
    board_idx: 9,
};

const reviewItem = [
    {
        id: "grade",
        name: "⭐ 별점",
        explain: "장소에 대한 전반적인 평점을 입력해주세요. ",
    },
    {
        id: "service",
        name: "🛎 서비스",
        explain: "별점이 높을수록 서비스 만족도가 높습니다. ",
    },
    {
        id: "price",
        name: "💸 가격",
        explain: "별점이 높을수록 가격대가 높습니다.  ",
    },
    {
        id: "congestion",
        name: "👨‍👩‍👧‍👦 번잡도",
        explain: "별점이 높을수록 번잡합니다.  ",
    },
    {
        id: "accessibility",
        name: "🚗 접근성",
        explain: "별점과 접근성을 비례합니다.  ",
    },
];

export const Reviewform = () => {
    const [ratinglist, setRatinglist] = useState(
        reviewItem.map(item => ({ id: item.id, ratings: 0 }))
    );
    const reviewUploadAction = useReviewupload();
    const { imageList } = useImagelistStore();
    const submitButtonref = useRef<HTMLButtonElement>(null);
    const {
        register,
        handleSubmit,
        formState: { isSubmitting, isValid },
        watch,
    } = useForm<Contentform>();

    const reviewTextlen = watch("content", "");

    const changeStarvalue = ({ itemId, value }: StarValuetype) => {
        setRatinglist(
            ratinglist.map(ratings =>
                ratings.id === itemId ? { ...ratings, ratings: value } : ratings
            )
        );
    };
    const checkdisable = (): boolean => {
        if (!isValid || isSubmitting) return true;
        if (imageList.length === 0) return true;
        if (ratinglist.find(value => value.ratings === 0)) return true;
        return false;
    };

    useEffect(() => {
        if (submitButtonref.current) {
            submitButtonref.current.disabled = checkdisable();
        }
    }, [ratinglist, imageList, isValid]);

    const submitReview = (data: Contentform) => {
        const totalRating: { [key: string]: number } = {};
        ratinglist.forEach(({ id, ratings }) => {
            totalRating[id] = ratings;
        });

        const sendData = {
            requestData: {
                board_category: example.board_category,
                board_number: example.board_idx,
                writer: localStorage.getItem("email") || "",
                content: data.content,
                grade: totalRating.grade,
                service: totalRating.service,
                price: totalRating.price,
                congestion: totalRating.congestion,
                accessibility: totalRating.accessibility,
            },
            multipartFileList: imageList,
        };
        reviewUploadAction(sendData);
        return 0;
    };

    return (
        <>
            <form onSubmit={handleSubmit(submitReview)}>
                <div css={reviewStyle.reviewform}>
                    <div css={reviewStyle.reviewPlaceName}>{example.name}</div>
                    <div css={reviewStyle.reviewAdress}>
                        <AiTwotoneEnvironment />
                        {example.address}
                    </div>
                    <div css={reviewStyle.reviewSubjectBorder} />
                    <div css={reviewStyle.reviewSurvey}>
                        아래 모든 항목에 모두 응답해주세요!
                    </div>
                    <div css={reviewStyle.reviewEffect}>
                        여행지에서 겪은 여러분의 직접적인 경험은 다른
                        여행자들에게 좋은 정보가 됩니다.
                    </div>
                    <div css={reviewStyle.reviewTotalform}>
                        {reviewItem.map(item => (
                            <Starratingform
                                name={item.name}
                                explain={item.explain}
                                key={item.id}
                                itemId={item.id}
                                settingFunction={changeStarvalue}
                            />
                        ))}
                        <div css={reviewStyle.reviewStarsurvey} />
                        <div css={reviewStyle.reviewTextdiv}>
                            <div css={reviewStyle.reviewTextsubject}>
                                리뷰 내용
                            </div>
                            <div css={reviewStyle.reviewTextinputdiv}>
                                <textarea
                                    placeholder="리뷰 내용을 최소 50자 이상 작성해주세요."
                                    {...register("content", {
                                        required: "content",
                                        minLength: 50,
                                    })}
                                    maxLength={5000}
                                    css={reviewStyle.reviewTextinput}
                                />
                                <div css={reviewStyle.reviewTextcnt}>
                                    <span css={reviewStyle.reviewTextnowcnt}>
                                        {reviewTextlen.length}
                                    </span>
                                    <span>/5,000</span>
                                </div>
                            </div>
                        </div>

                        <Photoform />

                        <div css={reviewStyle.reviewNeededdiv}>
                            <li css={reviewStyle.reviewNeedlist}>
                                리뷰 작성 시 필수 사항입니다.
                            </li>
                            <li css={reviewStyle.reviewNeedlist}>
                                리뷰와 관련없는 사진은 운영자에 의해 삭제될 수
                                있습니다.
                            </li>
                        </div>
                        <div css={reviewStyle.reviewButtondiv}>
                            <button
                                css={reviewStyle.reviewCanclebutton}
                                type="button"
                            >
                                취소
                            </button>
                            <button
                                css={reviewStyle.reviewSubmitbutton(
                                    checkdisable()
                                )}
                                type="submit"
                                ref={submitButtonref}
                            >
                                등록
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};
