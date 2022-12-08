import React, { ReactNode, useRef } from "react";
import ReactDOM from "react-dom";
import { Modalbgcolor, Modalwindow } from "./Mainpages/style";
// import { useModal } from "../store";

export const Modal = (children: ReactNode) => {
    const Windowmodal = useRef<HTMLDivElement>(null);

    // const { setModaloption } = useModal();

    // useEffect(() => {
    //   const Overclick = (e: React.MouseEvent<HTMLElement>) => {Windowmodal.current && !Windowmodal.current.contains(e.target) ? addEventListener("click",setModaloption(0))}
    //   });

    return ReactDOM.createPortal(
        <div css={Modalbgcolor}>
            <div css={Modalwindow} ref={Windowmodal}>
                {children}
            </div>
        </div>,
        document.getElementById("modal") as HTMLElement
    );
};
