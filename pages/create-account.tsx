import { Layout } from "@/app/components/Layout";
import { CreateAccount } from "@/features/create-account";

export default function CreateAccountPage() {
  return (
    <Layout>
      <CreateAccount mode="create" />
    </Layout>
  );
}
