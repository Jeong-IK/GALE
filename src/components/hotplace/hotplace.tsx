import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useGetcategory } from "src/hooks/useGetrisingcategory";
import { hotPlaceStyle } from "src/styles/style";
import { useViewlocation } from "src/stores/store";
import { Shells } from "./shell";
import { Slideshell } from "./slideshell";

export const Hotplace = () => {
    // 현재 선택된 위치의 상태
    const { lat, lng } = useViewlocation();
    const { categoryData } = useGetcategory({
        board_Category_Number: 0,
        currentPage: 0,
    });

    return (
        <>
            <div css={hotPlaceStyle.hotPlaceSubject}>인기 있는 여행지 🔥</div>
            <div css={hotPlaceStyle.totalDiv}>
                <div css={hotPlaceStyle.hotPlaceDiv}>
                    {categoryData
                        ? categoryData.list.map(data => (
                              <Shells
                                  cssType={-1}
                                  title={data.locationname}
                                  address={data.locationaddress}
                                  imageUrl={data.firstImageUrl}
                                  key={data.board_number}
                                  latitue={data.latitude}
                                  longitude={data.longitude}
                                  board_number={data.board_number}
                              />
                          ))
                        : null}
                </div>
                <Map
                    center={{ lat, lng }}
                    css={hotPlaceStyle.kakaoMap}
                    zoomable={false}
                    draggable={false}
                >
                    {lat !== 0 && lng !== 0 ? (
                        <MapMarker
                            position={{
                                lat,
                                lng,
                            }}
                        />
                    ) : null}
                </Map>
            </div>
            <Slideshell subject="캠핑러들을 위한 장소 🏕️ " categoryCode={200} />
            <Slideshell
                subject=" 반려가족과 함께 즐길 수 있는 여행지 🐕"
                categoryCode={100}
            />
        </>
    );
};
