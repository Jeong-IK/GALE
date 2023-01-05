import ReactDOM from "react-dom";
import React, { useRef } from "react";
import { modalstyle } from "../../styles/style";
import { useModal } from "../../stores/store";
import { ModalchildrenType } from "../../types/type";

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
        <div
            css={modalstyle.modalbgcolor}
            onClick={overClick}
            aria-hidden="true"
        >
            <div css={modalstyle.modalwindow} ref={windowModal}>
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
