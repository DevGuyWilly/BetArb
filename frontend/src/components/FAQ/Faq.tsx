import {
  Container,
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./faq.css";

export default function Faq() {
  return (
    <>
      <Container
        sx={{
          marginTop: "40px",
        }}
      >
        <Stack
          direction={"column"}
          textAlign={"center"}
          sx={{
            color: "white",
          }}
        >
          <Typography fontSize={"55px"} fontWeight={"bold"}>
            Frequently asked Question
          </Typography>

          <Typography fontSize={"22px"}>
            Get quick answers to your questions about BetArb
          </Typography>

          <Stack direction={"column"} spacing={2} marginTop={5}>
            <Accordion
              sx={{
                border: "1px solid white",
                backgroundColor: "transparent",
                color: "white",
              }}
            >
              <AccordionSummary
                sx={{
                  color: "#FFFFFF",
                }}
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              >
                How does BetArb work?
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                border: "1px solid white",
                backgroundColor: "transparent",
                color: "white",
              }}
            >
              <AccordionSummary
                sx={{ color: "#FFFFFF" }}
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
              >
                Will I win everyday?
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                border: "1px solid white",
                backgroundColor: "transparent",
                color: "white",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                sx={{ color: "#FFFFFF" }}
              >
                Difference between Gambling & Arbitrage Betting
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                border: "1px solid white",
                backgroundColor: "transparent",
                color: "white",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                sx={{ color: "#FFFFFF" }}
              >
                How does BerArb make me money?
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                border: "1px solid white",
                backgroundColor: "transparent",
                color: "white",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                sx={{ color: "#FFFFFF" }}
              >
                What sports and events can I bet on with BetArb
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
