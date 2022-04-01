import { useRouter } from "next/router";
import Header from "../../../../components/header";

const CatchAll = () => {
  const router = useRouter();
  const slug = router.query.slug || [];

  return (
    <>
      <Header />
      <p>Slug: {slug.join(", ")}</p>
      <p>Query: {JSON.stringify(router.query)}</p>
    </>
  );
};

export default CatchAll;
