import Image from "next/image";
import { AiTwotoneEnvironment } from "react-icons/ai";
import { hotPlaceStyle } from "../../styles/style";
import example from "../../public/example.png";
import { ShellProps } from "../../types/type";

export const Shells = (props: ShellProps) => {
    const { cssType } = props;
    return (
        <div css={hotPlaceStyle.hotplaceShells(cssType)}>
            <Image src={example} alt="" css={hotPlaceStyle.hotPlaceImage} />
            <div css={hotPlaceStyle.hotPlaceAdress}>
                <AiTwotoneEnvironment css={hotPlaceStyle.svg} /> Name
            </div>
            <div css={hotPlaceStyle.hotPlacePlaceName}>Title</div>
        </div>
    );
};
