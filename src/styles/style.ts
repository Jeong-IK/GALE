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
    modalInput: css`
        width: 34rem;
        height: 5rem;
        border: none;
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

export const travleStyle = {
    travleDiv: css`
        width: auto;
        height: 29.1vh;
    `,
    travleSubject: css`
        margin-left: 8.33vw;
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 1.3rem;
        line-height: 24px;
        letter-spacing: -0.0002em;
        color: #2d2d2d;
    `,
    travleForm: css`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83.33vw;
        height: 22vh;
        border-radius: 15px;
        box-shadow: 0px 2px 13px 4px rgba(0, 0, 0, 0.1);
        margin: 2.75vh auto 0 auto;
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

export const cardStyle = {
    cardStyle: css`
        position: absolute;
        width: 250px;
        height: 339px;
    `,
    cardImage: css`
        position: absolute;
        width: 250px;
        height: 339px;
    `,
};
