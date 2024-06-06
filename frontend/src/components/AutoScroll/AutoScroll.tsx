import { Stack, Box, Container } from "@mui/material";
import "./autoscroll.css";
import imageData from "./imageData";

export default function AutoScroll() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          height: "200px",
          position: "relative",
          justifyContent: "space-around",
          overflow: "hidden",
        }}
      >
        <Box sx={{ display: "flex", animation: "scroll 20s linear infinite" }}>
          {imageData.map((item, index) => (
            <Stack
              key={index}
              sx={{
                width: "20%",
                animation: "scroll 20s linear infinite",
              }}
              className="brand"
            >
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="brandImage"
                key={item.id}
              >
                <img width={"200px"} src={item.src} alt={item.title} />
              </Box>
            </Stack>
          ))}
        </Box>
      </Container>
    </>
  );
}
