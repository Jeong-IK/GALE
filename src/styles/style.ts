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
    `,
    link: css`
        font-size: 0.8rem;
        color: white;
        background-color: transparent;
        border: 0;
        &:hover {
            color: #fe8101;
        }
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
        margin: 7.3rem 16.1rem 7.3rem 16.1rem; ;
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
