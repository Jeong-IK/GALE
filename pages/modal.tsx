import ReactDOM from "react-dom";
import React, { useRef } from "react";
import { Modalbgcolor, Modalwindow } from "./Mainpages/style";
import { useModal } from "./store";
import { ModalchildrenType } from "./Mainpages/type";

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
        <div css={Modalbgcolor} onClick={overClick} aria-hidden="true">
            <div css={Modalwindow} ref={windowModal}>
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
