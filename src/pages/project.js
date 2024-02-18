import React from "react";
import Head from "next/head";
import { Box, Container, Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { aiChat } from "./aiChat"
import { ProjectDetails } from "../sections/myproject/project-detail"; // Your new component

const ParentComponent = () => {
  return (
    <>
      <Head>
        <title>Interactive Page</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <aiChat />
            </Grid>
            <Grid item xs={6}>
              <ProjectDetails />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

ParentComponent.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default ParentComponent;
