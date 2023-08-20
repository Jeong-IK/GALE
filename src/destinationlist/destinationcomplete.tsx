import { Map } from "react-kakao-maps-sdk";
import { AiOutlineSwapRight } from "react-icons/ai";
import { travleStyle } from "../styles/style";

export const Destinationcomplelte = () => (
    <div css={travleStyle.destinationComplete.div}>
        <div css={travleStyle.destinationComplete.subject}>도착지 여행장소</div>
        <div css={travleStyle.destinationComplete.travlePlace}>
            <Map
                center={{ lat: 33.5563, lng: 126.79581 }}
                css={travleStyle.destinationComplete.kakaomap}
                zoomable={false}
                draggable={false}
            />
            <div css={travleStyle.destinationComplete.listDiv}>
                <div css={travleStyle.destinationComplete.travleDate}>
                    <div>가는 날 :{}</div>
                    <AiOutlineSwapRight />
                    <div>오는 날 :{}</div>
                </div>

                <button
                    type="button"
                    css={travleStyle.destinationComplete.travleButton}
                >
                    일정 확정하기
                </button>
            </div>
        </div>
    </div>
);
