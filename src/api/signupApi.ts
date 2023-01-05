import axios from "axios";
import React from "react";
import { useModal } from "../stores/store";
import { SignupProps } from "../types/type";

export const test = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
};

export const useSignup = ({
    email,
    pwd,
    confirmpwd,
    nickname,
}: SignupProps) => {
    const { setModaloption } = useModal();
    axios
        .post("http://175.212.160.106:7777/auth/signup", [
            {
                Email: email,
                Password: pwd,
                ConfirmPassword: confirmpwd,
                Nickname: nickname,
            },
            {
                withCredentials: true,
            },
        ])
        .then(response => {
            alert(response.data.message);
            setModaloption("logIn");
        })
        .catch(error => {
            console.log(error.response.data);
            alert(error.response.data.message);
        });
};
