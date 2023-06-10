import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export const Document = () => (
    <Html>
        <Head />
        <body>
            <Main />
            <NextScript />
            <Script
                src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_KEY}&libraries=services,clusterer&autoload=false`}
                strategy="beforeInteractive"
            />
        </body>
    </Html>
);

export default Document;
