import { Alert, Snackbar } from "@mui/material";

const Toaster = (props) => {

  return (
    <Snackbar open={props.open} autoHideDuration={4000} onClose={props.handleClose} anchorOrigin={{vertical: 'top', horizontal: 'center',}} sx={{width:"50vw"}}>
      <Alert onClose={props.handleClose} severity="success" sx={{ width: "100%" }}>
        {props.message}
      </Alert>
    </Snackbar>
  );
};

export default Toaster;
