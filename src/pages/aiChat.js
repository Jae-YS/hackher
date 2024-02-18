import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  Box,
  Container,
  Stack,
  Typography,
  TextField,
  Modal,
  Button,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
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
  const [isLoading, setIsLoading] = useState(false); // Loader state
  const [project, setProject] = useState(null);
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    maxHeight: '90vh', // Sets a maximum height for the modal
    overflowY: 'auto', // Enables vertical scrolling if content exceeds maxHeight
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  


  useEffect(() => {
    const getData = async () => {
      console.log('here', id)
      if (id > data.length){
        console.log("getting data");
        try {
          // const response = fetch("http://127.0.0.1:8000/ai/gen_boilerplate/?input=Chess+This+is+an+interactive+chess+game+with+a+bot+who+controls+the+CPU's+move/?level=beginner/?tech_stack=react+django")
          // if (!response.ok) throw new Error('Network response was not ok, status: ' + response.status);
          // const botData = await response.json();
  
          // const responseObject = JSON.parse(botData.response); 
          const boilerplateCode = `Here is some boilerplate code to help get you started with an interactive chess game project using React and Django.\\n\\nSince you said you are a beginner programmer, I have provided very detailed comments explaining each part:\\n\\n\`\`\`jsx\\n// Frontend React App\\n\\n// Index.js\\n// This is the entry point for your React app. \\n// It renders the App component.\\n\\nimport React from 'react';\\nimport ReactDOM from 'react-dom';\\nimport App from './App';\\n\\nReactDOM.render(\\n  <React.StrictMode>\\n    <App />\\n  </React.StrictMode>, \\n  document.getElementById('root')\\n);\\n\\n// App.js\\n// This is the main App component that will render the rest of the app\\n\\nimport ChessBoard from './ChessBoard';\\n\\nfunction App() {\\n  return (\\n    <div>\\n      {/* ChessBoard component to display board */}\\n      <ChessBoard />\\n    </div>\\n  );\\n}\\n\\nexport default App;\\n\\n// ChessBoard.js\\n// Component to display chess board and pieces\\n\\nimport React, { useState } from 'react';\\nimport ChessPiece from './ChessPiece';\\n\\nfunction ChessBoard() {\\n\\n  const [board, setBoard] = useState([\\n    // 2D array to represent board squares and pieces\\n  ]);\\n\\n  return (\\n    <div className=\\"chess-board\\">\\n      {board.map((row, i) => (\\n        <div key={i} className=\\"row\\">\\n          {row.map((col, j) => (\\n            <ChessPiece \\n              key={\`\${i}\${j}\`}\\n              type={col} \\n              position={{i, j}}\\n            />\\n          ))}\\n        </div>\\n      ))}\\n    </div>\\n  );\\n}\\n\\nexport default ChessBoard;\\n\\n// Other helper React components\\n\`\`\`\\n\\n\`\`\`python \\n# Backend Django App\\n\\n# settings.py\\n# Configure Django project settings\\n\\nINSTALLED_APPS = [\\n    'django.contrib.admin',\\n    'django.contrib.auth',\\n    'django.contrib.contenttypes',\\n    'django.contrib.sessions',\\n    'django.contrib.messages',\\n    'django.contrib.staticfiles',\\n\\n    # Enable CORS\\n    'corsheaders',\\n    \\n    # Chess app\\n    'chess',\\n]\\n\\nMIDDLEWARE = [\\n   # Cors headers\\n   'corsheaders.middleware.CorsMiddleware',\\n\\n   # Other middleware\\n]\\n\\n# Configure CORS\\nCORS_ORIGIN_ALLOW_ALL = True\\n\\n# Other settings\\n\\n# urls.py\\n# Set up URL routes  \\n\\nfrom django.contrib import admin\\nfrom django.urls import path, include\\n\\nurlpatterns = [\\n    path('admin/', admin.site.urls),\\n    path('api/', include('chess.urls'))\\n]\\n\\n# chess/urls.py\\n# URLs for chess app\\n\\nfrom django.urls import path\\nfrom . import views\\n\\nurlpatterns = [\\n  path('move/', views.make_move, name='make_move'),\\n]\\n\\n# chess/views.py\\n# Handle requests from frontend\\n\\nfrom django.http import JsonResponse\\nfrom .models import Game\\nfrom .bot import make_bot_move\\n\\ndef make_move(request):\\n  # Get info from request \\n  # Update game model \\n  # Make bot move\\n\\n  return JsonResponse({'status': 'ok'})\\n\\n# chess/models.py\\n# Define models to store game state\\n\\nfrom django.db import models\\n\\nclass Game(models.Model):\\n  fen = models.CharField(max_length=100) # FEN string of board\\n\\n# chess/bot.py \\n# Bot logic to calculate moves  \\n\\ndef make_bot_move(game_id):\\n  # 1. Query game state \\n  # 2. Calculate next move\\n  # 3. Update game state\\n  pass\\n\`\`\`\\n\\nI've focused on breaking things down step-by-step and provided detailed comments on how the React components fit together, how Django handles the backend API and database, and the general flow between frontend and backend. Let me know if you have any other questions!`;

          const newProject = {
            id: data.length > 0 ? data[data.length - 1].id + 1 : 1,
            nameOfProject: "Chess", // Assign based on context or fetched content
            techStackUsed: "React" +  " " + "Django", // Manually assigned based on the description provided
            dateCreated: new Date().toISOString().slice(0, 10), // Use current date as creation date
            dateLastModified: new Date().toISOString().slice(0, 10), // Use current date or modify based on your logic
            status: "In Progress", // Assign based on context
            description: "Here is some boilerplate code to help get you started with an interactive chess game project using React and Django.\\n\\n" +
            "Since you said you are a beginner programmer, I have provided very detailed comments explaining each part:\n\n" +
            "```jsx\n" +
            "// Frontend React App\n\n" +
            "// Index.js\n" +
            "// This is the entry point for your React app. \n" +
            "// It renders the App component.\n\n" +
            "import React from 'react';\n" +
            "import ReactDOM from 'react-dom';\n" +
            "import App from './App';\n\n" +
            "ReactDOM.render(\n" +
            "  <React.StrictMode>\n" +
            "    <App />\n" +
            "  </React.StrictMode>, \n" +
            "  document.getElementById('root')\n" +
            ");\n\n" +
            "// App.js\n" +
            "// This is the main App component that will render the rest of the app\n\n" +
            "import ChessBoard from './ChessBoard';\n\n" +
            "function App() {\n" +
            "  return (\n" +
            "    <div>\n" +
            "      {/* ChessBoard component to display board */}\n" +
            "      <ChessBoard />\n" +
            "    </div>\n" +
            "  );\n" +
            "}\n\n" +
            "export default App;\n\n" +
            "// ChessBoard.js\n" +
            "// Component to display chess board and pieces\n\n" +
            "import React, { useState } from 'react';\n" +
            "import ChessPiece from './ChessPiece';\n\n" +
            "function ChessBoard() {\n\n" +
            "  const [board, setBoard] = useState([\n" +
            "    // 2D array to represent board squares and pieces\n" +
            "  ]);\n\n" +
            "  return (\n" +
            "    <div className=\\\"chess-board\\\">\n" +
            "      {board.map((row, i) => (\n" +
            "        <div key={i} className=\\\"row\\\">\n" +
            "          {row.map((col, j) => (\n" +
            "            <ChessPiece \n" +
            "              key={`${i}${j}`}\n" +
            "              type={col} \n" +
            "              position={{i, j}}\n" +
            "            />\n" +
            "          ))}\n" +
            "        </div>\n" +
            "      ))}\n" +
            "    </div>\n" +
            "  );\n" +
            "}\n\n" +
            "export default ChessBoard;\n\n" +
            "// Other helper React components\n" +
            "```\n\n" +
            "```python \n" +
            "# Backend Django App\n\n" +
            "# settings.py\n" +
            "# Configure Django project settings\n\n" +
            "INSTALLED_APPS = [\n" +
            "    'django.contrib.admin',\n" +
            "    'django.contrib.auth',\n" +
            "    'django.contrib.contenttypes',\n" +
            "    'django.contrib.sessions',\n" +
            "    'django.contrib.messages',\n" +
            "    'django.contrib.staticfiles',\n\n" +
            "    # Enable CORS\n" +
            "    'corsheaders',\n" +
            "    \n" +
            "    # Chess app\n" +
            "    'chess',\n" +
            "]\n\n" +
            "MIDDLEWARE = [\n" +
            "   # Cors headers\n" +
            "   'corsheaders.middleware.CorsMiddleware',\n\n" +
            "   # Other middleware\n" +
            "]\n\n" +
            "# Configure CORS\n" +
            "CORS_ORIGIN_ALLOW_ALL = True\n\n" +
            "# Other settings\n\n" +
            "# urls.py\n" +
            "# Set up URL routes  \n\n" +
            "from django.contrib import admin\n" +
            "from django.urls import path, include\n\n" +
            "urlpatterns = [\n" +
            "    path('admin/', admin.site.urls),\n" +
            "    path('api/', include('chess.urls'))\n" +
            "]\n\n" +
            "# chess/urls.py\n" +
            "# URLs for chess app\n\n" +
            "from django.urls import path\n" +
            "from . import views\n\n" +
            "urlpatterns = [\n" +
            "  path('move/', views.make_move, name='make_move'),\n" +
            "]\n\n" +
            "# chess/views.py\n" +
            "# Handle requests from frontend\n\n" +
            "from django.http import JsonResponse\n" +
            "from .models import Game\n" +
            "from .bot import make_bot_move\n\n" +
            "def make_move(request):\n" +
            "  # Get info from request \n" +
            "  # Update game model \n" +
            "  # Make bot move\n\n" +
            "  return JsonResponse({'status': 'ok'})\n\n" +
            "# chess/models.py\n" +
            "# Define models to store game state\n\n" +
            "from django.db import models\n\n" +
            "class Game(models.Model):\n" +
            "  fen = models.CharField(max_length=100) # FEN string of board\n\n" +
            "# chess/bot.py \n" +
            "# Bot logic to calculate moves  \n\n" +
            "def make_bot_move(game_id):\n" +
            "  # 1. Query game state \n" +
            "  # 2. Calculate next move\n" +
            "  # 3. Update game state\n" +
            "  pass\n" +
            "```\n\n" +
            "I've focused on breaking things down step-by-step and provided detailed comments on how the React components fit together, how Django handles the backend API and database, and the general flow between frontend and backend. Let me know if you have any other questions!",
          
          };
  
          // Add the new project to the data array
          setProject(newProject);
      } catch (error){
        console.error("Error fetching bot response:", error);
      }
    }
      else{
        
        const project = data.find((project) => project.id === id);
        setProject(project);
      }
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

  function MultiLineText({ text }) {
    const lines = text.split('\n').map((line, index, array) =>
      index === array.length - 1 ? line : <React.Fragment key={index}>{line}<br /></React.Fragment>
    );
  
    return <>{lines}</>;
  }

  const handleSubmit = async () => {
    const words = inputText.split(" ");
    const concatenated_text = words.length > 1 ? words.join("+") : words[0];
  
    // Add user message to chat messages
    setChatMessages((prevMessages) => [...prevMessages, { id: Date.now(), text: inputText, isBot: false }]);
  
    // Clear input field
    setInputText("");
  
    // Add a loading message for the bot response
    const loadingMessageId = Date.now();
    setChatMessages((prevMessages) => [...prevMessages, { id: loadingMessageId, text: "Typing...", isBot: true, isLoading: true }]);
  
    const url = `http://127.0.0.1:8000/ai/gen_ideas/?input=${concatenated_text}`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok, status: ' + response.status);
      const data = await response.json();
  
      // Update the loading message with the actual bot response
      setChatMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === loadingMessageId ? { ...msg, text: data.response, isLoading: false, isTyping: true } : msg
        )
      );

      const obj = JSON.parse(data.response);

      const botResponse = obj.response;
  
      // Simulate typing for the updated message
      simulateTyping(botResponse, loadingMessageId);
    } catch (error) {
      console.error("Error fetching bot response:", error);
      // Update the loading message to show the error
      setChatMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === loadingMessageId ? { ...msg, text: "Error: Something went wrong", isLoading: false } : msg
        )
      );
    }
  };
  
  const simulateTyping = (fullText, messageId) => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setChatMessages((prevMessages) =>
        prevMessages.map((msg) =>
          msg.id === messageId ? { ...msg, text: fullText.substring(0, index), isTyping: index < fullText.length } : msg
        )
      );
  
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 20);
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
                  <strong>Description:</strong> <MultiLineText text={project.description} />
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
