import Image from "next/image";
import { AiTwotoneEnvironment } from "react-icons/ai";
import { useViewlocation } from "src/stores/store";
import { useRouter } from "next/router";
import { hotPlaceStyle } from "../../styles/style";
import example from "../../public/example.png";
import { ShellProps } from "../../types/type";

export const Shells = (props: ShellProps) => {
    const { cssType, imageUrl, title, address } = props;
    const { setLocation } = useViewlocation();
    const { latitue, longitude, board_number } = props;
    // Shells 컴포넌트에서 호출되는 함수
    const viewlocation = (lat: number, lng: number) => {
        setLocation({ lat, lng });
    };
    const router = useRouter();

    const goDetailpage = () => {
        router.push({
            pathname: "/placeinfo",
            query: { board_idx: board_number.toString() },
        });
    };

    return (
        <div
            css={hotPlaceStyle.hotplaceShells(cssType)}
            onMouseOver={() => viewlocation(latitue, longitude)}
            onFocus={() => viewlocation(latitue, longitude)}
            onClick={goDetailpage}
        >
            <Image
                src={imageUrl !== "null" ? imageUrl : example}
                alt=""
                css={hotPlaceStyle.hotPlaceImage}
                width={250}
                height={310}
            />

            <div css={hotPlaceStyle.hotPlaceAdress}>
                <AiTwotoneEnvironment css={hotPlaceStyle.svg} /> {address}
            </div>
            <div css={hotPlaceStyle.hotPlacePlaceName}>{title}</div>
        </div>
    );
};
