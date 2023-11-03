import { bodyStyle, destinationComplete } from "src/styles/style"
import { TravlePlan } from "../travleplan/travlePlan"
import { Destinationcomplelte } from "./destinationcomplete"

export const Body = () => (
    <div css={[destinationComplete.distinationBgcolor, bodyStyle]}>
                <TravlePlan />
                <Destinationcomplelte />
    </div>
);