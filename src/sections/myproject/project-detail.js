import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";

const SecondElement = () => {
  // Placeholder content - customize with your own content
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Container maxWidth="lg">
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h4" gutterBottom>
            Second Element Title
          </Typography>
          <Typography variant="body1">
            This is the second element of the page. You can customize this template to include any content you need, such as FAQs, resource links, interactive components, or additional information related to the first element.
          </Typography>
          {/* Add more components or content as needed */}
        </Paper>
      </Container>
    </Box>
  );
};

export default SecondElement;
