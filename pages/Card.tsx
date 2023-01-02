import Image from "next/image";
import { CardStyle, CardImage } from "./mainpages/style";

export const Card = () => (
    <div css={CardStyle}>
        <Image src="/example.png" alt="이미지" layout="fill" css={CardImage} />
        <div>
            <span>경기용인시</span>
            <span>수지생태공원</span>
        </div>
    </div>
);
