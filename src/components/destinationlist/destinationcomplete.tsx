import { Map } from "react-kakao-maps-sdk";
import { useRouter } from "next/router";
import { AiOutlineSwapRight } from "react-icons/ai";
import { travleStyle } from "../../styles/style";

export const Destinationcomplelte = () => {
    const router = useRouter();
    
    
    return (<div css={travleStyle.destinationComplete.div}>
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
                    <div>가는 날 :{router.query.startDate}</div>
                    <AiOutlineSwapRight />
                    <div>오는 날 :{router.query.endDate}</div>
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
}
