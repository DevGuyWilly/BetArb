import { Box, Button, Container, Stack, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

export default function HeroSection() {
  return (
    <>
      <Box
        component={"div"}
        sx={{
          display: "flex",
          padding: "30px",
          height: "85vh",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            textAlign: "center",
            width: "90%",
          }}
        >
          <Typography fontSize={"86px"}>
            BetArb Finds and Calculates your
            <span style={{ color: "#E8F91F" }}> Surebets</span>
          </Typography>

          <Typography
            fontSize={"20px"}
            sx={{
              lineClamp: "3",
              width: "50%",
            }}
          >
            All you have to do is go to the bookmakers, place your stake and
            make a profit. Helps thousands of smart sport bettors with
            opportunities that guarantees daily profits.
          </Typography>

          <Button
            sx={{
              width: "300px",
              height: "50px",
              backgroundColor: "#E8F91F",
              color: "black",
              padding: "15px",

              "&:hover": {
                backgroundColor: "transparent",
                color: "#E8F91F",
                border: "1px solid #E8F91F",
              },
            }}
            variant="contained"
            startIcon={<PlayArrowIcon />}
          >
            See How it Works
          </Button>

          <Stack
            direction={"row"}
            sx={{
              alignItems: "center",
            }}
            spacing={2}
          >
            <AvatarGroup>
              <Avatar alt="" src="" />
              <Avatar alt="" src="" />
              <Avatar alt="" src="" />
              <Avatar alt="" src="" />
              <Avatar alt="" src="" />
            </AvatarGroup>
            <Typography> Used by 60,000+ People</Typography>
          </Stack>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating
              name="text-feedback"
              value={4}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box>4.0</Box>
          </Box>
          <Typography>From in-app review form</Typography>
        </Container>
      </Box>
    </>
  );
}
