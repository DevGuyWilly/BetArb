import { Avatar, Rating, Stack, Typography, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export interface CardReviewProps {
  value: number;
  title: string;
  description: string;
  profileImg: string;
  userName: string;
}

const CardReview: React.FC<CardReviewProps> = ({
  value,
  title,
  description,
  profileImg,
  userName,
}) => {
  return (
    <Grid
      xs={4}
      sx={{
        padding: "20px",
      }}
      item
    >
      <Stack
        direction={"column"}
        sx={{
          padding: "20px",
          backgroundColor: "#2D2D2D",
          borderRadius: "20px",
        }}
      >
        <Rating
          readOnly
          value={value}
          name=""
          icon={
            <StarIcon
              style={{
                color: "white",
                marginRight: "3px",
                backgroundColor: "#FBC41D",
              }}
            />
          }
          emptyIcon={
            <StarIcon style={{ opacity: 0.55, backgroundColor: "white" }} />
          }
        />

        <p
          style={{
            fontSize: "24px",
            margin: "15px 0",
          }}
        >
          {title}
        </p>

        <p
          style={{
            fontSize: "18px",
            color: "#B9B9B9",
            margin: 0,
          }}
        >
          {description}
        </p>

        <Stack
          spacing={1.5}
          direction={"row"}
          display={"flex"}
          alignItems={"center"}
          margin={"20px 0"}
        >
          <Avatar src={profileImg} />
          <Typography>{userName}</Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default CardReview;
