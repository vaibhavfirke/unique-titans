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
export  default function Frontend () {
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
        Full Stack Develpment Courses
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
              src="https://entrackr-bucket.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/10/22001556/Masai-school-800x400.jpg"
            />
          </Box>
          <Box p="20px">
            <Image src={"/utils/mf2.PNG"} alt="error" />
            <Image w="100%" src={"/utils/mf1.PNG"} alt="error" />
            <Image src={"/utils/mf3.PNG"} alt="error" />
            <Image src={"/utils/mf4.PNG"} alt="error" />

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
              <span style={{ color: "red" }}> paid</span> ₹ 3,5000/After geting 5LPA job
            </Box>
            <Button><a href="https://www.masaischool.com/courses/full-stack-web-dev-part-time/" target="_blank" rel="noopener noreferrer">Enrole</a></Button>
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
              src="https://files.codingninjas.in/cn-logo-20692.svg"
            />
          </Box>
          <Box p="20px">
            <Image src={"/utils/cnf1.PNG"} alt="error" />
            <Image src={"/utils/cnf2.PNG"} alt="error" />
            <Image src={"/utils/cnf3.PNG"} alt="error" />
             

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
              <span style={{ color: "red" }}> paid</span>  👆
            </Box>
            <Button><a href="https://www.codingninjas.com/careercamp/professionals/?utm_source=google&utm_medium=[search]&utm_campaign=19312337481_144235770843_p_learn%20full%20stack%20web%20development__642136999415_c" target="_blank" rel="noopener noreferrer">Enrole</a></Button>
            {/* https://intellipaat.com/ui-ux-design-course-in-hyderabad/?US&utm_source=google&utm_medium=placement&utm_campaign=p_performance-max_generic_in_secondary_new */}
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
              src="https://assets.scaler.com/assets/academy/svg/scaler-53f7b55b0dc3a8f18264d872fd53821b101c3bb6c5c1b282e609e41bae2641a3.svg.gz"
            />
          </Box>
          <Box p="20px">
            <Image src={"/utils/sf1.PNG"} alt="error" />
            <Image src={"/utils/sf2.PNG"} alt="error" />
            <Image src={"/utils/sf3.PNG"} alt="error" />
             

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
              <span style={{ color: "red" }}> paid</span> Rs 299,000/After geting job  👆
            </Box>
            <Button><a href="https://www.scaler.com/courses/full-stack-developer/" target="_blank" rel="noopener noreferrer">Enrole</a></Button>
            {/* https://intellipaat.com/ui-ux-design-course-in-hyderabad/?US&utm_source=google&utm_medium=placement&utm_campaign=p_performance-max_generic_in_secondary_new */}
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};
