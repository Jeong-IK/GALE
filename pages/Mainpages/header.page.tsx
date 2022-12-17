import { Link } from "./style";
import { useModal } from "../store";
import { Signup } from "./Member/signup.page";
import { Login } from "./Member/login.page";
import { Modal } from "../modal";

export const Header = (): JSX.Element => {
    const { modalOption, setModaloption } = useModal();

    return (
        <>
            <div id="root">
                <button
                    type="button"
                    css={Link}
                    onClick={() => {
                        setModaloption("logIn");
                    }}
                >
                    로그인
                </button>
                <button
                    type="button"
                    css={Link}
                    onClick={() => {
                        setModaloption("signUp");
                    }}
                >
                    회원가입
                </button>
                <Signup />
                <Login />
            </div>
            {modalOption && (
                <Modal>
                    {modalOption === "logIn" ? <Login /> : <Signup />}
                </Modal>
            )}
        </>
    );
};
