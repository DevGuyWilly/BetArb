import { Stack, Typography, Container } from "@mui/material";
import PricingCard from "./PricingCardList";

export default function Pricing() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        
      >
        <Stack
          sx={{
            textAlign: "center",
            marginBottom : "40px"
          }}
        >
          <Typography
            sx={{
              fontSize: "55px",
              fontWeight: "bold",
            }}
          >
            Pricings Plans
          </Typography>
          <Typography
            sx={{
              fontSize: "22px ",
              color: "#EAEAEA",
            }}
          >
            Find the best pricing plan for you
          </Typography>
        </Stack>

        <PricingCard />
      </Container>
    </>
  );
}
