import { css } from "@emotion/react";

export const headerStyle = {
    mainHeader: css`
        position: relative;
        height: 46vh;
        width: 100vw;
        margin-bottom: 8.7vh;
    `,
    memberLink: css`
        position: relative;
        float: right;
        padding: 0 16rem 0 0;
    `,
    linkFamily: css`
        position: relative;
        padding: 4.1rem 0 0 16rem;
    `,
    smallLogoDiv: css`
        position: relative;
    `,
    smallLogo: css`
        background-color: transparent;
        border: 0;
    `,
    link: css`
        font-size: 1rem;
        color: white;
        background-color: transparent;
        border: 0;
        &:hover {
            color: #fe8101;
        }
    `,
    bigLogoDiv: css`
        position: relative;
        display: block;
        padding: 14.3rem 0 0 0;
    `,
    service: css`
        position: relative;
        padding: 2.27rem 0 0 0;
    `,
    headerBgImg: css`
        position: absolute;
        background-size: cover;
        width: 100vw;
        background-repeat: no-repeat;
    `,
};

export const modalStyle = {
    modalBgColor: css`
        backdrop-filter: blur(3px);
        background-color: rgba(0, 0, 0, 0.4);
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    closeButton: css`
        background-color: transparent;
        border: 0;
        padding: 3.5rem 3.5rem 0 0;
        font-size: 2.2rem;
    `,
    modalWindow: css`
        background-color: white;
        display: block;
        position: relative;
        z-index: 2;
        border-radius: 1rem;
        text-align: right;
    `,
    modalForm: css`
        text-align: center;
        display: block;
        list-style: none;
        margin: 1.6rem 16.1rem 7.3rem 16.1rem; ;
    `,
    modalTitle: css`
        letter-spacing: -0.0002em;
        line-height: 3.6rem;
        font-family: "Inter";
        font-style: normal;
        font-weight: 70rem;
        font-size: 3rem;
        padding: 0 0 2.6rem 0;
    `,
    modalSubject: css`
        font-family: "Inter";
        font-style: normal;
        font-weight: 50rem;
        font-size: 1.4rem;
        line-height: 1.7rem;
        letter-spacing: -0.0002em;
        color: #54566f;
        padding: 0 0 3.6rem 0;
    `,
    modalInputForm: css`
        width: 45rem;
        height: 5rem;
        display: flex;
        margin-bottom: 3.8rem;
    `,
    modalInputIndex: css`
        width: 11rem;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        font-family: "Inter";
        font-style: normal;
        font-weight: 60rem;
        font-size: 1.4rem;
        line-height: 1.7rem;
    `,
    modalInput: (isValid: boolean) => css`
        border: ${isValid ? "none" : "1px solid #FF1F1F"};
        border-color: #ff1f1f;
        width: 34rem;
        height: 5rem;
        background: #f3f3f3;
        border-radius: 1.5rem;
        text-align: left;
    `,
    modalSubmitButton: (isValid: boolean) => css`
        width: 45rem;
        height: 5rem;
        background: ${isValid === true ? "#FE8101" : "#FFC080"};
        border-radius: 1.5rem;
        border: none;
        color: #ffffff;
        font-family: "Inter";
        font-style: normal;
        font-weight: 70rem;
        font-size: 1.6rem;
        line-height: 1.9rem;
        text-align: center;
    `,
    modalSubmitForm: css`
        padding: 2rem 0 2.8rem 0;
    `,
    modalError: css`
        margin-top: 0.5rem;
        color: red;
        text-align: left;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 1.7rem;
    `,
    modalNicknameInput: css`
        margin-right: 1rem;
        width: 25rem;
        height: 5rem;
        border: none;
        background: #f3f3f3;
        border-radius: 1.5rem;
        text-align: left;
    `,

    modalExistButton: (props: string) => css`
        width: 8rem;
        height: 4.8rem;
        color: ${props && props.length >= 3 ? "#FFFFFF" : "#fe8101"};
        background: ${props && props.length >= 3 ? "#FE8101" : "#ffffff"};
        border: 1px solid #fe8101;
        border-radius: 1.5rem;
    `,
};

export const bodyStyle = css`
    width: 160rem;
    margin: 0 auto 0 auto;
`;

export const travleStyle = {
    travleDiv: css`
        margin: 0 auto 10rem auto;
        position: relative;
        width: 160rem;
        height: 20rem;
    `,
    travleSubject: css`
        display: flex;
        justify-content: left;
        font-style: normal;
        font-weight: 700;
        font-size: 2rem;
        line-height: 2.4rem;
        color: #2d2d2d;
    `,
    travleForm: css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 160rem;
        height: 15.6rem;
        border-radius: 15px;
        box-shadow: 0px 2px 13px 4px rgba(0, 0, 0, 0.1);
        margin: 2.4rem auto 0 auto;
    `,
    inputTxt: css`
        border: none;
        border-bottom: 1px solid #dadada;
        &::placeholder {
            color: 989AAC;
            margin-left: 0;
        }
    `,
};

export const hotPlaceStyle = {
    totalDiv: css`
        width: 160rem;
        height: 71rem;
        display: flex;
    `,
    hotPlaceDiv: css`
        width: 81rem;
        height: 71rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        row-gap: 10px;
    `,
    hotPlaceSubject: css`
        margin: 0 0 2.4rem 0;
        font-family: "Inter";
        height: 2rem;
        font-style: normal;
        font-size: 2rem;
        line-height: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `,

    hotplaceShells: (props?: number) => css`
        margin-right: 2rem;
        width: 25rem;
        height: 34rem;
        transform: translateX(${props && props >= 0 && props * -1600}px);
        transition: "0.5s ease";
    `,
    hotPlaceImage: css`
        width: 25rem;
        height: 28.6rem;
    `,
    hotPlaceAdress: css`
        margin-top: 1rem;
        font-size: 1rem;
        color: #989aac;
    `,
    svg: css`
        font-size: 1rem;
        color: #fe8101;
    `,
    hotPlacePlaceName: css`
        margin-top: 0.8rem;
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 1.4rem;
    `,
    kakaoMap: css`
        width: 79rem;
        height: 66rem;
        flex: 1;
        border-radius: 15px;
    `,
    slideDiv: css`
        height: 36rem;
        margin: 5.8rem 0 0 0;
    `,
    slideButton: css`
        border: none;
        background-color: transparent;
        color: orange;
        width: 2.4rem;
        height: 2.4rem;
    `,
    totalShell: css`
        display: -webkit-box;
        /* flex-flow: row nowrap;
        white-space: nowrap; */
        align-items: center;
        overflow: hidden;
    `,
    totalPage: css`
        height: 0.3rem;
        width: 50rem;
        background-color: #d9d9d9;
        margin-right: 2.1rem;
    `,
    currentPage: (props: number) => css`
        background-color: #fe8101;
        height: 0.3rem;
        width: ${props === 0 ? "25rem" : "50rem"};
    `,
};

export const footer = {
    footerBgBox: css`
        margin-top: 7.5rem;
        background: #f3f3f3;
        height: 6.4rem;
        width: auto;
    `,
    footerDiv: css`
        display: flex;
        width: 160rem;
        height: 6.4rem;
        align-items: center;
        margin: 0 auto 0 auto;
        gap: 10rem;
    `,
    footerContent: css`
        font-size: 1.4rem;
        color: #54566f;
    `,
};

export const errorMsg = {
    errorDiv: css`
        height: 27rem;
        width: 51rem;
        box-shadow: 2.14005px 4.2801px 11.4136px rgba(0, 0, 0, 0.25);
        border-radius: 1rem;
    `,
    errorContentDiv: css`
        height: 21rem;
        width: auto;
        padding-top: 3.7rem;
    `,
    errorMsgDiv: css`
        height: 13rem;
        width: 29rem;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        font-size: 1.8rem;
    `,
    errorButton: css`
        height: 6rem;
        width: 51rem;
        border-top: 1.4267px solid #e4e4e4;
        border-bottom: none;
        border-left: none;
        border-right: none;
        color: #fe8101;
        align-content: center;
        background: #ffffff;
    `,
    Polygon: css`
        height: 7, 7rem;
        widows: 7.7rem;
        margin: 0 auto 1.9rem auto;
    `,
};
