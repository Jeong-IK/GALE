import { Map } from "react-kakao-maps-sdk";
import { mypageStyle } from "../../styles/style";
// import { useMypagecontent } from "../../stores/store";
import { SelectContenttype } from "./selectcontent";
import { ContentList } from "./contentlist";

export const Mypagebody = () => (
    // const { contentType, setContenttype } = useMypagecontent();
    
    <>
        <div css={mypageStyle.bodyDiv}>
            <SelectContenttype />
            <div css={mypageStyle.contentDiv}>
                <ContentList />
                <Map
                    center={{ lat: 33.5563, lng: 126.79581 }}
                    css={mypageStyle.kakaoMap}
                    zoomable={false}
                    draggable={false}
                />
            </div>
        </div>
    </>
);
