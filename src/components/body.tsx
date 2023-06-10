import { bodyStyle } from "../styles/style";
import { Hotplace } from "./hotplace/hotplace";
import { TravlePlan } from "./travleplan/travlePlan";

export const Body = () => (
    <div css={bodyStyle}>
        <TravlePlan />
        <Hotplace />
    </div>
);
