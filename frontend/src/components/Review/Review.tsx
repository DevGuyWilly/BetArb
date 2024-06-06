import { Container, Stack, Typography, Grid } from "@mui/material";
import CardReview from "./CardReview";
import reviewData from "./reviewData";

export default function Review() {
  return (
    <>
      <Container>
        <Stack
          spacing={2}
          direction={"column"}
          sx={{
            padding: "20px",
          }}
        >
          <Typography
            textAlign={"center"}
            sx={{ padding: "10px", fontSize: "48px" }}
          >
            What Our Users Say
          </Typography>

          <Grid spacing={0} container>
            {reviewData.map((item, index) => (
              <CardReview
                description={item.description}
                profileImg={item.profileImg}
                title={item.title}
                value={item.value}
                userName={item.userName}
                key={index}
              />
            ))}
          </Grid>
        </Stack>
      </Container>
    </>
  );
}
