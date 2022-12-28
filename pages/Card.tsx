import Image from "next/image";
import { Cardstyle, Cardimage } from "./mainpages/style";

export const Card = () => (
    <div css={Cardstyle}>
        <Image src="/example.png" alt="이미지" layout="fill" css={Cardimage} />
        <div>
            <span>경기용인시</span>
            <span>수지생태공원</span>
        </div>
    </div>
);
