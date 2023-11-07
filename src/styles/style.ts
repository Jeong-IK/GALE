import { css } from "@emotion/react";

export const headerStyle = {
    mainHeader: css`
        // position: relative;
        height: 58rem;
        width: 160rem;
        margin: 0 0 8.7rem 0;
        // display: ;
        justify-content: center;
    `,
    memberLink: css`
        position: relative;
        float: right;
    `,
    totallinkDiv: css`
        width: 160rem;
        padding: 0 0 0 18.3rem;
    `,
    linkFamily: css`
        position: relative;
        width: 160rem;
        margin: 0 auto 4rem auto;
        padding: 4rem 0 0 0; 
        display: flex;
        align-items: center;
        justify-content: space-between;
    `,
    smallLogoDiv: css`
        position: relative;
    `,
    smallLogo: css`
        background-color: transparent;
        border: 0;
    `,
    link: (isIndex: boolean) => css`
        font-size: 1rem;
        color: ${isIndex ? "white" : "black"};
        background-color: transparent;
        border: 0;
        &:hover {
            color: #fe8101;
        }
    `,
    bigLogoDiv: css`
        width: 160rem;
        margin: 0 auto 0 auto;
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
        width: 100%;
        z-index: -1;
        background-repeat: no-repeat;
    `,
};

export const modalStyle = {
    modalBgColor: css`
        backdrop-filter: blur(3px);
        background-color: rgba(0, 0, 0, 0.4);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
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
    margin-bottom: 7.5rem;
`;

export const travleStyle = {
    travleDiv: css`
        margin: 9.7rem auto 10rem auto;
        position: relative;
        width: 160rem;
        height: 20rem;
        z-index:1;
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
        background-color: #ffffff;
        justify-content: center;
        align-items: center;
        width: 160rem;
        height: 15.6rem;
        border-radius: 15px;
        box-shadow: 0px 2px 13px 4px rgba(0, 0, 0, 0.1);
        margin: 2.4rem auto 0 auto;
        
    `,
    form: {
        div: css`
            border: none;
            border-bottom: 1px solid #dadada;
            width: 36.5rem;
            display: inline-flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 3.7rem 0 3.7rem;
        `,
        input: (selectedsubregion: string) => css`
            border: none;
            font-family: Inter;
            font-size: 2rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            margin-bottom: 1.8rem;
            color: ${selectedsubregion ? "#2D2D2D" : "#989AAC"};
        `,
        iputemoge : css`
            width: 24px;
            height: 24px;
            color: #989AAC;
        `,
        button: css`
            width: 21.8rem;
            height: 6.2rem;
            border-radius: 1.2rem;
            background: #fe8101;
            color: #fff;
            font-family: Inter;
            font-size: 2rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            border: none;
        `,
    },
    destinationComplete: {
        kakaomap: css`
            width: 101rem;
            height: 81rem;
            border-radius: 15px;
            margin: 0 5.7rem 0 0;
        `,
        subject: css`
            color: #2d2d2d;
            font-family: Inter;
            font-size: 2.6rem;
            font-style: normal;
            font-weight: 700;
            line-height: 2.4rem;
        `,
        div: css`
            width: 160rem;
            height: auto;
            margin: 0 auto 0 auto;
            
        `,
        listDiv: css`
            width: 53.3rem;
            height: 81rem;
            border-radius: 15px;
            background: #fff;
            box-shadow: 0px 2px 13px 4px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            align-items: center;
        `,
        travlePlace: css`
            padding: 3rem 0 0 0;
            display: flex;
            margin: 0 0 7.5rem 0;
            z-index:-1;
        `,
        travleDate: css`
            border-radius: 15px 15px 0px 0px;
            background: #f3f3f3;
            width: 53.3rem;
            height: 10.7rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8.7rem;
            color: #54566f;
            font-family: Inter;
            font-size: 1.8rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        `,
        travleButton: css`
            border-radius: 9px;
            background: #fe8101;
            display: flex;
            width: 461px;
            height: 54px;
            padding: 14px 38px;
            justify-content: center;
            align-items: center;
            border: none;
            color: white;
            margin-top: 1rem;
        `,
    },
    calendar: {
        containerStyle: css`
            display: flex;
            justify-content: space-around;
            width: 100%;
        `,
        selectdateStyle: css`
            display: flex;
            border-radius: 0px 0px 15px 15px;
            background: #f3f3f3;
        `,

        sundayStyle: css`
            color: red;
        `,
    },
    RegionSelector: {
        div: css`
        margin-top: 1rem;
        width: 63rem;
        height: auto;
        border-radius: 15px;
        background: #FFF;
        box-shadow: 0px 2px 13px 4px rgba(0, 0, 0, 0.10);
        border:none;
        padding: 5rem;
        color: var(--main, #2D2D2D);
        font-family: "굴림";
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        `,
        regionlist: css`
        flex-basis: 15rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        `,
        regioncontent: (isClicked:boolean) => css`
        width:15rem;
        height:3.5rem;
        display: flex;
        align-items: center; 
        padding: 0 1.5rem; 
        color: var(--main, #2D2D2D);
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: ${isClicked ? "700" : "500"};
        line-height: normal;
        color: ${isClicked ? "var(--main2, #FE8101)" : "black"};
        background-color:${isClicked ? "#FFEEDC" : "white"};
        svg {
            color: ${isClicked ? "var(--main2, #FE8101)" : "white"};
          }
        justify-content: space-between;
        `,
        subregionlist: css`
        width:32rem;
        display: grid;
        grid-template-columns: repeat(3, 6.6fr);
        gap: 1.5rem;
        color: var(--main, #2D2D2D);
        margin: 0.5rem 0 0 6rem;
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        `,
        subregioncontent: (isClicked : boolean) => css`

        color: ${isClicked ? "var(--main2, #FE8101)" : "black"};
        svg {
            margin 0 0.5rem 0 0;
            width:1.4rem;
            color: ${isClicked ? "#FE8101" : "white"};
          } 
            

        `,
    }
};

export const customDatepickerStyle = css`
    .DateRangePicker_picker {
        z-index: 9999;
    }

    .CalendarDay__selected,
    .CalendarDay__selected:active {
        border: none;
        border-radius: 9px;
        background: #fe8101;
        color: #fff;
        font-family: Inter;
        font-size: 2rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }

    .CalendarDay__selected_span {
        background-color: #f3f3f3;
        border: none;
        color: black;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    .CalendarDay__hovered_span {
        background: #ffc080;
        color: black;
        border: none;
    }

    .DateRangePickerInput {
        border: none;
    }

    .DateRangePickerInput_arrow_svg {
        display: none;
    }

    .DateRangePickerInput_arrow {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }

    .DateRangePickerInput_arrow::after {
        content: "~";
        display: none;
    }

    .CalendarDay__day--selected.CalendarDay__day--sunday {
        color: red;
    }
`;

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
        border-radius: 15px;
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
        border-radius: 15px;
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
        z-index:-1;
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

export const destinationComplete = {
    distinationBgcolor: css`
        
        padding-top: 5.8rem;
    `,
    destinationDiv: css`
        width: 160rem;
        height: auto;
        margin: 0 auto 0 auto;
    `,
    destinationSubject: css`
        font-family: "Inter";
        font-style: normal;
        font-weight: 70rem;
        font-size: 2rem;
        margin-bottom: 1.8rem;
    `,
    destinationSelectDiv: css`
        display: flex;
        width: 97.5rem;
        height: auto;
    `,
    destinationShell: css`
        width: 97.5rem;
        height: 14rem;
        background: #ffffff;
        box-shadow: 0px 2px 13px 4px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
        &:hover {
            border: 1.5px solid #fe8101;
        }
    `,
};

export const reviewStyle = {
    reviewTotalDiv: css`
        width: auto;
        height: 224.2rem;
        background-color: #ffffff;
        padding: 5.9rem 0 10.7rem 0;
    `,
    reviewform: css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
    reviewPlaceName: css`
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 6.4rem;
    `,
    reviewAdress: css`
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 1.9rem;
        color: #989aac;
        margin: 1.7rem 0 0 0;
    `,
    reviewSubjectBorder: css`
        width: 1600px;
        height: 3px;
        background: #54566f;
        margin: 4.2rem 0 0 0;
    `,
    reviewSurvey: css`
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 3.2rem;
        line-height: 3.9rem;
        margin: 6rem 0 0 0;
    `,
    reviewEffect: css`
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 2.9rem;
        color: #9c9c9c;
        margin: 3rem 0 0 0;
    `,
    reviewTotalform: css`
        width: 64rem;
        height: 78rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 2.6rem 0 5.3rem 0;
    `,
    reviewEachform: css`
        width: 63.2rem;
        height: 10.8rem;
        display: flex;
        align-items: center;
    `,
    reviewRatingsubject: css`
        width: 15.8rem;
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 3.2rem;
        line-height: 3.9rem;
        color: #54566f;
    `,
    reviewExplain: css`
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 1.6rem;
        line-height: 1.9rem;
        color: #989aac;
        margin: 1.45rem 0 0 0;
    `,
    reviewStarform: css`
        //display: flex;
        gap: 2rem;
    `,
    reviewStar: (checked: boolean) => css`
        width: 7.775rem;
        height: 7.425rem;
        color: ${checked ? "#FE8101" : "#DADADA"};
    `,
    reviewStarsurvey: css`
        width: 160rem;
        height: 2px;
        background: #e4e4e4;
    `,
    reviewTextdiv: css`
        width: 160rem;
        height: 34.6rem;
        margin: 6rem 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.8rem;
    `,
    reviewTextsubject: css`
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 4rem;
    `,
    reviewTextinputdiv: css`
        width: 160rem;
        height: 26rem;
        background: #ffffff;
        border: 1px solid #acacac;
        border-radius: 15px;
        padding: 3rem 3rem 3rem 3rem;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    `,
    reviewTextinput: css`
        width: 100%;
        height: 17.8rem;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 1.8rem;
        line-height: 22px;
        resize: none;
        border: none;
        outline: none;
        ::placeholder {
            color: #acacac;
        }
    `,
    reviewTextcnt: css`
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 22px;
        color: #828282;
    `,
    reviewTextnowcnt: css`
        color: #fe8101;
    `,
    reviewPhotodiv: css`
        width: 160rem;
        height: 23.6rem;
        margin: 6rem 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    `,
    reviewPhotolist: css`
        width: auto;
        height: 15rem;
        display: flex;
        margin: 3.8rem 0 0 0;
        gap: 1.1rem;
    `,
    reviewNeededdiv: css`
        width: 160rem;
        height: 5rem;
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        align-items: flex-start;
        padding: 3.6rem 0 0 0;
    `,
    reviewNeedlist: css`
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        color: #2d2d2d;
        display: flex;
    `,
    reviewButtondiv: css`
        width: 124.8rem;
        height: 11rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        margin: 8.2rem 0 6.4rem 0;
    `,
    reviewCanclebutton: css`
        width: 61.4rem;
        height: 11rem;
        background: #ffffff;
        border: 1px solid #a5a5a5;
        border-radius: 12px;
        color: #a5a5a5;
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 3.2rem;
    `,
    reviewPhotobefore: css`
        width: 15rem;
        height: 15rem;
        border-radius: 5px;
        background: #f3f3f3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
        position: relative;
    `,
    reviewPhotoafter: css`
        width: 15rem;
        height: 15rem;
        border-radius: 5px;
    `,
    reviewPhotodeleteBG: css`
        width: 2.8rem;
        height: 2.8rem;
        border: none;
        background-color: #00000080;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        position: absolute;
        top: 0px;
        right: 0px;
    `,
    reviewDeletebutton: css`
        width: 2.4rem;
        height: 2.4rem;
        color: white;
    `,
    reviewPhotoplus: css`
        width: 6rem;
        height: 6rem;
        color: #c9c9c9;
    `,
    reviewSubmitbutton: (isValid: boolean) => css`
        width: 61.4rem;
        height: 11rem;
        background: ${isValid ? "rgba(254, 129, 1, 0.5)" : "#FE8101"};
        border-radius: 12px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 3.2rem;
        line-height: 3.9rem;
        color: #ffffff;
        border: none;
    `,
    reviewAlertdiv: css`
        z-index: 2;
        border-radius: 10px;
        background: #fff;
        box-shadow: 2.140052318572998px 4.280104637145996px 11.413612365722656px
            0px rgba(0, 0, 0, 0.25);
        width: 50.7rem;
        height: 16.8rem;
        position: relative;
    `,
    reviewAlertcontext: css`
        height: 11.2rem;
        color: #2d2d2d;
        font-size: 1.8rem;
        font-family: Inter;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    reviewAlertbutton: css`
        height: 5.6rem;
        width: 50.7rem;
        background: #fff;
        border-top: 1.5px solid #e4e4e4;
        border-bottom: none;
        border-left: none;
        border-right: none;
        color: #fe8101;
        font-size: 1.8rem;
        font-family: Inter;
        font-style: normal;
        font-weight: 700;
        border-radius: 0 0 1rem 1rem;
    `,
};

export const mypageStyle = {
    headerDiv: css`
        height: auto;
        width: auto;
        padding 0 0 0 16rem;
    `,
    headerBgImg: css`
        position: absolute;
        background-size: cover;
        width: auto;
        height: 28rem;
        overflow: hidden;
        z-index: -1;
    `,
    bodyDiv: css`
        width: 160rem;
        height: fit-content;
        padding-top: 29rem;
        margin: 0 auto 0 auto;
        display: flex;
        flex-direction: column;
        padding-bottom: 7.5rem;
    `,
    selectContentDiv: css`
        display: flex;
    `,
    contentTypeButton: css`
        color: #b1b2c0;
        position: relative;
        font-family: Inter;
        font-size: 2.8rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        padding-bottom: 1.8rem;
        margin-right: 4.8rem;
        background-color: transparent;
        border: none;
        &:hover {
            color: #fe8101;
            font-family: Inter;
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            box-shadow: 0px 4px 0px 0px #fe8101;
        }
    `,
    contentDiv: css`
        padding-top: 5.2rem;
        display: flex;
    `,
    mypageBorder: css`
        width: 160rem;
        height: 1px;
        background: #eaeaea;
        position: absolute;
    `,
    contentList: css`
        width: 53.3rem;
        height: 81rem;
        border-radius: 15px;
        background: #fff;
        box-shadow: 0px 2px 13px 4px rgba(0, 0, 0, 0.1);
    `,
    mypageContentcard: css`
        width: 100%;
        height: 13.6rem;
        border-bottom: 1px solid #eaeaea;
        padding: 2.7rem 4.5rem 2.7rem 2.7rem;
        display: flex;
    `,

    mypageContentimg: css`
        width: 8.2rem;
        height: 8.2rem;
        border-radius: 6px;
        margin-right: 1.7rem;
    `,
    mypageContenttext: {
        subtitle: css`
            color: #54566f;
            font-family: Inter;
            font-size: 17px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -0.003px;
            margin-bottom: 1rem;
        `,
        addressIcon: css`
            color: #fe8101;
        `,
        address: css`
            color: #989aac;
            font-family: Inter;
            font-size: 15px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            margin-bottom: 1rem;
        `,
        rating: (checked: boolean) => css`
            width: 1.6rem;
            height: 1.6rem;
            color: ${checked ? "#FE8101" : "#DADADA"};
        `,
        likeit: (checked: boolean) => css`
            top: 0px;
            right: 0px;
            width: 1.6rem;
            height: 1.6rem;
            color: ${checked ? " #FF0000" : " #989AAC"};
        `,
    },
    profile: {
        profileContainerStyle: css`
            position: absolute;
            top: 100px;
            left: 161px;
            top:0%;
        `,

        profileImg: css`
            width: 138px;
            height: 138px;
            border-radius: 69px;
            object-fit: cover;
            position: relative;
        `,
        editbutton: css`
            width: 3.8rem;
            height: 3.8rem;
            border-radius: 1.9rem;
            border: none;
            font-size: 2.4rem;
            position: absolute;
            top: 75%;
            left: 58%;
        `,
        nickname: css`
            margin: 0 0 0 1.6rem;
            align-items: center;
            display: flex;
            color: #FFF;
            font-family: Inter;
            font-size: 2.8rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -0.006px;`
    },
    Editprofileform: {
        title: css`
            color: var(--main, #2D2D2D);
            font-family: Inter;
            font-size: 28px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
        `,
        line: css`
            width: 52.5rem;
            height: 1px;
            background-color: black;
            stroke-width: 2px;
            stroke: var(--main, #2D2D2D);
            margin: 2rem 0 2.5rem 0;
        `,
        profileImage: css`
            width:14rem;
            height:14rem;
            border-radius: 7rem;
            
        `,
        container: css`
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        `,
        label: css`
            width: 100px;
        `,
        input: css`
            margin-left: 10px;
        `,
        text: css`
        
        `

    },
    kakaoMap: css`
        width: 101rem;
        height: 81rem;
        border-radius: 15px;
        background: url(<path-to-image>), lightgray 50% / cover no-repeat;
        margin-left: 5.7rem;
    `,
    listSubtitle: css`
        height: 8.4rem;
        width: 53.3rem;
        border-bottom: 1px solid #eaeaea;
        display: flex;
        align-items: center;
        padding-left: 2.4rem;
        color: #2d2d2d;
        font-family: Inter;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.004px;
    `,
};

export const placeinfoStyle = {
    bodydiv: css`
        margin: 0 auto 0 auto;
        width: 160rem;
        background: #fbfbfb;
    `,
    placedata: {
        totalDiv: css`
            height: 52rem;
            padding-top: 5.8rem;
            display: flex;
        `,
        textinfoDiv: css`
            width: 80rem;
        `,
        imageinfoDiv: css`
            width: 81.5rem;
        `,
        image: css`
            border-radius: 15px;
            box-shadow: 1px 2px 13px 4px rgba(0, 0, 0, 0.15);
            height: 47rem;
        `,
        title: css`
            font-family: Inter;
            font-size: 44px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            letter-spacing: -0.009px;
            margin-bottom: 2.4rem;
            display: flex;
            width: 75.5rem;
            justify-content: space-between;
        `,
        reviewButton: css`
            border-radius: 70px;
            border: 1px solid var(--main2, #fe8101);
            background: #fff;
            color: var(--main2, #fe8101);
            font-family: Inter;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            width: 14.5rem;
            height: 6rem;
        `,
        address: css`
            color: #989aac;
            font-family: Inter;
            font-size: 2.8rem;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: -0.006px;
        `,
        stargradeDiv: css`
            padding-top: 5rem;
        `,
    },
    stargrade: {
        reviewTitle: (name: string) => css`
            color: #54566f;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            letter-spacing: -0.003px;
            padding-right: ${name.length === 4 ||
            name.length === 5 ||
            name.length === 7
                ? "3rem"
                : "1.5rem"};
        `,
        reviewStar: (checked: boolean) => css`
            width: 3.3rem;
            height: 3.3rem;
            color: ${checked ? "#FE8101" : "#DADADA"};
        `,
        reviewEachform: css`
            width: 28rem;
            height: 3.5;
            display: flex;
            align-items: center;
            justify-content: left;
            padding: 0 0 3rem 0;
        `,
        reviewcnt: css`
            color: #989aac;
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -0.003px;
        `,
    },
    reviewdata: {
        totalDiv: css`
            height: 125rem;
            padding-top: 11.7rem;
        `,
        sortBy: css`
            color: #54566f;
            font-family: Inter;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: -0.003px;
        `,
        startLine: css`
            height: 0.5rem;
            background: #eaeaea;
            margin: 2rem 0 3rem 0;
        `,
        reviewCard: css`
            height: 18.6rem;
            display: flex;
        `,
        reviewImage: css`
            border-radius: 15px;
        `,
        textDiv: css`
            height: 18.6rem;
            width: 136rem;
        `,
        profileDiv: css`
            width: 136rem;
            height: 4.3rem;
            display: flex;
            padding-left: 2.4rem;
        `,
        profile: css`
            border-radius: 4.3rem;
            box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 0.25);
        `,
        nickname: css`
            //닉네임 폰트
            width: 136rem;
            margin: 0 0 0 0.8rem;
            color: #989aac;
            font-family: Inter;
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -0.002px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        `,
        reportButton: css`
            //신고하기 버튼
            height: 1.7rem;
            border: none;
            background-color: transparent;
            color: #989aac;
            font-family: Inter;
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -0.002px;
        `,
        reviewContent: css`
            margin: 0.8rem 0 0 7.22rem;
            width: 131rem;
            height: 12rem;
            // 폰트
            color: var(--main, #2d2d2d);
            font-family: Inter;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: -0.003px;
        `,
        writeDate: css`
            margin: 0 0 0 2.4rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            //폰트
            color: #acacac;
            font-family: Inter;
            font-size: 10px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        `,
        moreButton: css`
            background-color: transparent;
            border: none;
            color: #54566f;
            font-family: Inter;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: -0.003px;
            text-decoration-line: underline;
        `,
        reviewcardendLine: css`
            width: 160rem;
            height: 1px;
            margin: 2.5rem 0 0 0;
            stroke-width: 1px;
            background-color: #eaeaea;
        `,
    },
    modalStyle: {
        modalWindow: css`
            background-color: white;
            position: relative;
            z-index: 2;
            border-radius: 1rem;
        `,
        modalForm: css`
            text-align: center;
            display: block;
            margin: 4rem;
        `,
    },
};
