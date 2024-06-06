import { Box, Container, Typography } from "@mui/material";
import MoreInfoItem from "./MoreInfoItem";
import infoData from "./infoData";
import Youtube from "./Youtube";

export default function MoreInfo() {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"}>
        <Container>
          <Typography
            textAlign={"center"}
            fontSize={"48px"}
            fontWeight={"bold"}
            padding={"20px"}
          >
            How BetArb Works
          </Typography>
        </Container>
        {infoData.map((item, index) => (
          <MoreInfoItem
            key={index}
            id={item.id}
            title={item.title}
            points={item.points}
            image={item.image}
          />
        ))}
        <Youtube video="" />
      </Box>
    </>
  );
}
