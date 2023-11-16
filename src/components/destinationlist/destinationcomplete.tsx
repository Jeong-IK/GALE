import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useRouter } from "next/router";
import { AiOutlineSwapRight } from "react-icons/ai";
import { useRegionselectorstore, useViewlocation } from "src/stores/store";
import { useGetregionlist } from "src/hooks/useGetregionlist";
import { travleStyle } from "../../styles/style";

export const Destinationcomplelte = () => {
    const router = useRouter();
    const { lat, lng } = useViewlocation();
    const { region_number} = useRegionselectorstore();
    const { regionData } = useGetregionlist(region_number || 2);

    const mapmarkClickhandle = (marker:kakao.maps.Marker) => {
        console.log(marker);
    }

    return (<div css={travleStyle.destinationComplete.div}>
        <div css={travleStyle.destinationComplete.subject}>도착지 여행장소</div>
        <div css={travleStyle.destinationComplete.travlePlace}>
            <Map
                center={{lat, lng}}
                css={travleStyle.destinationComplete.kakaomap}
                zoomable
                draggable
                level={7}
            >
                {regionData &&
                        regionData.map((marker) => (
                            <MapMarker
                                key={marker.board_number}
                                position={{ lat: marker.latitude, lng: marker.longitude }}
                                image={{src:"data:image/png;base64,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", size:{width:35, height:40}}}
                                clickable
                                onClick={() => {mapmarkClickhandle(marker)}}
                            />
                ))}
                </Map>
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
