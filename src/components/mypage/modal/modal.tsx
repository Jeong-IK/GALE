import ReactDOM from "react-dom";
import React, { useRef } from "react";
import { modalStyle, placeinfoStyle } from "src/styles/style";
import { useMypageemodalstore } from "src/stores/store";
import { Editprofile } from "./editprofile";


export const Modal = () => {
    const { isopen, setIsopen } = useMypageemodalstore();

    const windowModal = useRef<HTMLDivElement>(null);
    const overClick = (event: React.MouseEvent) => {
        if (
            event.target &&
            !windowModal.current?.contains(event.target as Node)
        )
            setIsopen(false);
    };

    return (
        <>
            {isopen &&
                ReactDOM.createPortal(
                    <div
                        id="modaloutfeild"
                        css={modalStyle.modalBgColor}
                        onClick={overClick}
                        aria-hidden="true"
                    >
                        <div
                            css={placeinfoStyle.modalStyle.modalWindow}
                            ref={windowModal}
                        >
                            <div css={placeinfoStyle.modalStyle.modalForm}>
                                <Editprofile />
                            </div>
                        </div>
                    </div>,
                    document.getElementById("modal") as HTMLElement
                )}
        </>
    );
};
