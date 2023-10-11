// import { useRef } from "react";
// import ReactDOM from "react-dom";
// import { useDetailpagemodaltype } from "src/stores/store";
// import { modalStyle } from "src/styles/style";

// export const modal = () => {
//     const { type, setType } = useDetailpagemodaltype();

//     const windowModal = useRef<HTMLDivElement>(null);

//     const overClick = (event: React.MouseEvent) => {
//         if (
//             event.target &&
//             !windowModal.current?.contains(event.target as Node)
//         )
//             setType(null);
//     };

//     return (
//         <>
//             {type &&
//                 ReactDOM.createPortal(
//                     <div
//                         id="modalForm"
//                         css={modalStyle.modalBgColor}
//                         onClick={overClick}
//                         aria-hidden="true"
//                     >
//                         <div css={modalStyle.modalWindow} ref={windowModal}>
//                             <button
//                                 type="button"
//                                 css={modalStyle.closeButton}
//                                 onClick={() => {
//                                     overClick();
//                                 }}
//                             >
//                                 X
//                             </button>
//                             <div css={modalStyle.modalForm}>
//                                 {modalOption === "logIn" ? (
//                                     <Login />
//                                 ) : (
//                                     <Signup />
//                                 )}
//                             </div>
//                         </div>
//                     </div>,
//                     document.getElementById("modal") as HTMLElement
//                 )}
//             <div id="errormodal" />
//         </>
//     );
// };
