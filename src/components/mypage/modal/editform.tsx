import Image from "next/image";
import example from "src/public/profileexample.png";
import { useForm } from "react-hook-form";
import { Editprofilerequesttype } from "src/types/type";
import { useMypageemodalstore } from "src/stores/store";
import { useGetprofileinfo } from "src/hooks/useGetprofileinfo";
import { useprofileeditMutation } from "src/hooks/useProfileupdate";
import { mypageStyle } from "src/styles/style";
import { Editprofileimage } from "./editprofileimage";

export const Editform = () => {
    
    const {isopen, setIsopen} = useMypageemodalstore();
    const {editprofileMutation} = useprofileeditMutation();
    const  { profileData } = useGetprofileinfo();

    const editformsubmit = (props:Editprofilerequesttype) => {
        console.log("editformsubmit", props);
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
        <div css={mypageStyle.Editprofileform.title}>GALE 프로필 수정</div>
        <div css={mypageStyle.Editprofileform.line}/>
        <Image src={profileData?.profileImageUrl && profileData.profileImageUrl !== "null" ? profileData.profileImageUrl : example} width={140} height={140} css={mypageStyle.Editprofileform.profileImage} alt=""/>
        <Editprofileimage />
        <div css={mypageStyle.Editprofileform.editform}>
            <form onSubmit={handleSubmit(editformsubmit)} >
            <div css={mypageStyle.Editprofileform.container}>
                <label htmlFor="id" css={mypageStyle.Editprofileform.label}>아이디</label>
                <input type="text" id="id" css={[mypageStyle.Editprofileform.input, mypageStyle.Editprofileform.text, mypageStyle.Editprofileform.onlytext]} value="example@gmail.com"/>
            </div>
                <div css={mypageStyle.Editprofileform.container}>
                    <label htmlFor="nickname" css={mypageStyle.Editprofileform.label}>닉네임</label>
                    <input type="text" id="nickname" css={[mypageStyle.Editprofileform.input, mypageStyle.Editprofileform.text]}
                    {...register("nickname", {
                        required: "닉네임을 입력해주세요.",
                        minLength: {
                            value: 3,
                            message: "3글자 이상 입력해주세요.",
                    }})}
                        />
                </div>
                
                <div css={mypageStyle.Editprofileform.container}>
                    <label htmlFor="currentpass" css={mypageStyle.Editprofileform.label}>기존 비밀번호</label>
                    <input type="password" id="currentpass" css={mypageStyle.Editprofileform.input} placeholder="기존 비밀번호"
                        {...register("password", {
                            required: "비밀번호를 입력해주세요.",
                        })}/>
                </div>
                <div css={mypageStyle.Editprofileform.container}>
                    <label htmlFor="changedtpass" css={mypageStyle.Editprofileform.label}>비밀번호 변경</label>
                    <input type="password" id="changedtpass" css={mypageStyle.Editprofileform.input} placeholder="영어 대소문자, 특수문자, 숫자 포함 8자리 이상"
                        {...register("newPassword", {
                            required: "비밀번호를 입력해주세요.",
                            pattern: {
                                value: /(?=.*[a-zA-Z])((?=.*\d)(?=.*\W)).{8,16}$/,
                                message:
                                    "영어 대소문자, 특수문자, 숫자 포함 8자리 이상 입력해주세요.",
                            },
                        })}/>
                </div>
                <div css={mypageStyle.Editprofileform.container}>
                    <label htmlFor="checkedpass" css={mypageStyle.Editprofileform.label}>비밀번호 확인</label>
                    <input type="password" id="checkedpass" css={mypageStyle.Editprofileform.input} placeholder="비밀번호 확인"
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
                    
                <button type="button" onClick={() => setIsopen(!isopen)}  css={mypageStyle.Editprofileform.cancleButton}>취소</button>
                <button type="submit" disabled={!isValid} css={mypageStyle.Editprofileform.submitButton(isValid)}>적용하기</button>
            </form>
        </div>
    </div>
    );
}