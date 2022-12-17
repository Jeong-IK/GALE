import ReactDOM from "react-dom";
// import { useEffect, useRef } from "react";
import { Modalbgcolor, Modalwindow } from "./Mainpages/style";
import { useModal } from "./store";
import { ModalchildrenType } from "./Mainpages/type";

export const Modal = ({ children }: ModalchildrenType) => {
    // const Windowmodal = useRef<HTMLDivElement>(null);

    const { setModaloption } = useModal();

    // useEffect(() => {
    //     const Overclick = (event: CustomEvent<MouseEvent>) => {
    //         Windowmodal.current &&
    //         !Windowmodal.current.contains(event.target as Node)
    //             ? addEventListener("click", setModaloption(null))
    //     };
    // });

    return ReactDOM.createPortal(
        <div css={Modalbgcolor}>
            <div css={Modalwindow}>
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
