import { Container, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderTop: "1px solid",
          height: "300px",
        }}
        maxWidth={"xl"}
      >
        <Stack
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "space-around",
            padding: "30px",
          }}
          direction={"row"}
        >
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            direction={"row"}
            spacing={2}
          >
            <img width={"50px"} height={"50px"} src="/logo.png" alt="" />
            <Typography sx={{ fontWeight: "bold" }}>BETARB</Typography>
          </Stack>

          <Stack spacing={1}>
            <Typography color={"#737373"}>SUPPORT</Typography>
            <Typography>Pricing</Typography>
            <Typography>Help Center</Typography>
          </Stack>

          <Stack spacing={1}>
            <Typography color={"#737373"}>LEGAL</Typography>
            <Typography>Terms of service</Typography>
            <Typography>Privacy Policy</Typography>
            <Typography>Cookie policy</Typography>
          </Stack>

          <Stack spacing={1}>
            <Typography color={"#737373"}>CONTACT</Typography>
            <Typography>support@betarb.com</Typography>

            <Stack direction={"row"} spacing={1}>
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <YouTubeIcon />
              <LinkedInIcon />
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <Typography
        sx={{
          textAlign: "center",
          padding: "20px",
        }}
      >
        Copyright © 2024, BetArb.
      </Typography>
    </>
  );
}
