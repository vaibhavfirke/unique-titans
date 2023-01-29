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
export const English = () => {
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
        English Learning Courses
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
              src="https://yt3.googleusercontent.com/ytc/AL5GRJUirZBiSevTBqZ21awykhnXbFfUSqKgXVe9LYr0nw=s176-c-k-c0x00ffffff-no-rj"
            />
          </Box>
          <Box p="20px">
            <Image src={"/utils/english1.PNG"} alt="error" />
            <Image src={"/utils/english2.PNG"} alt="error" />
            <Image src={"/utils/english3.PNG"} alt="error" />
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
              <span style={{ color: "red" }}> paid</span> Rs.999/6mo
            </Box>
            <Button>buy</Button>
            {/* https://www.awalenglish.com/spoken-english-course/?utm_source=google&utm_medium=se_search_generic_english_kwd_phase&utm_campaign=mofu_tsm_search+-+generic_kwd_phrase_se_course */}
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
              src="https://lwfiles.mycourse.app/masai-school-public/cb2e73bdfe4eb2741ea4b07b30b7c759.png"
            />
          </Box>
          <Box p="20px">
            <Image src={"/utils/EFM1.PNG"} alt="error" />
            <Image src={"/utils/EFM2.PNG"} alt="error" />
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
              Free
            </Box>
            <Button>https://dashboard.masaischool.com/#/self-learning</Button>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};
