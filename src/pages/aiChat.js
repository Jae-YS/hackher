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
const bot = "/assets/bot.svg";
const user = "/assets/user.svg";

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
                    <img src={message.isBot ? bot : user} />
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
