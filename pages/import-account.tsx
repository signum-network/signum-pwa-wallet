import { Layout } from "@/app/components/Layout";
import { CreateAccount } from "@/features/create-account";

export default function ImportAccountPage() {
  return (
    <Layout>
      <CreateAccount mode="import" />
    </Layout>
  );
}
