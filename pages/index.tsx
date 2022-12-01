import type { NextPage } from "next";
import { Login } from "./member/login";
import { Signup } from "./member/signup";

const Home: NextPage = () => {
    return (
        <>
            <Login />
            <Signup />
        </>
    );
};

export default Home;
