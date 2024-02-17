import React, { useState } from "react";
import Head from "next/head";
import {
  Box,
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { ReactComponent as BotIcon } from "../../public/assets/bot.svg";
import { ReactComponent as UserIcon } from "../../public/assets/user.svg";

const Chat = () => {
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async () => {
    // Add user message to chat messages
    setChatMessages((prevMessages) => [...prevMessages, { text: inputText, isBot: false }]);

    // Clear input field
    setInputText("");

    // Start loader animation
    let dots = 1;
    const loaderInterval = setInterval(() => {
      const loaderText = "...".slice(0, dots);
      setChatMessages((prevMessages) => [...prevMessages, { text: loaderText, isBot: true }]);
      dots = (dots % 3) + 1; // Cycle through 1, 2, 3
    }, 300);

    try {
      // Fetch bot response (simulated for now)
      const botResponse = await fetchBotResponse(inputText);

      // Stop loader animation
      clearInterval(loaderInterval);

      // Add bot message to chat messages
      setChatMessages((prevMessages) => [...prevMessages, { text: botResponse, isBot: true }]);
    } catch (error) {
      console.error("Error fetching bot response:", error);
      // Stop loader animation and display error message
      clearInterval(loaderInterval);
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { text: "Error: Something went wrong", isBot: true },
      ]);
    }
  };

  return (
    <>
      <Head>
        <title>Ask Questions</title>
      </Head>
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",

          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2}>
            <div>
              <Typography variant="h4">Ask Questions below</Typography>
            </div>
            <div style={{ maxHeight: "calc(100vh - 220px)", overflowY: "auto" }}>
              {/* Display chat messages */}
              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  style={{ marginBottom: "20px", display: "flex", alignItems: "start" }}
                >
                  {/* Icon */}
                  <div className="profile" style={{ marginRight: "10px" }}>
                    {message.isBot ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#000"
                        className="bi bi-robot"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
                        <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="#000"
                        className="bi bi-person"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                      </svg>
                    )}
                  </div>
                  {/* Text */}
                  <div style={{ textAlign: "left" }}>
                    {/* Title */}
                    <Typography variant="subtitle1" component="div" sx={{ fontWeight: "bold" }}>
                      {message.isBot ? "Bot" : "User"}
                    </Typography>
                    {/* Message */}
                    <Typography variant="body1" component="div">
                      {message.text}
                    </Typography>
                  </div>
                </div>
              ))}
            </div>
          </Stack>
        </Container>
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#f0f0f0",
            padding: "20px",
          }}
        >
          <Container maxWidth="lg">
            <Stack direction="row" spacing={2}>
              <TextField
                fullWidth
                id="outlined-multiline-flexible"
                label="Type Your Question Here"
                multiline
                maxRows={4}
                value={inputText}
                onChange={handleChange}
              />
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

Chat.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Chat;
