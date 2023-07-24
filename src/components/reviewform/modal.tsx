import ReactDOM from "react-dom";
import { useRef } from "react";
import { modalStyle, reviewStyle } from "../../styles/style";
import { useAlertstore } from "../../stores/store";

export const Alertmodal = () => {
    const { alerText, setAlertext } = useAlertstore();

    const windowModal = useRef<HTMLDivElement>(null);

    const overClick = (event: React.MouseEvent) => {
        if (
            event.target &&
            !windowModal.current?.contains(event.target as Node)
        )
            setAlertext(null);
    };

    return (
        <>
            {alerText &&
                ReactDOM.createPortal(
                    <div
                        css={modalStyle.modalBgColor}
                        onClick={overClick}
                        aria-hidden="true"
                    >
                        <div css={reviewStyle.reviewAlertdiv} ref={windowModal}>
                            <div css={reviewStyle.reviewAlertcontext}>
                                {alerText}
                            </div>
                            <button
                                type="button"
                                onClick={() => setAlertext(null)}
                                css={reviewStyle.reviewAlertbutton}
                            >
                                확인
                            </button>
                        </div>
                    </div>,
                    document.getElementById("alertModal") as HTMLElement
                )}
        </>
    );
};
