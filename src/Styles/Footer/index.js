import styled from "@emotion/styled";
import { TextField, Typography } from "@mui/material";

export const FooterTitle = styled(Typography)(() => ({
    textTransform:"uppercase",
    marginBottom:"1rem"
}));

export const SubscribeField = styled(TextField)(() => ({
    ".MuiInputLabel-root": {
        // color: "#757de8",
    },

    ".MuiInput-root::before": {
        borderBottom: "1px solid #002984",
    },
}))