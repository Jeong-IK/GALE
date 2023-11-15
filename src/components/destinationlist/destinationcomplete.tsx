import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useRouter } from "next/router";
import { AiOutlineSwapRight } from "react-icons/ai";
import { useRegionselectorstore, useViewlocation } from "src/stores/store";
import { useGetregionlist } from "src/hooks/useGetregionlist";
import  mapmarkericon from "src/public/mapmarkericon.svg";
import { travleStyle } from "../../styles/style";

export const Destinationcomplelte = () => {
    const router = useRouter();
    const { lat, lng } = useViewlocation();
    const { region_number} = useRegionselectorstore();
    const { regionData } = useGetregionlist(region_number || 2);
    

    return (<div css={travleStyle.destinationComplete.div}>
        <div css={travleStyle.destinationComplete.subject}>도착지 여행장소</div>
        <div css={travleStyle.destinationComplete.travlePlace}>
            <Map
                 // center={{ lat: 37.5137976, lng: 126.8910412539 }}
                center={{lat, lng}}
                css={travleStyle.destinationComplete.kakaomap}
                zoomable
                draggable
                level={8}
            >
                {/* <MapMarker
                position={{lat:37.5137976, lng:126.8910412539}}
                /> */}
                {regionData &&
                        regionData.map((marker) => (
                            <MapMarker
                                key={marker.board_number}
                                position={{ lat: marker.latitude, lng: marker.longitude }}
                                image={{src: mapmarkericon, size:{width:40, height:40}}}
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
