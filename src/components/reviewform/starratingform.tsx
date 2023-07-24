import { AiTwotoneStar } from "react-icons/ai";
import { useState } from "react";
import { reviewStyle } from "../../styles/style";
import { StarValuetype } from "../../types/type";

interface Starratingtype {
    name: string;
    explain: string;
    itemId: string;
    settingFunction: ({ itemId, value }: StarValuetype) => void;
}

export const Starratingform = ({
    name,
    explain,
    itemId,
    settingFunction,
}: Starratingtype) => {
    const [rating, setRating] = useState<number>(0);

    const changeStarcolor = (value: number) => {
        setRating(value);
        settingFunction({ itemId, value });
    };

    return (
        <div css={reviewStyle.reviewEachform}>
            <div css={reviewStyle.reviewRatingsubject}>{name}</div>
            <div css={reviewStyle.reviewStarform}>
                <div>
                    {[1, 2, 3, 4, 5].map(value => (
                        <AiTwotoneStar
                            css={reviewStyle.reviewStar(value <= rating)}
                            onClick={() => changeStarcolor(value)}
                        />
                    ))}
                </div>
                <div css={reviewStyle.reviewExplain}>{explain}</div>
            </div>
        </div>
    );
};
