import { Link } from "./style";
// import { Login } from "./member/login";
// import { Signup } from "./member/signup";
import { useModal } from "../store";
// import { Modal } from "./Modal";

export const Header = (): JSX.Element => {
    const { setModaloption } = useModal();

    return (
        <>
            <div id="root">
                <button
                    type="button"
                    css={Link}
                    onClick={() => {
                        setModaloption(1);
                    }}
                >
                    로그인
                </button>
                <button
                    type="button"
                    css={Link}
                    onClick={() => {
                        setModaloption(2);
                    }}
                >
                    회원가입
                </button>
            </div>
            {/* {modalOption && (
                <p>Modalopen</p>
                // <Modal>
                //     <Login />
                // </Modal> */}
            <div id="modal" />
        </>
    );
};
