export interface Modalstatus {
    //  0 : Modal Close, 1 : Login Modal, 2: Signup Modal
    Modaloption: 0 | 1 | 2;
    setModaloption: (type: Modalstatus["Modaloption"]) => void;
}
