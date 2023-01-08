import ReactDOM from "react-dom";
import React, { useRef } from "react";
import { modalStyle } from "../../styles/style";
import { useModal } from "../../stores/store";
import { ModalChildrenType } from "../../types/type";

export const Modal = ({ children }: ModalChildrenType) => {
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
        <div
            css={modalStyle.modalBgColor}
            onClick={overClick}
            aria-hidden="true"
        >
            <div css={modalStyle.modalWindow} ref={windowModal}>
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
