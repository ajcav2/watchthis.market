import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "block", background: "red" }}>
      <Button>Logo</Button>
      <Button variant="text" onClick={() => navigate("/login")}>
        Sign up
      </Button>
    </Box>
  );
}
