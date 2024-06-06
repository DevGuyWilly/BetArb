import { Container, Stack, Typography } from "@mui/material";

export interface YoutubeProps {
  video: string;
}

const Youtube: React.FC<YoutubeProps> = ({ video }) => {
  return (
    <>
      <Container>
        <Stack
          direction={"column"}
          sx={{
            alignItems: "center",
            padding: "20px",
          }}
        >
          <Typography
            textAlign={"center"}
            padding={"10px"}
            fontSize={"48px"}
            fontWeight={"bold"}
          >
            Live Example
          </Typography>

          <video
            style={{
              borderRadius: "20px",
            }}
            width={"100%"}
            controls
          >
            <source src={video} type="video/mp4" />
          </video>
        </Stack>
      </Container>
    </>
  );
};

export default Youtube;
