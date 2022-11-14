import React from "react";
import { Helmet } from "react-helmet";

export default function ReactHelmet({ titleName = "", canonical, description }) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="robots" content="noindex" />
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <title>QAT Project {titleName ? `| ${titleName}` : ""}</title>
      <link rel="icon" href="/favico.ico" />
      <meta name="description" content={description} />
      <meta property="og:locale" content="tr_TR" />
      <link rel="canonical" href={`https://www.qatproject.com/${canonical}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={titleName + " | QAT Project"} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://www.qatproject.com/" />
      <meta property="og:site_name" content="QAT Project" />
      <meta property="article:publisher" content="https://www.facebook.com/qatproject/" />
      <meta property="article:modified_time" content="2021-09-18T18:14:22+00:00" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@projectqat" />
      <meta name="twitter:label1" content="Tahmini okuma süresi" />
      <meta name="twitter:data1" content="6 dakika" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Helmet>
  );
}
