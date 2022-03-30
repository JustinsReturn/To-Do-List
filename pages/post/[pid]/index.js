import { useRouter } from "next/router";
import Header from "../../../components/header";

// Dynamic Routing: In Next.js, by adding brackets to a page "[pid]" you create a dynamic route

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <Header />
      <p>Post: {pid}</p>
      <p>Query Obect: {JSON.stringify(router.query)}</p>
    </>
  );
};

export default Post;
