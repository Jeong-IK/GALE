import { AiOutlinePlus } from "react-icons/ai";
import { useRef } from "react";
import { MdOutlineClose } from "react-icons/md";
import { reviewStyle } from "../../styles/style";
import { useImagelistStore, useAlertstore } from "../../stores/store";
import { Uploadimagetype } from "../../types/type";

export const Photoform = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { imageList, setImagelist } = useImagelistStore();
    const { alerText, setAlertext } = useAlertstore();
    const fileUploadclick = () => {
        if (imageList && imageList.length > 10) console.log("10개 넘었다 ");
        inputRef.current?.click();
    };

    const fileChangefunc = (chfile: React.ChangeEvent<HTMLInputElement>) => {
        console.log(`input func : ${alerText}`);
        const file = chfile.target.files ? chfile.target.files[0] : null;
        if (file && !file.type.startsWith("image/"))
            setAlertext("이미지 파일만 업로드 가능합니다.");
        if (file && file.size > 10 * 1024 * 1024)
            setAlertext("최대 10MB까지 업로드 가능합니다.");

        if (imageList.length > 10)
            setAlertext("최대 10개의 파일까지 업로드 가능합니다.");

        if (file) {
            console.log("4");
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagelist((prevImages: Uploadimagetype[]) => [
                    ...prevImages,
                    {
                        fileData: reader.result as string,
                        saveFileData: file,
                    },
                ]);
            };
            reader.readAsDataURL(file);
        }
    };

    const fileDeletefunc = (index: number) => {
        setImagelist(prevImagelist => {
            const updateImagelist = [...prevImagelist];
            updateImagelist.splice(index, 1);
            return updateImagelist;
        });
    };

    return (
        <div css={reviewStyle.reviewPhotodiv}>
            <div css={reviewStyle.reviewTextsubject}>포토 등록</div>
            <div css={reviewStyle.reviewPhotolist}>
                <>
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        ref={inputRef}
                        onChange={fileChangefunc}
                    />
                </>

                {Array(10)
                    .fill(0)
                    .map((_, index) => {
                        const src = imageList[index]?.fileData;
                        return src ? (
                            <div
                                css={reviewStyle.reviewPhotobefore}
                                key={src.toString()}
                            >
                                <button
                                    type="button"
                                    css={reviewStyle.reviewPhotodeleteBG}
                                    onClick={() => fileDeletefunc(index)}
                                >
                                    <MdOutlineClose
                                        css={reviewStyle.reviewDeletebutton}
                                    />
                                </button>
                                <img
                                    src={src}
                                    alt={`Preview ${index}`}
                                    css={reviewStyle.reviewPhotoafter}
                                />
                            </div>
                        ) : (
                            <button
                                type="button"
                                css={reviewStyle.reviewPhotobefore}
                                onClick={fileUploadclick}
                                key={index.toString()}
                            >
                                <AiOutlinePlus
                                    css={reviewStyle.reviewPhotoplus}
                                />
                            </button>
                        );
                    })}
            </div>
        </div>
    );
};
