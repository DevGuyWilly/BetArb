import AutoScroll from "../../components/AutoScroll/AutoScroll";
import HeroSection from "../../components/HeroSection/HeroSection";
import MoreInfo from "../../components/MoreInfo/MoreInfo";
import NavBar from "../../components/NavBar/NavBar";
import { Box } from "@mui/material";
import Review from "../../components/Review/Review";
import PricingList from "../../components/Pricing/Pricing";
import Faq from "../../components/FAQ/Faq";
import CreateAccount from "../../components/CreateAccount/CreateAccount";
import Footer from "../../components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Box>
        <NavBar />
        <HeroSection />
        <AutoScroll />
        <MoreInfo />
        <Review />
        <PricingList />
        <Faq />
        <CreateAccount />
        <Footer />
      </Box>
    </>
  );
}
