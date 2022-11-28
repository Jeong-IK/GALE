import create from "zustand";

interface Logindata {
    email: string;
    password: string;
    setlogindata: (inputname: string, inputpassword: string) => void;
}

export const useMemberStore = create<Logindata>()(set => {
    return {
        email: "init",
        password: "init",
        setlogindata: (inputname: string, inputpassword: string) => {
            return set(() => {
                return { email: inputname, password: inputpassword };
            });
        },
    };
});
