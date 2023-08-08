import {AiTwotoneEnvironment, AiTwotoneStar, AiTwotoneHeart} from "react-icons/ai";
// import { GetTravlelisttype } from "../../types/type";
import { mypageStyle } from "../../styles/style";

const  GetTravlelistdata = {
    address: "abced",
     title: "test",
     date_start: Date,
     date_end: Date,
     regdate: Date,
     idx: 5,
     rating:3,
     likeit:true,
}

// export const Contentcard = (props: GetTravlelisttype) => (

//     <div>
//         {props.title}
//     </div>
// );

export const Contentcard = () => (

   <div css={mypageStyle.mypageContentcard}>

        <div css={mypageStyle.mypageContentimg} />
            <div>
             <div css={mypageStyle.mypageContenttext.subtitle}>{GetTravlelistdata.title}</div>
             < AiTwotoneHeart css={mypageStyle.mypageContenttext.likeit(GetTravlelistdata.likeit)}/> 
             <div css={mypageStyle.mypageContenttext.address}><AiTwotoneEnvironment css={mypageStyle.mypageContenttext.addressIcon}/>{GetTravlelistdata.address}</div>
             {[1, 2, 3, 4, 5].map(value => (
                        <AiTwotoneStar
                            css={mypageStyle.mypageContenttext.rating(value <= GetTravlelistdata.rating)}

                        />
                    ))}
                   
            </div>

            
    </div>
);