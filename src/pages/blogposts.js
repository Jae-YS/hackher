import Head from 'next/head';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
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
  Unstable_Grid2 as Grid
} from '@mui/material';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { CompanyCard } from 'src/sections/companies/company-card';
import { CompaniesSearch } from 'src/sections/companies/companies-search';
import { useState } from 'react';

const blogPosts = [
  {
    id: "3073c626-628f-42ba-8e35-84d51ac1c3fb",
    createdAt: "21/09/2022",
    description: "Relationship experience material community class person position speech method himself own economic low in boy.",
    logo: "/assets/logos/logo-computer.png",
    title: "Davidson-Grant",
    downloads: "548"
  },
  {
    id: "d09f255d-390a-45f1-8de3-d9363cbb1ddd",
    createdAt: "18/09/2022",
    description: "Trouble minute sit sit high weight leader sister key again sit early simply.",
    logo: "/assets/logos/logo-PM.png",
    title: "Wilson-Harris",
    downloads: "151"
  },
  {
    id: "a5f808d3-1caa-4fe3-b27e-fd8596d3d4c6",
    createdAt: "03/08/2019",
    description: "Deal political west scientist different customer her thank design what stop project set poor measure according history true wear option.",
    logo: "/assets/logos/logo-interesting.png",
    title: "Rodgers Inc",
    downloads: "530"
  },
  {
    id: "9b3bd925-7a4f-49e2-bd76-47c1ed3ea1f0",
    createdAt: "26/04/2021",
    description: "Grow police tough section start cold interesting pull happy meet wear sound apply throughout risk hold.",
    logo: "/assets/logos/logo-film.png",
    title: "Green-Moon",
    downloads: "308"
  },
  {
    id: "4c3d6194-d067-4dec-82c4-58b93f3b34ca",
    createdAt: "28/03/2019",
    description: "Agency could walk marriage either break bring of leader agent leg.",
    logo: "/assets/logos/logo-risk.png",
    title: "Miller and Sons",
    downloads: "519"
  }
];

const Page = () => {
  const [addItem, setAddItem] = useState(false);

  // Function to toggle the modal
  const handleToggleModal = () => {
    setAddItem(!addItem);
  };

  // Style for the modal
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  return (
  <>
    <Head>
      <title>
        BlogPosts | Devias Kit
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
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
                Companies
              </Typography>
              <Stack
                alignItems="center"
                direction="row"
                spacing={1}
              >
                <Button
                  color="inherit"
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <ArrowUpOnSquareIcon />
                    </SvgIcon>
                  )}
                >
                  Import
                </Button>
                <Button
                  color="inherit"
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <ArrowDownOnSquareIcon />
                    </SvgIcon>
                  )}
                >
                  Export
                </Button>
              </Stack>
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
          <CompaniesSearch />
          <Grid
            container
            spacing={3}
          >
            {blogPosts.map((company) => (
              <Grid
                xs={12}
                md={6}
                lg={4}
                key={company.id}
              >
                <CompanyCard company={company} />
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
              count={3}
              size="small"
            />
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
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              id="description"
              multiline
              rows={4}
            />
            {/* Add more input fields as necessary */}
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="contained" onClick={handleToggleModal}>
                Cancel
              </Button>
              <Button variant="contained" onClick={handleToggleModal} sx={{ ml: 2 }}>
                Submit
              </Button>
            </Box>
          </form>
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
