import Head from "next/head";

export interface MetaTagsProps {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  imgUrl?: string;
  viewport?: string;
}

export const SEOMetaTags = (props: MetaTagsProps) => {
  return (
    <Head>
      {props.title ? <title>{props.title}</title> : null}

      {props.canonical ? (
        <link rel="canonical" href={props.canonical} key="defaultCanonical" />
      ) : null}

      {props.description ? (
        <meta
          name="description"
          content={props.description}
          key="defaultDescription"
        />
      ) : null}

      {props.keywords ? (
        <meta name="keywords" content={props.keywords} key="defaultKeywords" />
      ) : null}

      {/* FACEBOOK META-TAGS */}
      <meta property="og:type" content="website" key="defaultWebsite" />
      <meta
        property="og:site_name"
        content="fixcoin.io"
        key="defaultSiteName"
      />

      {/* In case you want to use FB pixel you can put your FB app ID */}
      {/* <meta property="fb:app_id" content="" key="defaultAppId" /> */}
      {/* <meta property="fb:admins" content="" key="defaultFbAdmin" /> */}

      <meta property="og:title" key="defaultOgTitle" content={props.title} />

      {props.description ? (
        <meta
          property="og:description"
          key="defaultOgDescription"
          content={props.description}
        />
      ) : null}

      {props.imgUrl ? (
        <meta property="og:image" content={props.imgUrl} key="defaultOgImage" />
      ) : null}

      {props.canonical ? (
        <meta
          property="og:url"
          content={props.canonical}
          key="defaultOgCanonical"
        />
      ) : null}

      {/* TWITTER META-TAGS */}
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="defaultTwitterCard"
      />

      <meta
        name="twitter:title"
        content={props.title}
        key="defaultTwitterTitle"
      />

      {props.description ? (
        <meta
          name="twitter:description"
          content={props.description}
          key="defaultTwitterDescription"
        />
      ) : null}

      {props.imgUrl ? (
        <meta
          property="twitter:image"
          content={props.imgUrl}
          key="defaultTwitterImage"
        />
      ) : null}

      {props.viewport ? (
        <meta name="viewport" content={props.viewport} />
      ) : null}

      {/* <meta name="twitter:creator" content="" /> key="defaultTwitterCreator" */}
      {/* <meta name="twitter:site" content="@website-username"/> key="defaultTwitterUsername" */}

      {/* DEFAULT META-TAGS */}
      <meta name="author" content="" key="defaultAuthor" />
      <meta name="robots" content="all" key="defaultRobots" />
      <meta name="distribution" content="global" key="defaultDistribution" />

      {/* <meta name="google-site-verification" content=" " key="defaultGoogleVerification" /> */}

      {/* MICROSOFT */}
      {/* <meta name="msvalidate.01" content=""  key="defaultMicrosoftVerification" /> */}

      {/* Website */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            alternateName: "FixcoinApp",
            url: "https://fixcoin.io/",
          }),
        }}
      />
    </Head>
  );
};
