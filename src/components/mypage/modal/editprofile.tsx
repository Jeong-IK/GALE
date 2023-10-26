import Image from "next/image";
import example from "src/public/profileexample.png";
import {AiOutlineCamera} from "react-icons/ai";
import {MdOutlineClose} from "react-icons/md";
import { useprofileeditMutation } from "src/hooks/useProfileupdate";

export const Editprofile = () => {
    const {editprofileMutation, editprofileError} = useprofileeditMutation();
    const editprofilesubmit = (props) => {
        console.log(props);
    }

    console.log(1);
    return (<div>
        <div>GALE 프로필 수정</div>
        <div/>
        <Image src={example} alt=""/>
        <div>
            <button type="button"> <AiOutlineCamera/> </button>
            <button type="button"> <MdOutlineClose/> </button>
        </div> 
        <div>
            <label htmlFor="id">아이디</label>
            <div id="id">example@gmail.com</div>
        </div>
        <div>
            <label htmlFor="nickname">닉네임</label>
            <input type="text" id="nickname"/>
        </div>
        <div>
            <label htmlFor="currentpass">기존 비밀번호</label>
            <input type="password" id="currentpass"/>
        </div>
        <div>
            <label htmlFor="changedtpass">비밀번호 변경</label>
            <input type="password" id="changedtpass"/>
        </div>
        <div>
            <label htmlFor="checkedpass">비밀번호 확인</label>
            <input type="password" id="checkedpass"/>
        </div>
        <button type="button">취소</button>
        <button type="submit">적용하기</button>
    </div>);
}