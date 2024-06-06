import { Box } from "@mui/material";
import PricingCard from "./PricingCard";

const pricingCardDetail = [
  {
    middleSection: [
      "Bet Tracker",
      "Deposit/Withdrawal Tracker",
      "Personal stat & Analytics",
      "Real time Alert",
      "Arbitrage Tools",
    ],
    modelPlan: null,
    price: null,
    button: null,
    buttonBackgroundColor: null,
    backgroundColor: "transparent",
    border: null,
  },
  {
    middleSection: [true, true, false, false, false],
    modelPlan: "Free",
    price: "0",
    button: "Get Started - its Free",
    buttonBackgroundColor: "#FFFFFF",
    backgroundColor: "white",
    border: "none",
  },
  {
    middleSection: [true, true, true, true, true],
    modelPlan: "Premium",
    price: "60",
    button: "Get Started",
    buttonBackgroundColor: "#FBC41D",
    backgroundColor: "#0D0D0D",
    border: "1px solid #2C2C2D",
  },
];

export interface PricingCardProps {}

const PricingCardList: React.FC<PricingCardProps> = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "20px",
        }}
      >
        {pricingCardDetail.map((item, index) => (
          <PricingCard
            backgroundColor={item.backgroundColor}
            border={item.border}
            button={item.button}
            buttonBackgroundColor={item.buttonBackgroundColor}
            middleSection={item.middleSection}
            modelPlan={item.modelPlan}
            price={item.price}
            key={index}
          />
        ))}
      </Box>
    </>
  );
};

export default PricingCardList;
