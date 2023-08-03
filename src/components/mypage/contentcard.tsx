import { mypageStyle } from "../../styles/style";
import { GetTravlelisttype } from "../../types/type";

export const Contentcard = (props: GetTravlelisttype) => (

    <div>
        {props?.content.title}
    </div>
);