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
export const Ui = () => {
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
        Ui/Ux Design Courses
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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/1200px-Coursera-Logo_600x600.svg.png"
            />
          </Box>
          <Box p="20px">
            <Image src={"/utils/coursa1.PNG"} alt="error" />
            <Image w="100%" src={"/utils/coursa2.PNG"} alt="error" />
            <Image src={"/utils/coursa3.PNG"} alt="error" />
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
              <span style={{ color: "red" }}> paid</span> ₹ 7,695/3mo
            </Box>
            <Button>https://in.coursera.org/specializations/ui-ux-design#faq</Button>
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
              src="https://i0.wp.com/iide.co/wp-content/uploads/2022/05/intellipat-logo.png?resize=235%2C94&ssl=1"
            />
          </Box>
          <Box p="20px">
            <Image src={"/utils/installer2.PNG"} alt="error" />
            <Image src={"/utils/installer1.PNG"} alt="error" />
            <Image src={"/utils/installer3.PNG"} alt="error" />
            <Image src={"/utils/installer4.PNG"} alt="error" />

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
              <span style={{ color: "red" }}> paid</span> ₹ 4,695/6mo
            </Box>
            <Button>https://www.edclub.com/library/typing-jungle</Button>
            {/* https://intellipaat.com/ui-ux-design-course-in-hyderabad/?US&utm_source=google&utm_medium=placement&utm_campaign=p_performance-max_generic_in_secondary_new */}
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};
