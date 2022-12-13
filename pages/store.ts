import create from "zustand";
import { Modaloption, Modalstatus } from "./Mainpages/type";

// Modal 활성화 및 Modaltype

export const useModal = create<Modalstatus>()(set => {
    return {
        modalOption: 0,
        setModaloption: (req: Modaloption) => {
            return set(() => {
                return { modalOption: req };
            });
        },
    };
});

// export const useSignupata = create<SignupData>()(set => {
//     return {
//         emailValid: true,
//         pwdValid: true,
//         nameValid: true,
//         setEmailvalid: (valid: boolean) => {
//             return set(() => {
//                 return { emailValied: valid };
//             });
//         },
//         setPwdlvalid: (valid: boolean) => {
//             return set(() => {
//                 return { pwdValid: valid };
//             });
//         },
//         setNamevalid: (valid: boolean) => {
//             return set(() => {
//                 return { nameValid: valid };
//             });
//         },
//     };
// });
