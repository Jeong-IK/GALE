import { css } from "@emotion/react";

export const Link = css`
    font-size: 1.7rem;
    color: white;
    background-color: transparent;
    border: 0;
    &:hover {
        color: #fe8101;
    }
`;

export const Modalbgcolor = css`
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

export const Modalwindow = css`
    background-color: white;
    display: block;
    position: relative;
    z-index: 2;
    border-radius: 1rem;
    text-align: right;
`;

export const Modalform = css`
    text-align: center;
    display: block;
    list-style: none;
`;

export const Headerbgimg = css`
    background-size: cover;
    width: 100vw;
    background-repeat: no-repeat;
`;
export const Mainheader = css`
    position: relative;
    height: 46vh;
    width: 100vw;
`;
export const Memberlink = css`
    position: absolute;
    float: right;
`;

export const Formtable = css`
    border: 0px;
`;
