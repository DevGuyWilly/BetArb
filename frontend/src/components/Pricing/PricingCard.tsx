import { Box, Button, Stack, Typography } from "@mui/material";
import "./pricingcard.css";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

export interface PricingCardProps {
  backgroundColor: string;
  border: string | null;
  modelPlan: string | null;
  price: string | null;
  button: string | null;
  buttonBackgroundColor: string | null;
  middleSection: string[] | boolean[];
}

const PricingCard: React.FC<PricingCardProps> = ({
  backgroundColor,
  border,
  modelPlan,
  price,
  button,
  buttonBackgroundColor,
  middleSection,
}) => {
  return (
    <>
      <Stack
        direction={"column"}
        sx={{
          color: backgroundColor === "white" ? "black" : "white",
          border: { border },
          borderRadius: "20px",
          padding: "20px",
          height: "550px",
          width: "28%",
          backgroundColor: { backgroundColor },
        }}
      >
        {price ? (
          <Box className={"top card"}>
            <Typography
              sx={{
                paddingLeft: "20px",
                paddingTop: "10px",
              }}
              fontSize={"32px"}
            >
              {modelPlan}
            </Typography>
            <Typography
              sx={{
                paddingLeft: "20px",
              }}
            >
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "38px",
                }}
              >
                ${price}
              </span>{" "}
              /month
            </Typography>
          </Box>
        ) : (
          <Box className={"top card"}></Box>
        )}
        {middleSection.map((item, index) => (
          <Box
            className={"middle card"}
            key={index}
            sx={{
              display: "flex",
              height: "10%",
              alignItems: "center",
              borderBottom: "1px solid",
            }}
          >
            {typeof item === "string" ? (
              <>
                <Typography fontSize={"18px"}>{item}</Typography>
              </>
            ) : (
              <>
                {item ? (
                  <CheckIcon
                    sx={{
                      color: "#FBC41D",
                      marginRight: "5px",
                    }}
                  />
                ) : (
                  <CloseIcon
                    sx={{
                      marginRight: "5px",
                      color: "#EA4335",
                    }}
                  />
                )}
                <Typography fontSize={"18px"}>{item ? "Yes" : "No"}</Typography>
              </>
            )}
          </Box>
        ))}

        {price ? (
          <Box
            className={"bottom card"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                height: "40px",
                border: "1px solid",
                backgroundColor: buttonBackgroundColor,
                color: backgroundColor === "white" ? "black" : "white",
              }}
            >
              {button}
            </Button>
          </Box>
        ) : (
          <Box className={"bottom card"}></Box>
        )}
      </Stack>
    </>
  );
};

export default PricingCard;
