import { LoadingButton } from "@mui/lab";

const Spinner = () => {
  return (
    <LoadingButton
      loading
      loadingPosition="center"
      size="large"
    ></LoadingButton>
  );
};

export default Spinner;
