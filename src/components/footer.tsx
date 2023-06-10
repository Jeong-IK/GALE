import { footer } from "../styles/style";

export const Footer = () => (
    <div css={footer.footerBgBox}>
        <div css={footer.footerDiv}>
            <div css={footer.footerContent}>이용약관</div>
            <div css={footer.footerContent}>개인정보 취급 방침 및 쿠키정책</div>
            <div css={footer.footerContent}>쿠키 동의</div>
            <div css={footer.footerContent}>사이트 운영 방식</div>
            <div css={footer.footerContent}>CONTACT US</div>
        </div>
    </div>
);
