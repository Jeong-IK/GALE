import Image from "next/image";
import { cardstyle } from "../../styles/style";
import example from "../../public/example.png";

export const Card = () => (
    <div css={cardstyle.cardstyle}>
        <Image src={example} alt="삭제예정" css={cardstyle.cardimage} />
        <div>
            <span>경기용인시</span>
            <span>수지생태공원</span>
        </div>
    </div>
);
