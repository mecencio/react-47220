import { Box, Button, Grid, List, ListItemText, Stack, TextField, Typography } from "@mui/material";
import { FooterTitle, SubscribeField } from "../../Styles/Footer";
import { Facebook, Instagram, Send, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        p: { xs: 4, md: 10 },
        py: 12,
        fontSize: { xs: "12px", md: "14px" },
        borderTop: "1px solid #757de8"
      }}
    >
      <Grid container spacing={2} justifyContent={"center"}>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About Us</FooterTitle>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            architecto eos deleniti ullam nihil sunt expedita tempore temporibus
            velit omnis nobis vitae, sit quibusdam dolore ratione quia aliquid
            maiores alias!
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Facebook sx={{ mr: 1 }} />
            <Twitter sx={{ mr: 1 }} />
            <Instagram />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle>Information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="body2">
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="body2">
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="body2">
                Privacy & Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="body2">
                Terms & Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
            <FooterTitle variant="body1">My Account</FooterTitle>
            <List>
                <ListItemText>
                    <Typography lineHeight={2} variant="body2">
                        Login
                    </Typography>
                </ListItemText>
                <ListItemText>
                    <Typography lineHeight={2} variant="body2">
                        My Cart
                    </Typography>
                </ListItemText>
                <ListItemText>
                    <Typography lineHeight={2} variant="body2">
                        My account
                    </Typography>
                </ListItemText>
                <ListItemText>
                    <Typography lineHeight={2} variant="body2">
                        Wishlist
                    </Typography>
                </ListItemText>
            </List>
        </Grid>
        <Grid item md={6} lg={4}>
            <FooterTitle variant="body1">Newsletter</FooterTitle>
            <Stack>
                <SubscribeField label="Email address" variant="standard" />
                <Button startIcon={<Send sx={{color: "whitesmoke"}} />} sx={{ my:4 }} variant="contained">Subscribe</Button>
            </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
