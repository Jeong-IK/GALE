import { placeinfoStyle } from "src/styles/style";

interface Starratingtype {
    name: string;
    grade: number;
}

export const Reviewcnt = ({ name, grade }: Starratingtype) => (
    <div css={placeinfoStyle.stargrade.reviewEachform}>
        <div css={placeinfoStyle.stargrade.reviewTitle(name)}>{name}</div>
        <div css={placeinfoStyle.stargrade.reviewcnt}>{grade}개</div>
    </div>
);
