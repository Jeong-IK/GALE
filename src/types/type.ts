export type ModalOption = "logIn" | "signUp" | "date" | "alert" | null;

export type Reviewalertoption =
    | "이미지 파일만 업로드 가능합니다."
    | "최대 10MB까지 업로드 가능합니다."
    | "최대 10개의 파일까지 업로드 가능합니다."
    | "파일이 선택되지 않았습니다."
    | null;

export type Mypagecontenttype = "위시플레이스" | "여행일정 보기";

export interface Reviewalertstatus {
    alerText: Reviewalertoption;
    setAlertext: (context: Reviewalertoption) => void;
}

export interface Modalstatus {
    modalOption: ModalOption;
    setModaloption: (type: ModalOption) => void;
}

export interface ErrorMsgType {
    errorMsgType: string;
    setErrorMsgType: (message: string) => void;
}

export interface LoginstateType {
    loginState: boolean;
    setLoginState: (state: boolean) => void;
}

export interface SignupProps extends LoginProps {
    confirmpassword: string;
    nickname: string;
}

export interface LoginProps {
    email: string;
    password: string;
}

export interface ExistNicknameProps {
    nickname: string;
}

export interface LoginResponse {
    data: { accessToken: string; refreshToken: string; email: string };
}
export interface RefreshTokenProps {
    email: string;
    toeken: string;
}
export interface RefreshTokenResponse {
    message: string;
    Success: boolean;
}

export interface GeneralResponse {
    code: string;
    message: string;
}

export interface GeneralError extends Error {
    response: {
        status: number;
        data: GeneralResponse;
    };
}

export type ButtonStatusProps = {
    inputValue: string;
};

export interface ShellProps {
    cssType: number;
}

export interface SlidShellSubject {
    subject: string;
}

export interface StarValuetype {
    itemId: string;
    value: number;
}

export interface Contentform {
    content: string;
}
export type Uploadimagetype = {
    fileData: string;
    saveFileData: Blob;
};

export interface ReviewuploadProps {
    requestData: {
        board_category: number;
        board_number: number;
        writer: string;
        content: string;
        grade: number;
        service: number;
        price: number;
        congestion: number;
        accessibility: number;
    };
    multipartFileList: Uploadimagetype[];
}

export interface ImagelistStore {
    imageList: Uploadimagetype[];
    setImagelist: (
        listImage:
            | Uploadimagetype[]
            | ((prevImages: Uploadimagetype[]) => Uploadimagetype[])
    ) => void;
}

export interface Mypagecontentstore {
    contentType: Mypagecontenttype;
    setContenttype: (type: Mypagecontenttype) => void;
}
// 여행계획 작성 타입
export interface Travleplannerresponsetype {
    email: string;
    title: string;
    date_start: Date;
    date_end: Date;
    regdate: Date;
    listPlannerDetails: Listplannerdetailstype[];
}

export interface Listplannerdetailstype {
    select_board_category: number;
    select_board_number: number;
    startdate: Date;
}

// 여행계획 불러오기
export interface GetTravlelisttype {
        email: string;
        title: string;
        date_start: Date;
        date_end: Date;
        regdate: Date;
        idx: number;

}

export interface GetTravlelistresponse {
    code: number;
    data: GetTravlelisttype[];
    message: string;
}

export interface DeleteTrablelistProptype {
    planner_idx: number;
}
