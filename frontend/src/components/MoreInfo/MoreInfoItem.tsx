import { Container, Stack, Box, Typography } from "@mui/material";

export interface MoreInfoItermProps {
  id: number;
  title: string;
  points: string[];
  image: string;
}
const MoreInfoItem: React.FC<MoreInfoItermProps> = ({
  id,
  title,
  points,
  image,
}) => {
  let textDiv = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "50%",
        padding: "20px",
      }}
    >
      <Typography fontSize={"48px"} sx={{ padding: "10px" }}>
        {title}
      </Typography>

      <Stack direction={"column"} spacing={2} padding={"15px"}>
        {points.map((pt, index) => (
          <Stack
            key={index}
            direction={"row"}
            spacing={1}
            alignItems={"center"}
          >
            <img width={"25px"} height={"25px"} src="./bullet.png" alt="" />
            <Typography fontSize={"18px"}>{pt}</Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );

  let imageDiv = (
    <Box>
      <img width={"640px"} src={image} alt="" />
    </Box>
  );
  return (
    <>
      <Container>
        <Stack
          direction={id % 2 ? "row" : "row-reverse"}
          sx={{
            margin: "45px 0",
          }}
        >
          {textDiv}
          {imageDiv}
        </Stack>
      </Container>
    </>
  );
};

export default MoreInfoItem;
