import { css } from "@emotion/react";

export const MainHeader = css`
    position: relative;
    height: 46vh;
    width: 100vw;
    margin-bottom: 8.7vh;
`;

export const MemberLink = css`
    position: absolute;
`;

export const Link = css`
    font-size: 0.8rem;
    color: white;
    background-color: transparent;
    border: 0;
    &:hover {
        color: #fe8101;
    }
`;

export const ModalBgColor = css`
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
`;

export const ModalWindow = css`
    background-color: white;
    display: block;
    position: relative;
    z-index: 2;
    border-radius: 1rem;
    text-align: right;
`;

export const ModalForm = css`
    text-align: center;
    display: block;
    list-style: none;
`;

export const HeaderBgImg = css`
    background-size: cover;
    width: 100vw;
    background-repeat: no-repeat;
`;

export const TravleDiv = css`
    width: auto;
    height: 29.1vh;
`;

export const TravleSubject = css`
    margin-left: 8.33vw;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 24px;
    letter-spacing: -0.0002em;
    color: #2d2d2d;
`;

export const TravleForm = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 83.33vw;
    height: 22vh;
    border-radius: 15px;
    box-shadow: 0px 2px 13px 4px rgba(0, 0, 0, 0.1);
    margin: 2.75vh auto 0 auto;
`;

export const InputTxt = css`
    border: none;
    border-bottom: 1px solid #dadada;
    &::placeholder {
        color: 989AAC;
        margin-left: 0;
    }
`;

export const CardStyle = css`
    position: absolute;
    width: 250px;
    height: 339px;
`;

export const CardImage = css`
    position: absolute;
    width: 250px;
    height: 339px;
`;
