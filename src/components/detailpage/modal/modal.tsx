import ReactDOM from "react-dom";
import React, { useRef } from "react";
import { modalStyle, placeinfoStyle } from "src/styles/style";
import { useDetailpagemodaltype } from "src/stores/store";
import { Moreshow } from "./more";
import { Reportmodal } from "./report";

export const Modal = () => {
    const { type, setType } = useDetailpagemodaltype();

    const windowModal = useRef<HTMLDivElement>(null);
    const overClick = (event: React.MouseEvent) => {
        if (
            event.target &&
            !windowModal.current?.contains(event.target as Node)
        )
            setType(null);
    };

    return (
        <>
            {type &&
                ReactDOM.createPortal(
                    <div
                        id="modaloutfeild"
                        css={modalStyle.modalBgColor}
                        onClick={overClick}
                        aria-hidden="true"
                    >
                         <button
                                type="button"
                                css={modalStyle.closeButton}
                                onClick={() => {
                                    setType(null);
                                }}
                            >
                                X
                            </button>
                        <div
                            css={placeinfoStyle.modalStyle.modalWindow}
                            ref={windowModal}
                        >
                            <div css={placeinfoStyle.modalStyle.modalForm}>
                                {/* {modalOption === "logIn" ? (
                                    <Login />
                                ) : (
                                    <Signup />
                                )} */}
                                {type === "moreshow" ? (
                                    <Moreshow />
                                ) : (
                                    <Reportmodal />
                                )}
                            </div>
                        </div>
                    </div>,
                    document.getElementById("modal") as HTMLElement
                )}
        </>
    );
};
