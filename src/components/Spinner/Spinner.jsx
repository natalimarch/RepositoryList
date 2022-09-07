import { ThreeDots } from "react-loader-spinner";

const Spinner = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#373854"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: "flex",
        justifyContent: "center",
        marginTop: 400,
      }}
      visible={true}
    />
  );
};

export default Spinner;
