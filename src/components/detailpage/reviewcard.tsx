import { placeinfoStyle } from "src/styles/style";
import Image from "next/image";
import { GetplacereviewresponseType } from "src/types/type";
import { useDetailpagemodaltype } from "src/stores/store";
import example from "../../public/reviewCardexample.png";
import profileexample from "../../public/profileexample.png";

export const Reviewcard = (props: GetplacereviewresponseType) => {
    // const placeimage = data.imageArrayUrl[0];
    const { setType } = useDetailpagemodaltype();

    return (
        <>
            <div css={placeinfoStyle.reviewdata.reviewCard}>
                <Image
                    src={
                        props?.imageArrayUrl &&
                        props.imageArrayUrl[0] !== "null"
                            ? props.imageArrayUrl[0]
                            : example
                    }
                    alt=""
                    height={186}
                    width={162}
                    css={placeinfoStyle.reviewdata.reviewImage}
                />
                <div css={placeinfoStyle.reviewdata.textDiv}>
                    <div css={placeinfoStyle.reviewdata.profileDiv}>
                        <Image
                            src={
                                props?.userProfileImageUrl
                                    ? props.userProfileImageUrl
                                    : profileexample
                            }
                            alt="profile"
                            height={43}
                            width={43}
                            css={placeinfoStyle.reviewdata.profile}
                        />
                        <div css={placeinfoStyle.reviewdata.nickname}>
                            {props?.userNickname}
                            <button
                                type="button"
                                css={placeinfoStyle.reviewdata.reportButton}
                                onClick={() => setType("report")}
                            >
                                {/* onClick 신고하기 modal창 */}
                                신고하기
                            </button>
                        </div>
                        {/* 별점 추가 */}
                    </div>
                    <div css={placeinfoStyle.reviewdata.reviewContent}>
                        {props?.content}
                    </div>
                    <div css={placeinfoStyle.reviewdata.writeDate}>
                        {props?.regdate.slice(0, 10)}
                        <button
                            type="button"
                            css={placeinfoStyle.reviewdata.moreButton}
                        >
                            더보기
                        </button>
                    </div>
                </div>
            </div>

            <div css={placeinfoStyle.reviewdata.reviewcardendLine} />
        </>
    );
};
