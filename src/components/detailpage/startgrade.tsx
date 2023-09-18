import { AiTwotoneStar } from "react-icons/ai";
import { reviewStyle, placeinfoStyle } from "src/styles/style";

interface Starratingtype {
    name: string;
    grade: number;
}

export const Stargrade = ({ name, grade }: Starratingtype) => {
    console.log(name, name === "📝 리뷰");

    return (
        <div css={placeinfoStyle.stargrade.reviewEachform}>
            <div css={placeinfoStyle.stargrade.reviewTitle(name)}>{name}</div>
            {name !== "📝 리뷰" ? (
                <div css={reviewStyle.reviewStarform}>
                    {[1, 2, 3, 4, 5].map(value => (
                        <AiTwotoneStar
                            css={placeinfoStyle.stargrade.reviewStar(
                                value <= grade
                            )}
                        />
                    ))}
                </div>
            ) : (
                <div css={placeinfoStyle.stargrade.reviewcnt}>{grade}개</div>
            )}
        </div>
    );
};
