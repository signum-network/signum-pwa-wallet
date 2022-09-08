import { Layout } from "@/app/components/Layout";
import { ActivatedAccount } from "@/features/activated-account/ActivatedAccount";

export default function ActivatedAccountPage() {
  return (
    <Layout>
      <ActivatedAccount mode="create" />
    </Layout>
  );
}
