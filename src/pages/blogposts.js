import Head from 'next/head';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {
  Modal,
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  TextField,
  MenuItem,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { BlogPostCard } from 'src/sections/blogposts/blogposts-card'
import { useState, useRef, useEffect } from 'react';


const mockdata = 
[
    {
      "id": "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6",
      "createdAt": "10/02/2024",
      "title": "Exploring the Basics of Cryptography",
      "description": "Cryptography is fundamental for securing online communications. Students delve into encryption algorithms to understand how data is protected.",
      "post": "Cryptography, the art of writing or solving codes, plays a crucial role in securing digital information. From symmetric encryption, which uses a single key for both encryption and decryption, to asymmetric encryption, which employs a pair of keys for enhanced security, the field offers a plethora of study areas. Understanding these concepts is essential for anyone looking to specialize in cybersecurity or develop secure applications.\n\nThe practical applications of cryptography extend beyond securing emails and financial transactions. For instance, blockchain technology relies on cryptographic principles to maintain a secure and decentralized record of transactions. This has implications for fields as diverse as finance, supply chain management, and voting systems. Exploring these applications provides insights into how cryptography shapes our digital landscape.\n\nFor students interested in cryptography, engaging in hands-on projects can be particularly enlightening. Implementing basic encryption algorithms or participating in cybersecurity competitions can offer real-world experience and deepen understanding. Moreover, these activities can highlight the ongoing importance of cryptography in defending against cyber threats, underscoring the field's dynamic and evolving nature.",
      "interactions": 734
    },
    {
      "id": "b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7",
      "createdAt": "12/02/2024",
      "title": "Diving Into Web Development",
      "description": "Web development combines creativity with technical skills. It's a gateway for students to bring innovative ideas to life online.",
      "post": "Web development stands at the intersection of creativity and technology, offering an expansive field for students to explore. Starting with HTML and CSS for structuring and styling web pages, learners quickly move to JavaScript, enabling interactive and dynamic user experiences. This foundational knowledge is crucial for anyone aspiring to create engaging online content.\n\nAs students progress, they encounter back-end technologies like Node.js and databases such as MongoDB, which allow for the creation of full-stack applications. Understanding these technologies opens up opportunities for developing complex web services and applications that can handle large volumes of data and real-time interactions. Projects such as creating a personal blog or a small e-commerce site can serve as excellent practical exercises.\n\nMoreover, the advent of frameworks and libraries like React and Angular has revolutionized the way web applications are built, making it easier to develop sophisticated user interfaces with less code. Engaging with these tools not only enhances technical skills but also prepares students for industry trends, ensuring they remain at the forefront of web development innovations.",
      "interactions": 892
    },
    {
      "id": "c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8",
      "createdAt": "15/02/2024",
      "title": "Understanding Artificial Intelligence",
      "description": "Artificial Intelligence (AI) is reshaping industries worldwide. It offers students a glimpse into the future of technology and its applications.",
      "post": "AI's potential to transform various sectors, from healthcare to automotive, is unparalleled. By studying AI, students can learn about machine learning algorithms, neural networks, and natural language processing, among other topics. This knowledge not only opens up career opportunities but also enables students to work on cutting-edge innovations.\n\nPractical AI projects, such as developing a chatbot or a simple image recognition app, can provide hands-on experience. These projects help demystify AI concepts and show how they can be applied to solve real-world problems. Furthermore, engaging with AI ethics and societal impacts encourages a holistic understanding of the technology's implications.\n\nThe continuous evolution of AI necessitates lifelong learning and adaptability. For students, starting with foundational AI concepts and progressively delving into more complex subjects, such as reinforcement learning or generative adversarial networks, can be a rewarding journey. This approach not only builds expertise but also fosters a mindset of innovation and curiosity in the face of technological advancements.",
      "interactions": 1050
    },
      {
        "id": "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p",
        "createdAt": "22/02/2024",
        "title": "Exploring the Basics of Quantum Computing",
        "description": "Quantum computing represents the next frontier in computing technology, offering unprecedented processing power. Its potential to solve complex problems faster than classical computers sparks interest among tech enthusiasts.",
        "post": "Quantum computers utilize the principles of quantum mechanics to process information, relying on qubits instead of bits. This allows them to perform complex calculations at speeds unattainable by traditional computers. \n The applications of quantum computing are vast, ranging from drug discovery to cryptography, showcasing its potential to revolutionize various industries. \n However, the technology is still in its infancy, with researchers around the world working to overcome significant challenges, including error rates and qubit stability.",
        "interactions": 325
      },
      {
        "id": "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6q",
        "createdAt": "24/02/2024",
        "title": "Demystifying Artificial Intelligence Ethics",
        "description": "As AI technologies become more integrated into our daily lives, ethical considerations are increasingly important. Concerns about privacy, bias, and autonomy are central to the debate.",
        "post": "The development of AI systems raises important ethical questions, particularly concerning data privacy and the potential for bias in decision-making. \n By implementing transparent and fair AI systems, developers can address these ethical concerns, ensuring that AI technologies benefit society as a whole. \n The future of AI ethics lies in the development of global standards and regulations that promote accountability and fairness in AI applications.",
        "interactions": 410
      },
      {
        "id": "3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q",
        "createdAt": "26/02/2024",
        "title": "The Impact of Blockchain on Data Security",
        "description": "Blockchain technology is transforming data security with its decentralized and transparent nature. It offers a new way to secure and verify transactions without the need for central authorities.",
        "post": "Blockchain's decentralized nature makes it highly resistant to tampering, providing a secure platform for transactions. \n The technology is not just for cryptocurrencies; it has applications in securing medical records, voting systems, and more. \n Despite its potential, blockchain faces challenges such as scalability and energy consumption, which researchers are actively working to solve.",
        "interactions": 289
      },
      {
        "id": "4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r",
        "createdAt": "28/02/2024",
        "title": "Understanding the Rise of Edge Computing",
        "description": "Edge computing is set to revolutionize how data is processed, bringing computation closer to data sources. This approach reduces latency and increases efficiency.",
        "post": "By processing data near its source, edge computing significantly reduces the need for data to travel to centralized data centers. \n This technology supports real-time applications like autonomous vehicles and IoT devices, where rapid processing is critical. \n The growth of edge computing presents new challenges in security and management, but its potential for transforming industries is enormous.",
        "interactions": 356
      },
      {
        "id": "5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s",
        "createdAt": "02/03/2024",
        "title": "The Evolution of Cybersecurity Trends",
        "description": "Cybersecurity is an ever-evolving field, with new threats and challenges emerging regularly. Staying ahead of these threats is critical for protecting sensitive information.",
        "post": "Recent trends in cybersecurity include the use of AI and machine learning to predict and combat cyber attacks. \n As cyber threats become more sophisticated, the need for advanced security measures has never been higher. \n The future of cybersecurity will likely involve a combination of human expertise and AI-driven technologies to create more resilient defense mechanisms.",
        "interactions": 478
      }, 
      {
        "id": "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6",
        "createdAt": "10/02/2024",
        "title": "Exploring the Basics of Cryptography",
        "description": "Cryptography is fundamental for securing online communications. Students delve into encryption algorithms to understand how data is protected.",
        "post": "Cryptography, the art of writing or solving codes, plays a crucial role in securing digital information. From symmetric encryption, which uses a single key for both encryption and decryption, to asymmetric encryption, which employs a pair of keys for enhanced security, the field offers a plethora of study areas. Understanding these concepts is essential for anyone looking to specialize in cybersecurity or develop secure applications.\n\nThe practical applications of cryptography extend beyond securing emails and financial transactions. For instance, blockchain technology relies on cryptographic principles to maintain a secure and decentralized record of transactions. This has implications for fields as diverse as finance, supply chain management, and voting systems. Exploring these applications provides insights into how cryptography shapes our digital landscape.\n\nFor students interested in cryptography, engaging in hands-on projects can be particularly enlightening. Implementing basic encryption algorithms or participating in cybersecurity competitions can offer real-world experience and deepen understanding. Moreover, these activities can highlight the ongoing importance of cryptography in defending against cyber threats, underscoring the field's dynamic and evolving nature.",
        "interactions": 734
      },
      {
        "id": "b2c3d4e5-f6g7-h8i9-j0k1-l2m3n4o5p6q7",
        "createdAt": "12/02/2024",
        "title": "Diving Into Web Development",
        "description": "Web development combines creativity with technical skills. It's a gateway for students to bring innovative ideas to life online.",
        "post": "Web development stands at the intersection of creativity and technology, offering an expansive field for students to explore. Starting with HTML and CSS for structuring and styling web pages, learners quickly move to JavaScript, enabling interactive and dynamic user experiences. This foundational knowledge is crucial for anyone aspiring to create engaging online content.\n\nAs students progress, they encounter back-end technologies like Node.js and databases such as MongoDB, which allow for the creation of full-stack applications. Understanding these technologies opens up opportunities for developing complex web services and applications that can handle large volumes of data and real-time interactions. Projects such as creating a personal blog or a small e-commerce site can serve as excellent practical exercises.\n\nMoreover, the advent of frameworks and libraries like React and Angular has revolutionized the way web applications are built, making it easier to develop sophisticated user interfaces with less code. Engaging with these tools not only enhances technical skills but also prepares students for industry trends, ensuring they remain at the forefront of web development innovations.",
        "interactions": 892
      }
];

const Page = () => {
  const [blogPosts, setBlogPosts] = useState(mockdata);
  const [addItem, setAddItem] = useState(false);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const postContentRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [postsPerPage, setPostsPerPage] = useState(6); // State to manage posts per page
  const [filteredBlogPosts, setFilteredBlogPosts] = useState(mockdata);
  const [currentBlogPost, setCurrentBlogPost] = useState(null);
  const [viewPost, setViewPost] = useState(false);


  const handleToggleModalPost = () => {
    setViewPost(!viewPost);
    // Clear the current blog post when the modal is closed
    if (viewPost) setCurrentBlogPost(null);
  };


  // Function to toggle the modal
  const handleToggleModal = () => {
    setAddItem(!addItem);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const now = new Date(Date.now());
    // Extract the day, month, and year from the Date object
    const day = now.getDate().toString().padStart(2, '0'); // Pad with leading zero if necessary
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-indexed, add 1 to get the correct month
    const year = now.getFullYear();

    // Concatenate the components in the desired format
    const formattedDate = `${day}/${month}/${year}`;

    const newPost = {
      id: "asjfklsadjfl;adskjfl;asjfl;asjfdl;as",
      createdAt: formattedDate,
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      post: postContentRef.current.value,
      interactions: 0,
    };

    setBlogPosts(currentPosts => [...currentPosts, newPost]);
    handleToggleModal(); // Close the modal after submission
    titleRef.current.value = '';
    descriptionRef.current.value = '';
    postContentRef.current.value = '';
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handlePostsPerPageChange = (event) => {
    setPostsPerPage(parseInt(event.target.value, 10));
  };

  useEffect(() => {
    // Trim the search query and check if it's empty
    const trimmedSearchQuery = searchQuery.trim();
  
    if (trimmedSearchQuery.length === 0) {
      // If the search query is empty, display all posts
      setFilteredBlogPosts(blogPosts);
    } else {
      // Split the non-empty search query into individual words (keywords)
      const keywords = trimmedSearchQuery.toLowerCase().split(' ').filter(keyword => keyword !== '');
  
      // Filter blogPosts based on whether any of the keywords match the title of a post
      const filtered = blogPosts.filter(blogpost =>
        keywords.some(keyword => blogpost.title.toLowerCase().includes(keyword))
      );
  
      setFilteredBlogPosts(filtered);
    }
  }, [blogPosts, searchQuery]);
  
  // const pageCount = Math.ceil(blogPosts.length / postsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(filteredBlogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const visiblePosts = filteredBlogPosts.slice(startIndex, startIndex + postsPerPage);

  // Style for the modal
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
  <>
    <Head>
      <title>
        BlogPosts | Grace
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        pb: 8
      }}
    > 
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            spacing={4}
          >
            <Stack spacing={1}>
              <Typography variant="h4">
                Blogposts
              </Typography>
            </Stack>
            <div>
              <Button
                startIcon={(
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                )}
                onClick={() => setAddItem(true)}
                variant="contained"
              >
                Add
              </Button>
            </div>
          </Stack>
          <TextField
            fullWidth
            label="Search Blog Posts"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            margin="normal"
          />
          <Grid
            container
            spacing={3}
          >
          {visiblePosts.map((blogpost) => (
            <Grid
              xs={12}
              md={6}
              lg={4}
              key={blogpost.id}
            >
              <BlogPostCard 
                blogpost={blogpost} 
                onClick={() => {
                  setCurrentBlogPost(blogpost);
                  setViewPost(true);
                }} 
              />
            </Grid>

          ))}
          </Grid>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Pagination
              count={pageCount}
              size="small"
              page={currentPage}
              onChange={handlePageChange}
            />
          </Box>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
            <TextField
              select
              label="Posts per page"
              value={postsPerPage}
              onChange={handlePostsPerPageChange}
              variant="outlined"
              style={{ width: 150 }} // Set a specific width for the TextField
            >
              {[6, 18, 36].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Stack>
      </Container>
    </Box>
    
    {/* Modal for adding a blog post */}
    <Modal
      open={addItem}
      onClose={handleToggleModal}
      aria-labelledby="add-blogpost-title"
      aria-describedby="add-blogpost-description"
      >
      <Box sx={modalStyle}>
        <Typography id="add-blogpost-title" variant="h6" component="h2">
          Add a New Blog Post
        </Typography>
        <form noValidate autoComplete="off">
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            inputRef={titleRef}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="description"
            label="Short Description (max 2 sentences)"
            name="description"
            multiline
            rows={2} // Adjusted for shorter input
            placeholder="Provide a brief description..."
            inputRef={descriptionRef}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="postContent"
            label="Post Content"
            name="postContent"
            multiline
            rows={10} // Significantly larger area for detailed post content
            placeholder="Write your post content here..."
            inputRef={postContentRef}
          />
          {/* Add more input fields as necessary */}
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="outlined" onClick={handleToggleModal}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSubmit} sx={{ ml: 2 }}>
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>

    <Modal
      open={viewPost}
      onClose={handleToggleModalPost}
      aria-labelledby="view-blogpost-title"
      aria-describedby="view-blogpost-description"
    >
      <Box sx={{ ...modalStyle, width: '80%', margin: 'auto' }}>
        {currentBlogPost ? (
          <>
            {/* Title with larger text and increased margin-bottom */}
            <Typography id="view-blogpost-title" variant="h4" component="h2" gutterBottom sx={{ marginBottom: 4 }}>
              {currentBlogPost.title}
            </Typography>
            {/* Description with medium text and increased margin-bottom */}
            <Typography variant="h6" sx={{ mt: 1.75, marginBottom: 3 }} gutterBottom>
              {currentBlogPost.description}
            </Typography>
            {/* Actual post content with smaller text */}
            <Typography variant="body1" sx={{ mt: 2 }}>
              {currentBlogPost.post}
            </Typography>
          </>
        ) : (
          <Typography variant="body1">
            No blog post selected.
          </Typography>
        )}
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="outlined" onClick={handleToggleModalPost}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>



  </>
);
}

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;