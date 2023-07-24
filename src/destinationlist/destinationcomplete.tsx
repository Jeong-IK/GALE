import { destinationComplete } from "../styles/style";
import { Destinationshell } from "./destinationShell";

export const Destinationcomplelte = () => (
    <div css={destinationComplete.destinationDiv}>
        <div css={destinationComplete.destinationSubject}>도착지 여행장소</div>
        <div css={destinationComplete.destinationSelectDiv}>
            <div css={destinationComplete.destinationSelectDiv}>
                <Destinationshell />
            </div>
            <div />
        </div>
    </div>
);
