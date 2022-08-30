import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Box>
        <Typography variant="h1">Login page</Typography>
        <Button onClick={() => navigate("/")}>Go home</Button>
      </Box>
    </>
  );
}
