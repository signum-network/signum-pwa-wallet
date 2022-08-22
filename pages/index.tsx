import { Layout } from "@/app/components/Layout";
import { Home } from "@/features/home";
import { SEOMetaTags } from "@/app/components/SEOMetaTags";
import { Status } from "@/bff/types/status";
import { BackendForFrontendService } from "@/bff/BackendForFrontendService";
import { GetServerSideProps, NextPage } from "next";
import useSWR, { SWRConfig } from "swr";

interface Props {
  url: string;
}

const HomePage: NextPage<Props> = ({ url }) => {
  const { data } = useSWR(url);

  return (
    <Layout>
      {data && (
        <SEOMetaTags
          title={data.name + " • FixcoinApp"}
          description={data.description || null}
          // add here an image for SEO
          // imgUrl={some image url}
          keywords={`Fixcoin, Payback, Fidelity, Tokens, Blockchain`}
        />
      )}
      <Home status={data} />
    </Layout>
  );
};

export default function Page({ fallback }: { fallback: any }) {
  return (
    <SWRConfig value={{ fallback }}>
      <HomePage url={fallback.fetchingUrl} />
    </SWRConfig>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryURL = "status";
  const service = new BackendForFrontendService(ctx.req);
  const data = await service.get<Status>(queryURL);

  return {
    notFound: !data,
    props: {
      fallback: {
        [queryURL]: data,
        fetchingUrl: queryURL,
      },
    },
  };
};
