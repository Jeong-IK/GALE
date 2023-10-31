import { GeneralResponse, Uploadimagetype } from "src/types/type";
import axios from "./axiosInstance";


export const UploadprofileimageAction = async (imagedata:Uploadimagetype): Promise<GeneralResponse> => {
    const formData = new FormData();
    formData.append("profileImageFile", imagedata.saveFileData);

    const axiosResult = axios
        .post("/user/profile/image", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then(response => response.data);
    return axiosResult;
}

// 프로필 유저 이미지 삭제 API
export const DeleteprofileimageAction = async (): Promise<GeneralResponse> => {
    const axiosResult = await axios
        .delete("/user/profile/image")
        .then(response => response.data);
    return axiosResult;
};
