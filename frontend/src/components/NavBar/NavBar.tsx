import { Container, Stack, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./navbar.css";
import { NavData } from "./NavData";

export default function NavBar() {
  return (
    <>
      <Container maxWidth="xl">
        <Box component={"nav"} display={"flex"} justifyContent={"space-around"}>
          <Stack
            direction={"row"}
            display={"flex"}
            justifyContent={"space-around"}
            width={"200px"}
          >
            <Link
              className="link"
              to={"/"}
              style={{
                width: "100%",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <img src="./logo.png" alt="logo" />
              <h2>BETARB</h2>
            </Link>
          </Stack>

          <Stack
            direction={"row"}
            spacing={2}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {NavData.map((data, index) => (
              <Link
                style={{
                  fontSize: "20px",
                }}
                key={index}
                className="link"
                to={data.path}
              >
                {data.title}
              </Link>
            ))}
          </Stack>

          <Stack
            direction={"row"}
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "300px",
            }}
          >
            <Button
              sx={{
                color: "#E8F91F",
                border: "1px solid #E8F91F",
                width: "50%",
                "&:hover": {
                  color: "black",
                  backgroundColor: "#E8F91F",
                  border: "none",
                },
              }}
              LinkComponent={"a"}
              href="/signup"
              variant="outlined"
            >
              Get Started
            </Button>
            <Button
              sx={{
                color: "black",
                backgroundColor: "#E8F91F",
                width: "50%",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#E8F91F",
                  border: "1px solid #E8F91F",
                },
              }}
              LinkComponent={"a"}
              href="/login"
              variant="contained"
            >
              Login
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
