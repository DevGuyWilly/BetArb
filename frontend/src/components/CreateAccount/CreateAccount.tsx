import { Container, Box, Typography, Button, Stack } from "@mui/material";

export default function CreateAccount() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "40px",
          justifyContent: "center",
          alignItems: "center",
          height: "600px",
          position: "relative",
          marginBottom: "40px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0",
            bottom: "0",
          }}
        >
          <img width={"480px"} src="/Group.png" alt="" />
        </Box>

        <Box
          sx={{
            display: "flex",
            height: "300px",
            borderRadius: "25px",
            backgroundColor: "#E8F91F",
            width: "1200px",
            position: "absolute",
            zIndex: "100",
            bottom: "0",
          }}
        >
          <Stack
            direction={"column"}
            spacing={2}
            sx={{
              color: "black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography fontSize={"28px"} width={"750px"}>
              BetArbs finds you arbitrage opportunities on a daily biasis!
            </Typography>
            <Button
              sx={{
                backgroundColor: "black",
                color: "white",
                padding: "20px",
                fontSize: "15px",
              }}
            >
              Create an Account
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
