import { AiTwotoneStar } from "react-icons/ai";
import { reviewStyle, placeinfoStyle } from "src/styles/style";

interface Starratingtype {
    name: string;
    grade: number;
}

export const Stargrade = ({ name, grade }: Starratingtype) => (
    <div css={placeinfoStyle.modalStyle.moreshowStyle.stargradeform}>
        <div css={placeinfoStyle.modalStyle.moreshowStyle.stargradetitle}>{name}</div>
            <div css={reviewStyle.reviewStarform}>
                {[1, 2, 3, 4, 5].map(value => (
                    <AiTwotoneStar
                        css={placeinfoStyle.modalStyle.moreshowStyle.star(
                            value <= grade
                        )}
                        key={value}
                    />
                ))}
            </div>
    </div>
);
