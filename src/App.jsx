import React, { useState } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Badge,
  Chip,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  TablePagination,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  ListItemIcon,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Notifications as NotificationsIcon,
  People as PeopleIcon,
  Info as InfoIcon,
  ExpandMore as ExpandMoreIcon,
  Star as StarIcon,
  Album as AlbumIcon,
  Group as GroupIcon,
} from "@mui/icons-material";
import theme from "./theme";
import { BarChart as BarChartIcon } from "@mui/icons-material";

// Top Navigation Bar
const Topbar = () => {
  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon /> },
    { text: "Members", icon: <PeopleIcon /> },
    { text: "Group Stats", icon: <BarChartIcon /> },
    { text: "FAQs", icon: <InfoIcon /> },
  ];

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#1a237e" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left: Title */}
        <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
          Jennie's Dashboard
        </Typography>

        {/* Center: Menu */}
        <Stack direction="row" spacing={4}>
          {menuItems.map((item) => (
            <Button
              key={item.text}
              startIcon={item.icon}
              sx={{
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {item.text}
            </Button>
          ))}
        </Stack>

        {/* Right: Notification */}
        <IconButton sx={{ color: "white" }}>
          <Badge badgeContent={99} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

// Avatar Badge (Jennie Only)
const AvatarBadgeDemo = () => {
  const members = [
    {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFejckoK6n-E3npBzQBF7KsSMY1kyst1Mvwg&s",
      notifications: 99,
    },
  ];

  return (
    <Card sx={{ p: 3, borderRadius: 2, boxShadow: 2, height: "100%", textAlign: "center" }}>
      <Typography variant="h6" gutterBottom color="primary">
        Notifications
      </Typography>
      <Stack direction="row" spacing={3} sx={{ justifyContent: "center", alignItems: "center" }}>
        {members.map((m, i) => (
          <Badge key={i} color="secondary" badgeContent={m.notifications} overlap="circular">
            <Avatar src={m.avatar} sx={{ width: 80, height: 80 }} />
          </Badge>
        ))}
      </Stack>
    </Card>
  );
};

// Profile Card
const ProfileCard = () => (
  <Card sx={{ borderRadius: 2, boxShadow: 2, p: 2, height: "100%" }}>
    <CardMedia
      component="img"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFejckoK6n-E3npBzQBF7KsSMY1kyst1Mvwg&s"
      alt="Jennie Kim"
      sx={{ width: "100%", height: 280, objectFit: "contain", borderRadius: 2, backgroundColor: "#000" }}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" align="center" color="primary">
        Jennie Kim
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, textAlign: "center" }}>
        Main Rapper & Lead Vocalist of BLACKPINK
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, flexWrap: "wrap", mb: 2 }}>
        <Chip label="Main Rapper" size="small" color="primary" />
        <Chip label="Lead Vocalist" size="small" color="secondary" />
        <Chip label="YG Entertainment" size="small" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="contained" color="primary">See more</Button>
        <Button variant="outlined" color="secondary">Share</Button>
      </Box>
    </CardContent>
  </Card>
);

// Members List
const UsersList = () => {
  const members = [
    { name: "Jisoo", role: "Lead Vocalist, Visual", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1AZrAVEwX4G5MEwMRbHY1BmOtw_49fp2PA&s" },
    { name: "Jennie", role: "Main Rapper, Lead Vocalist", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFejckoK6n-E3npBzQBF7KsSMY1kyst1Mvwg&s" },
    { name: "Rosé", role: "Main Vocalist, Lead Dancer", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Blackpink_Ros%C3%A9_Rimowa_1.jpg/250px-Blackpink_Ros%C3%A9_Rimowa_1.jpg" },
    { name: "Lisa", role: "Main Dancer, Lead Rapper", avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/20240314_Lisa_Manoban_07.jpg/250px-20240314_Lisa_Manoban_07.jpg" },
  ];
  return (
    <Card sx={{ p: 2, borderRadius: 2, boxShadow: 2, height: "100%" }}>
      <Typography variant="h6" gutterBottom color="primary">Group Members</Typography>
      <List>
        {members.map((m, i) => (
          <ListItem key={i}>
            <ListItemAvatar><Avatar src={m.avatar} /></ListItemAvatar>
            <ListItemText primary={m.name} secondary={m.role} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

// Stats Card
const StatsCard = () => {
  const stats = [
    { icon: <GroupIcon color="primary" />, label: "Total Members", value: 4 },
    { icon: <AlbumIcon color="secondary" />, label: "Albums Released", value: 3 },
    { icon: <StarIcon sx={{ color: "#fbc02d" }} />, label: "Awards Won", value: 120 },
  ];
  return (
    <Card sx={{ p: 3, borderRadius: 2, boxShadow: 2 }}>
      <Typography variant="h6" gutterBottom color="primary">Group Stats</Typography>
      <Grid container spacing={2}>
        {stats.map((s, i) => (
          <Grid item xs={12} sm={4} key={i}>
            <Box textAlign="center">
              {s.icon}
              <Typography variant="h5" fontWeight="bold">{s.value}</Typography>
              <Typography variant="body2" color="text.secondary">{s.label}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

// Members Table
const MembersTable = () => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const members = [
    { name: "Jisoo", role: "Lead Vocalist, Visual" },
    { name: "Jennie", role: "Main Rapper, Lead Vocalist" },
    { name: "Rosé", role: "Main Vocalist, Lead Dancer" },
    { name: "Lisa", role: "Main Dancer, Lead Rapper" },
  ];

  const handleSort = (prop) => {
    const isAsc = orderBy === prop && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(prop);
  };

  const sorted = [...members].sort((a, b) =>
    a[orderBy] < b[orderBy] ? (order === "asc" ? -1 : 1) : a[orderBy] > b[orderBy] ? (order === "asc" ? 1 : -1) : 0
  );

  return (
    <Card sx={{ p: 3, borderRadius: 2, boxShadow: 2, height: "100%" }}>
      <Typography variant="h6" gutterBottom color="primary">All Members</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel active={orderBy === "name"} direction={order} onClick={() => handleSort("name")}>
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sorted.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((m, i) => (
              <TableRow key={i}>
                <TableCell>{m.name}</TableCell>
                <TableCell>{m.role}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={members.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={(e, newPage) => setPage(newPage)}
        onRowsPerPageChange={(e) => setRowsPerPage(parseInt(e.target.value, 10))}
        rowsPerPageOptions={[5]}
      />
    </Card>
  );
};

// FAQ Section
const FAQSection = () => (
  <Card sx={{ p: 3, borderRadius: 2, boxShadow: 2, height: "100%" }}>
    <Typography variant="h6" gutterBottom color="primary">
      Group Information
    </Typography>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>When did BLACKPINK debut?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>BLACKPINK debuted on August 8, 2016.</Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>What does BLACKPINK mean?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          The name means "pretty isn't everything" — contrasting beauty with a tough edge.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Card>
);

// Main App Layout
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Topbar />
      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
          mt: 8,
        }}
      >
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Typography variant="h4" fontWeight="bold">
            Dashboard Overview
          </Typography>
        </Box>

        {/* Main Content */}
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <Stack spacing={3}>
              <ProfileCard />
              <UsersList />
              <StatsCard />
            </Stack>
          </Grid>

          <Grid item xs={12} lg={5}>
            <Stack spacing={3}>
              <MembersTable />
            </Stack>
          </Grid>

          <Grid item xs={12} lg={3}>
            <Stack spacing={3}>
              <AvatarBadgeDemo />
              <FAQSection />
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;
