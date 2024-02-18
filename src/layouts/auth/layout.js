import PropTypes from "prop-types";
import { Box, Unstable_Grid2 as Grid } from "@mui/material";

export const Layout = (props) => {
  const { children } = props;

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flex: "1 1 auto",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        sx={{
          flex: "1 1 auto",
          justifyContent: "center", // Center the content horizontally
        }}
      >
        <Grid
          xs={12}
          lg={6}
          sx={{
            backgroundColor: "background.paper",
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Center the content vertically
            position: "relative",
          }}
        >
          {children}
        </Grid>
      </Grid>
    </Box>
  );
};

Layout.prototypes = {
  children: PropTypes.node,
};
