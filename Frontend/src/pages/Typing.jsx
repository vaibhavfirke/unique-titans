import React from "react";

import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  HStack,
  VStack,
  Button,
} from "@chakra-ui/react";
export const Typing = () => {
  return (
    <div>
      <Box
        style={{
          width: "100%",
          marginBottom: "20px",
          textAlign: "center",
          fontWeight: 700,
          fontSize: "22px",
        }}
      >
        Typing Courses
      </Box>

      <Grid templateColumns="repeat(2, 1fr)" gap={6} p="20px">
        <GridItem w="100%" h="auto" bg="blue.500">
          <Box
            p="5px"
            style={{
              width: "100%",

              display: "flex",
              justifyContent: "center",
              height: "150px",
            }}
          >
            <Image
              w="50%"
              h="100%"
              borderRadius="20px"
              src="https://static.typingclub.com/m/website/edclub-logo.png"
            />
          </Box>
          <Box p="20px">
            <Image src={"/utils/logot3.png"} alt="error" />
            <Image src={"/utils/T1.PNG"} alt="error" />
            <Image src={"/utils/T2.PNG"} alt="error" />
          </Box>
          <Box
            style={{
              width: "100%",
              marginBottom: "20px",
              textAlign: "center",
              fontWeight: 700,
              fontSize: "22px",
            }}
          >
            <Box
              borderRadius={"20px"}
              margin={"auto"}
              mb={"20px"}
              w={"10%"}
              bg={"green"}
            >
              Free
            </Box>
            <Button>https://www.edclub.com/library/typing-jungle</Button>
          </Box>
        </GridItem>
        <GridItem w="100%" h="auto" bg="blue.500">
          <Box
            p="5px"
            style={{
              width: "100%",

              display: "flex",
              justifyContent: "center",
              height: "150px",
            }}
          >
            <Image
              w="50%"
              h="100%"
              borderRadius="20px"
              src="https://i.pinimg.com/originals/55/af/4d/55af4d7a1a4f4d58506871ceaaff45d0.png"
            />
          </Box>
          <Box p="20px">
            <Image src={"/utils/tt1.PNG"} alt="error" />
            <Image src={"/utils/tt2.PNG"} alt="error" />
            <Image src={"/utils/tt3.PNG"} alt="error" />
          </Box>
          <Box
            style={{
              width: "100%",
              marginBottom: "20px",
              textAlign: "center",
              fontWeight: 700,
              fontSize: "22px",
            }}
          >
            <Box
              borderRadius={"20px"}
              margin={"auto"}
              mb={"20px"}
              w={"20%"}
              bg={"pink"}
            >
              <span style={{ color: "red" }}> paid</span> ₹ 1,695/yr
            </Box>
            <Button>https://www.edclub.com/library/typing-jungle</Button>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};
