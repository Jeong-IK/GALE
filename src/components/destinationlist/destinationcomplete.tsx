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
    

    return (<div css={travleStyle.destinationComplete.div}>
        <div css={travleStyle.destinationComplete.subject}>도착지 여행장소</div>
        <div css={travleStyle.destinationComplete.travlePlace}>
            <Map
                // center={{ lat: 37.566535, lng: 126.9779692 }}
                center={{lat, lng}}
                css={travleStyle.destinationComplete.kakaomap}
                zoomable
                draggable
                level={7}
            >
                {regionData ? regionData.map((marker) => { 
                    console.log(marker.latitude, marker.longitude);
                    return (
                    <MapMarker
                        position={{ lat: marker.latitude, lng: marker.latitude }}
                        clickable
                          />)
                }) : null          
                }
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
