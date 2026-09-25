import { useRouteError } from "react-router";

const Error = () => {
  const errorContent = useRouteError();
  console.log(errorContent);

  const { data, status, statusText } = errorContent;

  return (
    <>
      <div>
        <h1>Error : {status}</h1>
        <h1>oops page {statusText}</h1>
        <h1>please check your route</h1>
        <h1>{data}</h1>
      </div>
    </>
  );
};

export default Error;
