import axios from "./axiosInstance";
import { ReviewuploadProps, GeneralResponse } from "../types/type";

export const reviewUploadAction = async (
    inputData: ReviewuploadProps
): Promise<GeneralResponse> => {
    const formData = new FormData();
    // 리뷰 점수 및 텍스트
    formData.append(
        "requestbody",
        new Blob([JSON.stringify(inputData.requestData)], {
            type: "application/json",
        })
    );
    // formData.append("requestbody", JSON.stringify(test))
    // 리뷰 이미지 파일
    inputData.multipartFileList.forEach((data, index) => {
        formData.append(
            "multipartFileList",
            inputData.multipartFileList[index].saveFileData
        );
    });

    const axiosResult = axios
        .post("/board/review", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        .then(response => response.data);
    return axiosResult;
};
