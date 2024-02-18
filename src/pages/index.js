import Head from "next/head";
import { subDays, subHours } from "date-fns";
import {
  Box,
  Container,
  Unstable_Grid2 as Grid,
  Typography,
  TableContainer,
  Table,
  Paper,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { OverviewBudget } from "src/sections/overview/overview-budget";
import { OverviewLatestOrders } from "src/sections/overview/overview-latest-orders";
import { OverviewLatestProducts } from "src/sections/overview/overview-latest-products";
import { OverviewSales } from "src/sections/overview/overview-sales";
import { OverviewTasksProgress } from "src/sections/overview/overview-tasks-progress";
import { OverviewTotalCustomers } from "src/sections/overview/overview-total-customers";
import { OverviewTotalProfit } from "src/sections/overview/overview-total-profit";
import { OverviewTraffic } from "src/sections/overview/overview-traffic";

const now = new Date();
const topTrends = [
  {
    id: 1,
    title: "New Breakthrough in AI Technology",
    author: "John Doe",
    date: "2024-02-17",
  },
  {
    id: 2,
    title: "SpaceX Launches Mission to Mars",
    author: "Jane Smith",
    date: "2024-02-17",
  },
  {
    id: 3,
    title: "Advancements in Quantum Computing",
    author: "Alice Johnson",
    date: "2024-02-17",
  },
  {
    id: 4,
    title: "Climate Change Summit Held in Paris",
    author: "Michael Brown",
    date: "2024-02-17",
  },
  {
    id: 5,
    title: "New Study Shows Benefits of Meditation",
    author: "Emily Davis",
    date: "2024-02-17",
  },
];

const Page = () => (
  <>
    <Head>
      <title>Overview</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        pt: 2,
        pb: 8,
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h4" gutterBottom>
          Top Trends in CS
        </Typography>
        <TableContainer sx={{ pt: 2 }} component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Article</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {topTrends.map((article) => (
                <TableRow key={article.id}>
                  <TableCell>{article.title}</TableCell>
                  <TableCell>{article.author}</TableCell>
                  <TableCell>{article.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
