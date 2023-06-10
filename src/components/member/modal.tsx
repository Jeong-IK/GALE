import ReactDOM from "react-dom";
import React, { useRef } from "react";
import { modalStyle } from "../../styles/style";
import { useModal } from "../../stores/store";
import { Login } from "./login";
import { Signup } from "./signup";

export const Modal = () => {
    const { modalOption, setModaloption } = useModal();

    const windowModal = useRef<HTMLDivElement>(null);

    const overClick = (event: React.MouseEvent) => {
        if (
            event.target &&
            !windowModal.current?.contains(event.target as Node)
        )
            setModaloption(null);
    };

    return (
        <>
            {modalOption &&
                ReactDOM.createPortal(
                    <div
                        id="modalForm"
                        css={modalStyle.modalBgColor}
                        onClick={overClick}
                        aria-hidden="true"
                    >
                        <div css={modalStyle.modalWindow} ref={windowModal}>
                            <button
                                type="button"
                                css={modalStyle.closeButton}
                                onClick={() => {
                                    setModaloption(null);
                                }}
                            >
                                X
                            </button>
                            <div css={modalStyle.modalForm}>
                                {modalOption === "logIn" ? (
                                    <Login />
                                ) : (
                                    <Signup />
                                )}
                            </div>
                        </div>
                    </div>,
                    document.getElementById("modal") as HTMLElement
                )}
            <div id="errormodal" />
        </>
    );
};
