import Navbar from "./components/header/NavBar";
import ItemListContainer from "./components/header/ItemListContainer";
import Box from "@mui/material/Box";

function App() {

  return (
    <>
      <Navbar pageName="ECOM"/>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            my: 2,
          }}
        >
          <img
            src="/images/banner-running.webp"
            alt="banner"
            width="100%"
            height="auto"
          />
        </Box>
      <ItemListContainer />
      <ItemListContainer />
    </>
  );
}

export default App;
