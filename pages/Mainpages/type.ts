// 0= close 1 = Login
export type Modaloption = 0 | 1 | 2;

export interface Modalstatus {
    modalOption: Modaloption;
    setModaloption: (type: Modaloption) => void;
}

export interface Datacheck {
    email: string;
    pwd: boolean;
    confirmPwd: boolean;
    nickName: boolean;
}
