import { Box, Typography } from "@mui/material";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 260,
        height: "100vh",
        bgcolor: "#0F172A",
        color: "white",
        p: 3,
      }}
    >
      <Typography variant="h5" fontWeight="bold">
        InsightFlow
      </Typography>
    </Box>
  );
}