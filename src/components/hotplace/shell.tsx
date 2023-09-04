import Image from "next/image";
import { AiTwotoneEnvironment } from "react-icons/ai";
import { hotPlaceStyle } from "../../styles/style";
import example from "../../public/example.png";
import { ShellProps } from "../../types/type";

export const Shells = (props: ShellProps) => {
    const { cssType, imageUrl, title, address } = props;
    console.log(imageUrl);
    return (
        <div css={hotPlaceStyle.hotplaceShells(cssType)}>
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
