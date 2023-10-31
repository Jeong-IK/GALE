import Image from "next/image";
import example from "src/public/profileexample.png";
import { useForm } from "react-hook-form";
import { Editprofilerequesttype } from "src/types/type";
import { useMypageemodalstore } from "src/stores/store";
import { useGetprofileinfo } from "src/hooks/useGetprofileinfo";
import { useprofileeditMutation } from "src/hooks/useProfileupdate";
import { Editprofileimage } from "./editprofileimage";

export const Editform = () => {
    
    const {isopen, setIsopen} = useMypageemodalstore();
    const {editprofileMutation} = useprofileeditMutation();
    const  { profileData } = useGetprofileinfo();

    const editFORMsubmit = (props:Editprofilerequesttype) => {
        // console.log("submit", props);
        editprofileMutation(props);
    }

    const {
        register,
        formState: { isValid },
        handleSubmit,
        getValues,
    } = useForm<Editprofilerequesttype>({ mode: "onChange" });

    return (
    <div>
        <div>GALE 프로필 수정</div>
        <div/>
        <Image src={profileData?.profileImageUrl && profileData.profileImageUrl !== "null" ? profileData.profileImageUrl : example} alt=""/>
        <Editprofileimage />
        <div>
            <label htmlFor="id">아이디</label>
            <div id="id">example@gmail.com</div>
        </div>
        <form onSubmit={handleSubmit(editFORMsubmit)}>
            <div>
                <label htmlFor="nickname">닉네임</label>
                <input type="text" id="nickname"
                {...register("nickname", {
                    required: "닉네임을 입력해주세요.",
                    minLength: {
                        value: 3,
                        message: "3글자 이상 입력해주세요.",
                }})}
                    />
            </div>
            <div>
                <label htmlFor="currentpass">기존 비밀번호</label>
                <input type="password" id="currentpass" placeholder="기존 비밀번호"
                    {...register("password", {
                        required: "비밀번호를 입력해주세요.",
                    })}/>
            </div>
            <div>
                <label htmlFor="changedtpass">비밀번호 변경</label>
                <input type="password" id="changedtpass" placeholder="영어 대소문자, 특수문자, 숫자 포함 8자리 이상"
                    {...register("newPassword", {
                        required: "비밀번호를 입력해주세요.",
                        pattern: {
                            value: /(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/,
                            message:
                                "영어 대소문자, 특수문자, 숫자 포함 8자리 이상 입력해주세요.",
                        },
                    })}/>
            </div>
            <div>
                <label htmlFor="checkedpass">비밀번호 확인</label>
                <input type="password" id="checkedpass" placeholder="비밀번호 확인"
                    {...register("newPasswordConfirmation", {
                        required:
                            "비밀번호를 한 번더 입력해주세요.",
                        validate: (cfmPasswd?: string) => {
                            const passwdValue =
                                getValues("newPassword");
                            if (!cfmPasswd) return;
                            if (passwdValue !== cfmPasswd)
                                return "비밀번호가 서로 일치하지 않습니다.";
                        },
                    })}
                />
            </div>
            <button type="button" onClick={() => setIsopen(!isopen)}>취소</button>
            <button type="submit" disabled={!isValid}>적용하기</button>
        </form>
    </div>
    );
}