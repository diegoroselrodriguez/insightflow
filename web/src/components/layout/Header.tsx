import { Box, Typography } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        height: 70,
        bgcolor: "white",
        display: "flex",
        alignItems: "center",
        px: 4,
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <Typography variant="h6">
        Dashboard
      </Typography>
    </Box>
  );
}