import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cleanRecord } from "../store/postSlice";
import Loading from "../components/Loading";
import usePostDetails from "../hooks/use-post-details";

const Details = () => {
  const dispatch = useDispatch();

  const { loading, error, record } = usePostDetails();

  useEffect(() => {
    return () => {
      dispatch(cleanRecord());
    };
  }, [dispatch]);

  return (
    <>
      <Loading loading={loading} error={error}>
        <p>{record?.title}</p>
        <p>{record?.description}</p>
      </Loading>
    </>
  );
};

export default Details;
