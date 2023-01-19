import Script from "next/script";

interface Props {
  containerId: string;
}

export const GoogleTagManager: React.FC<Props> = (props) => (
  <Script
    dangerouslySetInnerHTML={{
      __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${props.containerId}');
      `,
    }}
    id="gtm"
    strategy="afterInteractive"
  />
);
