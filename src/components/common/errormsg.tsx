import Image from "next/image";
import { useErrorMsg } from "../../stores/store";
import { errorMsg } from "../../styles/style";
import Polygon from "../../public/errorPolygon.png";

export const ErrorMsg = () => {
    const { errorMsgType } = useErrorMsg();

    return (
        <div>
            <div css={errorMsg.errorDiv}>
                <div css={errorMsg.errorContentDiv}>
                    <div css={errorMsg.errorMsgDiv}>
                        <Image
                            src={Polygon}
                            css={errorMsg.Polygon}
                            alt=""
                            priority
                        />
                        {errorMsgType}
                    </div>
                </div>
                <button type="button" css={errorMsg.errorButton}>
                    확인
                </button>
            </div>
        </div>
    );
};
