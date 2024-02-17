import { useCallback, useMemo, useState } from "react";
import Head from "next/head";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { Box, Button, Container, Stack, SvgIcon, Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { useSelection } from "src/hooks/use-selection";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { ProjectsTable } from "src/sections/myproject/projects-table";
import { ProjectsSearch } from "src/sections/myproject/projects-search";
import { applyPagination } from "src/utils/apply-pagination";
import { OverviewTotalProfit } from '../sections/overview/overview-total-profit';


const now = new Date();

const data = [
  {
    id: "1",
    nameOfProject: "Project A",
    techStackUsed: "React, Node.js, MongoDB",
    dateCreated: "2023-01-15",
    dateLastModified: "2023-05-20",
    status: "In Progress",
  },
  {
    id: "2",
    nameOfProject: "Project B",
    techStackUsed: "Angular, Express.js, PostgreSQL",
    dateCreated: "2023-02-28",
    dateLastModified: "2023-06-10",
    status: "Done",
  },
  {
    id: "3",
    nameOfProject: "Project C",
    techStackUsed: "Vue.js, Django, MySQL",
    dateCreated: "2023-03-10",
    dateLastModified: "2023-07-05",
    status: "Done",
  },
  {
    id: "4",
    nameOfProject: "Project D",
    techStackUsed: "React Native, Firebase",
    dateCreated: "2023-04-05",
    dateLastModified: "2023-08-15",
    status: "In Progress",
  },
  {
    id: "5",
    nameOfProject: "Project E",
    techStackUsed: "Angular, Spring Boot, MongoDB",
    dateCreated: "2023-05-20",
    dateLastModified: "2023-09-25",
    status: "Archived",
  },
  {
    id: "6",
    nameOfProject: "Project F",
    techStackUsed: "React, Django, PostgreSQL",
    dateCreated: "2023-06-08",
    dateLastModified: "2023-10-12",
    status: "Done",
  },
  {
    id: "7",
    nameOfProject: "Project G",
    techStackUsed: "Vue.js, Node.js, MongoDB",
    dateCreated: "2023-07-14",
    dateLastModified: "2023-11-30",
    status: "Archived",
  },
  {
    id: "8",
    nameOfProject: "Project H",
    techStackUsed: "React, Express.js, SQLite",
    dateCreated: "2023-08-30",
    dateLastModified: "2023-12-22",
    status: "In Progress",
  },
  // Add more projects as needed
];

const useProjects = (page, rowsPerPage, searchQuery) => {
  // Filter projects based on the search query
  const filteredProjects = useMemo(() => {
    if (!searchQuery) return data;
    return data.filter((project) =>
      project.nameOfProject.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Apply pagination to filtered projects
  return useMemo(() => {
    return applyPagination(filteredProjects, page, rowsPerPage);
  }, [filteredProjects, page, rowsPerPage]);
};

const useProjectIds = (projects) => {
  return useMemo(() => {
    return projects.map((project) => project.id);
  }, [projects]);
};

const Page = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const projects = useProjects(page, rowsPerPage, searchQuery);
  const projectIds = useProjectIds(projects);
  const projectSelection = useSelection(projectIds);

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);

  const handleSearchInputChange = useCallback((event) => {
    setSearchQuery(event.target.value);
  }, []);

  const handleSearchKeyPress = useCallback(
    (event) => {
      if (event.key === "Enter") {
        // Trigger filtering when Enter key is pressed
        setPage(0);
      }
    },
    [setPage]
  );

  return (
    <>
      <Head>
        <title>My Projects</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pb: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">My Projects</Typography>
              </Stack>
            
            </Stack>

            <Grid
              container
              spacing={3}
            >
              <Grid
                item // Make sure to include the item prop for consistency
                xs={12}
                sm={6}
                lg={3}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} // This centers the button
              >
                <Button
                  startIcon={
                    <SvgIcon 
                      style={{ fontSize: '1.5rem' }} // Adjust the icon size as needed
                      fontSize="small"
                    >
                      <PlusIcon />
                    </SvgIcon>
                  }
                  variant="contained"
                  style={{ height: '100%', width: '100%', maxWidth: 'none', fontSize: '1.25rem'}} // Adjust width and height as needed
                >
                  Add
                </Button>
              </Grid>
              <Grid
                xs={12}
                sm={6}
                lg={3}
              >
                <OverviewTotalProfit
                  sx={{ height: '100%' }}
                  value="$15k"
                />
              </Grid>
              <Grid
                xs={12}
                sm={6}
                lg={3}
              >
                <OverviewTotalProfit
                  sx={{ height: '100%' }}
                  value="$15k"
                />
              </Grid>
              <Grid
                xs={12}
                sm={6}
                lg={3}
              >
                <OverviewTotalProfit
                  sx={{ height: '100%' }}
                  value="$15k"
                />
              </Grid>
            </Grid>
            <ProjectsSearch
              value={searchQuery}
              onChange={handleSearchInputChange}
              onKeyPress={handleSearchKeyPress}
            />
            <ProjectsTable
              count={data.length}
              items={projects}
              onDeselectAll={projectSelection.handleDeselectAll}
              onDeselectOne={projectSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={projectSelection.handleSelectAll}
              onSelectOne={projectSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={projectSelection.selected}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
