import ReactDOM from "react-dom";
import React, { useRef } from "react";
import { ModalBgColor, ModalWindow } from "./mainpages/style";
import { useModal } from "./store";
import { ModalchildrenType } from "./mainpages/type";

export const Modal = ({ children }: ModalchildrenType) => {
    const windowModal = useRef<HTMLDivElement>(null);

    const { setModaloption } = useModal();

    const overClick = (event: React.MouseEvent) => {
        if (
            event.target &&
            !windowModal.current?.contains(event.target as Node)
        )
            setModaloption(null);
    };

    return ReactDOM.createPortal(
        <div css={ModalBgColor} onClick={overClick} aria-hidden="true">
            <div css={ModalWindow} ref={windowModal}>
                <button
                    type="button"
                    onClick={() => {
                        setModaloption(null);
                    }}
                >
                    X
                </button>
                {children}
            </div>
        </div>,
        document.getElementById("modal") as HTMLElement
    );
};
