import { Breadcrumbs, Link, Typography } from "@mui/material";

const Breadcrumb = (props) => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/"
    >
      {props.category1}
    </Link>,
    <Typography key="3" color="text.primary">
      {props.category2}
    </Typography>,
  ];

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      {breadcrumbs}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
