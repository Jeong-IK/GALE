import { Map } from "react-kakao-maps-sdk";
import { hotPlaceStyle } from "../../styles/style";
import { Shells } from "./shell";
import { Slideshell } from "./slideshell";

export const Hotplace = () => (
    <>
        <div css={hotPlaceStyle.hotPlaceSubject}>인기 있는 여행지 🔥</div>

        <div css={hotPlaceStyle.totalDiv}>
            <div css={hotPlaceStyle.hotPlaceDiv}>
                <Shells cssType={-1} />
                <Shells cssType={-1} />
                <Shells cssType={-1} />
                <Shells cssType={-1} />
                <Shells cssType={-1} />
                <Shells cssType={-1} />
            </div>
            <Map
                center={{ lat: 33.5563, lng: 126.79581 }}
                css={hotPlaceStyle.kakaoMap}
                zoomable={false}
                draggable={false}
            />
        </div>
        <Slideshell subject="캠핑러들을 위한 장소 🏕️ " />
        <Slideshell subject=" 반려가족과 함께 즐길 수 있는 여행지 🐕" />
    </>
);
