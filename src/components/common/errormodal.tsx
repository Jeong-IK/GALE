import { useState } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import { errorMsg } from "../../styles/style";
import Polygon from "../../public/errorPolygon.png";
import { useErrorMsg } from "../../stores/store";

export const ErrorModal = () => {
    const [errorStatus, setErrorStatus] = useState<boolean>(false);
    const { errorMsgType } = useErrorMsg();

    const okClick = () => {
        setErrorStatus(false);
        return undefined;
    };
    return (
        <>
            {errorStatus &&
                ReactDOM.createPortal(
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
                            <button
                                type="button"
                                css={errorMsg.errorButton}
                                onClick={okClick()}
                            >
                                확인
                            </button>
                        </div>
                    </div>,
                    document.getElementById("errormodal") as HTMLElement
                )}
        </>
    );
};
