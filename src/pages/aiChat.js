import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  Box,
  Container,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
  TextField,
  Modal,
  Button,
  Paper,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { ReactComponent as BotIcon } from "../../public/assets/bot.svg";
import { ReactComponent as UserIcon } from "../../public/assets/user.svg";
const bot = "/assets/bot.svg";
const user = "/assets/user.svg";

const data = [
  {
    id: "1",
    nameOfProject: "Project A",
    techStackUsed: "React, Node.js, MongoDB",
    dateCreated: "2023-01-15",
    dateLastModified: "2023-05-20",
    status: "In Progress",
    description: "this is a project ",
  },
  {
    id: "2",
    nameOfProject: "Project B",
    techStackUsed: "Angular, Express.js, PostgreSQL",
    dateCreated: "2023-02-28",
    dateLastModified: "2023-06-10",
    status: "Done",
    description: "this is a project ",
  },
  {
    id: "3",
    nameOfProject: "Project C",
    techStackUsed: "Vue.js, Django, MySQL",
    dateCreated: "2023-03-10",
    dateLastModified: "2023-07-05",
    status: "Done",
    description: "this is a project ",
  },
  {
    id: "4",
    nameOfProject: "Project D",
    techStackUsed: "React Native, Firebase",
    dateCreated: "2023-04-05",
    dateLastModified: "2023-08-15",
    status: "In Progress",
    description: "this is a project ",
  },
  {
    id: "5",
    nameOfProject: "Project E",
    techStackUsed: "Angular, Spring Boot, MongoDB",
    dateCreated: "2023-05-20",
    dateLastModified: "2023-09-25",
    status: "Archived",
    description: "this is a project ",
  },
  {
    id: "6",
    nameOfProject: "Project F",
    techStackUsed: "React, Django, PostgreSQL",
    dateCreated: "2023-06-08",
    dateLastModified: "2023-10-12",
    status: "Done",
    description: "this is a project ",
  },
  {
    id: "7",
    nameOfProject: "Project G",
    techStackUsed: "Vue.js, Node.js, MongoDB",
    dateCreated: "2023-07-14",
    dateLastModified: "2023-11-30",
    status: "Archived",
    description: "this is a project ",
  },
  {
    id: "8",
    nameOfProject: "Project H",
    techStackUsed: "React, Express.js, SQLite",
    dateCreated: "2023-08-30",
    dateLastModified: "2023-12-22",
    status: "In Progress",
    description: "this is a project ",
  },
  // Add more projects as needed
];

const Chat = () => {
  const router = useRouter();
  const { id } = router.query;
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [viewPost, setViewPost] = useState(true);
  const [project, setProject] = useState(null);
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  console.log(id);
  console.log(project);

  useEffect(() => {
    const getData = () => {
      const project = data.find((project) => project.id === id);
      setProject(project);
    };

    getData();
  }, []);

  // Function to toggle the modal
  const handleToggleModalPost = () => {
    setViewPost(!viewPost);
  };

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

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
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
              <Typography variant="h4">
                {project ? `${project.nameOfProject}'s Assistant` : "Ask Questions below"}
              </Typography>
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
                onKeyPress={handleKeyPress}
              />
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
            </Stack>
          </Container>
        </Box>
      </Box>

      {id ? (
        <Modal
          open={viewPost}
          onClose={handleToggleModalPost}
          aria-labelledby="view-project-title"
          aria-describedby="view-project-description"
        >
          <Box sx={{ ...modalStyle, width: "80%", margin: "auto" }}>
            {project ? (
              <>
                {/* Project Name */}
                <Typography
                  id="project-name"
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{ marginBottom: 4 }}
                >
                  {project.nameOfProject}
                </Typography>
                {/* Tech Stack Used */}
                <Typography variant="body1" sx={{ mt: 2 }}>
                  <strong>Tech Stack Used:</strong> {project.techStackUsed}
                </Typography>
                {/* Date Created */}
                <Typography variant="body1" sx={{ mt: 2 }}>
                  <strong>Date Created:</strong> {project.dateCreated}
                </Typography>
                {/* Date Last Modified */}
                <Typography variant="body1" sx={{ mt: 2 }}>
                  <strong>Date Last Modified:</strong> {project.dateLastModified}
                </Typography>
                {/* Description */}
                <Typography variant="body1" sx={{ mt: 2 }}>
                  <strong>Description:</strong> {project.description}
                </Typography>
                {/* Status */}
                <Typography variant="body1" sx={{ mt: 2 }}>
                  <strong>Status:</strong>{" "}
                  <Typography
                    component="span"
                    variant="body1"
                    sx={{
                      fontWeight: "bold",
                      color:
                        project.status === "Done"
                          ? "green"
                          : project.status === "In Progress"
                          ? "gray"
                          : "red",
                    }}
                  >
                    {project.status}
                  </Typography>
                </Typography>
              </>
            ) : null}
            <Box sx={{ mt: 2, display: "flex", justifyContent: "flex-end" }}>
              <Button variant="outlined" onClick={handleToggleModalPost}>
                Close
              </Button>
            </Box>
          </Box>
        </Modal>
      ) : null}
    </>
  );
};

Chat.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Chat;
