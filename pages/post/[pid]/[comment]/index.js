import Header from "../../../../components/header";
import { useRouter } from "next/router";

const Comment = () => {
  const router = useRouter();

  const { pid, comment } = router.query;

  return (
    <>
      <Header />
      <p>Post: {pid}</p>
      <p>Comment: {comment}</p>
      <p>Query Obect: {JSON.stringify(router.query)}</p>
    </>
  );
};

export default Comment;
