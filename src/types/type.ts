import { Moment } from "moment";

// 로그인, 회원가입, 알림창과 같은 모달창 타입
export type ModalOption = "logIn" | "signUp" | "date" | "alert" | null;

// 리뷰 모달창에서 출력되는 문구
export type Reviewalertoption =
    | "이미지 파일만 업로드 가능합니다."
    | "최대 10MB까지 업로드 가능합니다."
    | "최대 10개의 파일까지 업로드 가능합니다."
    | "파일이 선택되지 않았습니다."
    | null;

// 마이페이지에서 출력되는 리스트 타입
export type Mypagecontenttype = "위시플레이스" | "여행일정 보기";

// 리뷰 모달창을 관리하는 store타입
export interface Reviewalertstatus {
    alerText: Reviewalertoption;
    setAlertext: (context: Reviewalertoption) => void;
}

// 여행기간을 관리하는 store타입
export interface DaterangeType {
    startDate: string | null;
    endDate: string | null;
    draftStartDate: Moment | null;
    draftEndDate: Moment | null;
    focusedInput: "startDate" | "endDate" | null;
    setFocusedInput: (input: "startDate" | "endDate" | null) => void;
    setDate: (startDate: string | null, endDate: string | null) => void;
    setDraftDate: (startDate: Moment | null, endDate: Moment | null) => void;
}

// 여행 상세 계획 타입
export interface TravleplandetailsType {
    select_board_category: number | null;
    // (<- board 게시물의 카테고리 값)
    select_board_number: number | null;
    // (<- board 게시물의 idx값)
    startdate: string | null;
    // (값 형태[DATE]구조 : 2023-06-19)
}

// 여행 계획 저장 요청 타입
export interface TravleplanType {
    planner: {
        email: string | null;
        title: string | null;
        date_start: string | null;
        // (값 형태[DATE]구조 : 2023-06-19)
        date_end: string | null;
        // (값 형태[DATE]구조 : 2023-06-24)
        regdate: string | null;
        // (값 형태[LocalDateTime]구조 : 2023-06-19T00:00:00Z)
    };

    listPlannerDetails: TravleplandetailsType[];
}

/* /GetListRisingCategoryList API 관련 타입 */
// index 페이지 각 카테고리 별 각 게시글 타입
export interface CategoryplaceresponseType {
    latitude: number;
    longitude: number;
    board_category_number: string;
    // 이미지가 존재하지않으면 String으로 null 반환
    firstImageUrl: string;
    locationname: string;
    board_number: number;
    locationaddress: string;
    // 2023-08-29T00:05:06
    regdate: string;
    userid: string;
    view_count: number;
}

// 카테고리 별 게시글 반환 타입
export interface CategoryrisingresponseType {
    list: CategoryplaceresponseType[];
}

// GetRisingCategoryList API request props 타입
export interface CategoryrisingrequestType {
    board_Category_Number: number;
    // (0 = rising 높은순의 1번째 6개의 리스트 가져오기 1 = 높은순의 2번째 6개 리스트 가져오기)
    currentPage: number;
}

// 지도에 핑을 찍기위한 경도, 위도
export interface ViewlocationType {
    lat: number;
    lng: number;
}

// 지도에 핑을 찍기위한 경도, 위도를 관리하는 store 타입
export interface ViewlocationstoreType extends ViewlocationType {
    setLocation: ({ lat, lng }: ViewlocationType) => void;
}

/* /Read api관련 타입 */
// 게시글 데이터 읽어오는 ReadboardAPI response타입
export interface ReadplacecontentresponseType {
    board_category: number;
    latitue: number;
    locationaddress: string;
    accessibility: number;
    userid: string;
    locationname: string;
    board_number: number;
    reviewCount: number;
    service: number;
    price: number;
    grade: number;
    regdate: string;
    allAverage: number;
    congestion: number;
    longitude: number;
    imageArrayUrl: string;
    satisfaction: number;
}

export interface GetplacereivewrequestType {
    board_Number: number;
    sortType: "new" | "averge";
    orderType: "asc" | "desc";
    currentPage: number;
}

export interface GetplacereviewresponseType {
    average: number;
    board_number: number;
    userProfileImageUrl: string;
    regdate: string;
    userNickname: string;
    board_review_number: number;
    userid: string;
    imageArrayUrl: string;
    content: string;
}

export interface GetdetailreviewresponseType extends GetplacereviewresponseType {
    accessibility:number;
    board_idx: number;
    satisfaction:number;
    board_number:number;
    service:number;
    price:number;
    congestion:number
}

export interface ReadplacerequestType {
    board_idx: number;
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
    userid: string;
    password: string;
}

export interface TravleplanProps {
    depature: string;
    arrival: string;
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
    accessToken: string;
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
    title: string;
    address: string;
    imageUrl: string;
    latitue: number;
    longitude: number;
    board_number: number;
}

export type SlidepageType = 0 | 1;

export interface SlidshellCategory {
    subject: string;
    categoryCode: number;
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

// 여행계획 리스트 개별 타입
interface Travleelementstype {
    average: number;
    date_start: Date;
	destination_address : string;
	board_number: number;
    planner_number: number;
    regdate: Date;
    date_end: Date;
	locationaddress : string;
    userid: string;
	imageArrayUrl : string[];
}
// /planner/list api 반환타입
export interface Gettravlearrayresponsetype {
    list: Travleelementstype[];
}

// /user/profile api 반환타입
export interface Getprofileresponsetype {
    nickname: string;
    profileImageUrl: string;
}

// /user/profile api 요청 타입
export interface Editprofilerequesttype {
    nickname : string,
	password : string,
	newPassword : string,
	newPasswordConfirmation : string,
}

// 여행 계획 삭제하기
export interface DeleteTrablelistProptype {
    planner_idx: number;
}

export interface PagenumberstoreType {
    page: number;
    setPage: (page: number) => void;
}
// 상세보기 페이지 신고, 더보기 모달
export type DetailModalType = "report" | "moreshow" | null;

export interface DetailpagemodalstoreType {
    type: DetailModalType;
    setType: (selecttype: DetailModalType) => void;
    board_review_Number: number | null;
    setBoard_review_number: (board_review_number:number) => void;
}

export interface ReportreviewrequestType {
    board_review_number: number;
    report_category: number;
    content: string;
}
// 지역 선택 모달
export interface RegionselectorstoreType {
    isopen : boolean;
    selectedregion : string;
    selectedsubregion : string;
    setIsopen : (state: boolean) => void;
    setSelectedregion : (region:string) => void;
    setSelectedsubregion : (subregion : string) => void;
}

interface RegiondataType {
    [key: string]: string[];
}

export const Regiondata : RegiondataType = {
    "서울" : ["서울 전체", "강북구", "광진구", "노원구", "서초구", "송파구", "용산구", "중구", "강남구", "강서구", "구로구", "도봉구", "성동구", "양천구", "은평구", "중량구", "강동구", "관악구", "금천구", "동대문구", "성북구", "영등포구", "종로구"],
    "경기" : [
        "경기도 전체", "수원시", "성남시", "의정부시", "안양시", "부천시", "광명시", "평택시", "동두천시", 
        "안산시", "고양시", "과천시", "구리시", "남양주시", "오산시", "시흥시", "군포시", 
        "의왕시", "하남시", "용인시", "파주시", "이천시", "안성시", "김포시", "화성시", 
        "광주시", "양주시", "포천시", "여주시", "연천군", "가평군", "양평군"
      ]
}

export interface MypagemodalType {
    isopen : boolean;
    setIsopen: (state: boolean) => void;
}

export interface RegioncontetType {
    firstImageUrl: string[];
    locationname: string;
    board_number:number;
    locationaddress: string;
    latitude: number;
    allAverage: number;
    longitude: number;
}
export interface RegionlistresponseType{
    data:RegioncontetType[];
}