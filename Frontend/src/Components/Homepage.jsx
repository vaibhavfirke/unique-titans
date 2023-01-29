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
export const HomePage = () => {
  return (
    <Box
      style={{
        padding: "50px",
        margin: "auto",
       
      }}
    >
      <Box
        style={{
          width: "100%",
          marginBottom: "20px",
          textAlign: "center",
          fontWeight: 700,
          fontSize: "22px",
        }}
      >
        After Graduation Course
      </Box>

      <marquee width="1400px" height="230px" scrollamount="12" hspace="60">
        <Box style={{ display: "flex" }}>
          <img
            style={{
              marginRight: "40px",
              borderRadius: "10%"
            }}
            src="https://ddi-dev.com/uploads/backend-is.png"
            width={"250px"}
            height="200px"
            
          />

          <img
            style={{
              marginRight: "40px",
              borderRadius: "10%"
            }}
            src="https://spiderimg1.safalta.com/assets/images/safalta.com/2022/09/23/750x506/saf_1663940649.jpeg"
            width={"250px"}
            height="200px"
          />

          <img
            style={{
              marginRight: "40px",
              borderRadius: "10%"
            }}
            src="https://www.interviewbit.com/blog/wp-content/uploads/2021/08/2.jpg"
            width={"250px"}
            height="200px"
          />
          <img
            style={{
              marginRight: "40px",
              borderRadius: "10%"
            }}
            src="https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct/What-is-UI-UX-Design.jpg"
            width={"250px"}
            height="200px"
          />
          <img
            style={{
              marginRight: "40px",
              borderRadius: "10%"
            }}
            src="https://cdn.educba.com/academy/wp-content/uploads/2019/11/full-stack-web-developer.png"
            width={"250px"}
            height="200px"
          />
          <img
            style={{
              marginRight: "40px",
              borderRadius: "10%"
            }}
            src="https://asha24.net/images/thumbnails/data_analytics.jpg"
            width={"250px"}
            height="200px"
          />
          <img
            style={{
              marginRight: "40px",
              borderRadius: "10%"
            }}
            src="http://media.webdunia.com/_media/hi/img/article/2018-05/07/full/1525681413-8482.jpg"
            width={"250px"}
            height="200px"
          />
          <img
            style={{
              marginRight: "40px",
              borderRadius: "10%"
            }}
            src="https://cdn1.byjus.com/wp-content/uploads/2019/07/Bank-Exams-2.png"
            width={"250px"}
            height="200px"
          />
        </Box>
      </marquee>

      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      <GridItem w="100%" h="650" bg="teal" borderRadius={"20px"}>
          <Image
            h="60%"
            w="100%"
            bg="teal"
            borderRadius="20px"
            padding="5px 5px 0px 5px"
            src="https://img.freepik.com/premium-vector/search-data-analytics-logo-design-growth-arrow-logo-design-data-finance-investment-icon-design_144543-1398.jpg?w=2000"
          />
          <Text bg="teal" textAlign={"center"} fontWeight="900" fontSize="22px">
            {" "}
            Data Analytics Course
          </Text>
          <VStack bg="teal" h={"150px"}>
            <Text color={"blue" } bg="teal" fontWeight="600" fontSize="20px" mt="20px">TechStack</Text>
            <HStack bg="teal" h={"100px"} gap="50px">
              <Image
                w="80px"
                h="80px"
                borderRadius="20px"
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png"
              />
              <Image
                w="80px"
                h="80px"
                borderRadius="20px"
                src="https://cdn-icons-png.flaticon.com/512/888/888850.png"
              />
              <Image
                w="80px"
                borderRadius="20px"
                h="80px"
                src="https://banner2.cleanpng.com/20180620/vvv/kisspng-sql-computer-icons-document-file-format-5b2a12c312e667.3194279415294839710774.jpg"
              />
              <Image
                w="80px"
                borderRadius="20px"
                h="80px"
                src="https://cdn.w600.comps.canstockphoto.com/machine-learning-circuit-board-head-illustration_csp91027026.jpg"
              />
            </HStack>
          
          </VStack>
          <Box bg="teal" borderBottomLeftRadius={"20px"} borderBottomRightRadius={"20px"} w={"100%"} margin="auto" display={"flex"} justifyContent="center" alignIte="center">
          <Button  mt="30px" color="red" >Find Best School To Learn Data Analytics</Button>
          </Box>
        </GridItem>

        <GridItem  w="100%" h="650" bg="teal" borderRadius={"20px"}>
          <Image
            h="60%"
            w="100%"
            bg="teal"
            borderRadius="20px"
            padding="5px 5px 0px 5px"
            src="https://www.exposit.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/12/Blog_cover-109-2048x773.jpeg.webp"
          />
          <Text bg="teal" textAlign={"center"} fontWeight="900" fontSize="22px">
            {" "}
           UI/UX Design Course
          </Text>
          <VStack bg="teal" h={"150px"}>
            <Text bg="teal" color={"blue" } fontWeight="600" fontSize="20px" mt="20px">TechStack</Text>
            <HStack bg="teal" h={"100px"} gap="50px">
                <Image
                w="80px"
                borderRadius="20px"
                h="80px"
                src="https://logos-world.net/wp-content/uploads/2021/11/Canva-New-Logo.png"
              />
              <Image
                w="80px"
                borderRadius="20px"
                h="80px"
                src="https://miro.medium.com/max/1200/1*RWriD6Jy4Ssd0rFjhLNt_w.png"
              />
            </HStack>
            
          </VStack>
          <Box bg="teal" borderBottomLeftRadius={"20px"} borderBottomRightRadius={"20px"} w={"100%"} margin="auto" display={"flex"} justifyContent="center" alignIte="center">
          <Button mt="30px" color="red">Find Best School To Learn UI/UX Design </Button>
          </Box>
        </GridItem>

        <GridItem w="100%" h="650" bg="teal" borderRadius={"20px"}>
          <Image
            h="60%"
            w="100%"
            bg="teal"
            borderRadius="20px"
            padding="5px 5px 0px 5px"
            src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210222183454/How-to-Become-a-Full-Stack-Web-Developer-in-2021.png"
          />
          <Text bg="teal" textAlign={"center"} fontWeight="900" fontSize="22px">
            Fullstack Web Development Course
          </Text>
          <VStack bg="teal" h={"150px"}>
            <Text bg="teal" color={"blue" } fontWeight="600" fontSize="20px" mt="20px">TechStack</Text>
            <HStack bg="teal" h={"100px"} gap="50px">
              <Image
                w="80px"
                h="80px"
                borderRadius="20px"
                src="https://banner2.cleanpng.com/20180425/jrw/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e2a4242.1423638015246930701731.jpg"
              />
                
                <Image
                w="80px"
                h="80px"
                borderRadius="20px"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPW5lh_jmLrODqfqh8BqVVtN9O8g5ExNlX6A&usqp=CAU"
                
              />
               
               <Image
                w="80px"
                h="80px"
                borderRadius="20px"
                src="https://aws1.discourse-cdn.com/sitepoint/original/3X/b/5/b59a78e2ed76c705f3c0dcb300f3f222aefdcd99.png"
                
              />
              <Image
                w="80px"
                h="80px"
                borderRadius="20px"
                src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"
              />
              <Image
                w="80px"
                borderRadius="20px"
                h="80px"
                src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
              />
               
            </HStack>
            
          </VStack>
          <Box bg="teal" borderBottomLeftRadius={"20px"} borderBottomRightRadius={"20px"} w={"100%"} margin="auto" display={"flex"} justifyContent="center" alignIte="center">
          <Button mt="30px" color="red" >Find Best School To Learn Fullstack Web Development Course </Button>
          </Box>
        </GridItem>

        <GridItem w="100%" h="650" bg="teal" borderRadius={"20px"}>
          <Image
            h="60%"
            bg="teal"
            w="100%"
            borderRadius="20px"
            padding="5px 5px 0px 5px"
            src="https://cdn.appuals.com/wp-content/uploads/2020/06/intro.jpg.webp"
          />
          <Text bg="teal" textAlign={"center"} fontWeight="900" fontSize="22px">
            {" "}
           Learn Git Bash Course
          </Text>
          <VStack bg="teal" h={"150px"}>
            <Text bg="teal" color={"blue" } fontWeight="600" fontSize="20px" mt="20px">TechStack</Text>
            <HStack bg="teal" h={"100px"} gap="50px">
              <Image
                w="80px"
                h="80px"
                borderRadius="20px"
                src="https://i.ytimg.com/vi/iGT9LmDPp3g/hqdefault.jpg"
              />
              <Image
                w="80px"
                h="80px"
                borderRadius="20px"
                src="https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-ar21.png"
              />
               
            </HStack>
            
          </VStack>
          <Box bg="teal" borderBottomLeftRadius={"20px"} borderBottomRightRadius={"20px"} w={"100%"} margin="auto" display={"flex"} justifyContent="center" alignIte="center">
          <Button mt="30px" color="red">Find Best School To Learn UI/UX Design </Button>
          </Box>
        </GridItem>

        <GridItem w="100%" h="650" bg="teal" borderRadius={"20px"}>
          <Image
            h="60%"
            w="100%"
            bg="teal"
            borderRadius="20px"
            padding="5px 5px 0px 5px"
            src="https://ddi-dev.com/uploads/backend-is.png"
          />
          <Text bg="teal" textAlign={"center"} fontWeight="900"  fontSize="22px">
            
            Backend developer Course
          </Text>
          <VStack bg="teal" h={"150px"}>
            <Text bg="teal" color={"blue" } fontWeight="600" fontSize="20px" mt="20px">TechStack</Text>
            <HStack bg="teal" h={"100px"} gap="50px">
              <Image
                w="80px"
                h="80px"
                borderRadius="20px"
                src="https://banner2.cleanpng.com/20180425/jrw/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e2a4242.1423638015246930701731.jpg"
              />
              <Image
                w="80px"
                h="80px"
                borderRadius="20px"
                src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png"
              />
              <Image
                w="80px"
                borderRadius="20px"
                h="80px"
                src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
              />
              <Image
                w="80px"
                borderRadius="20px"
                h="80px"
                src="https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png"
              />
            </HStack>
             
          </VStack>
          <Box bg="teal" borderBottomLeftRadius={"20px"} borderBottomRightRadius={"20px"} w={"100%"} margin="auto" display={"flex"} justifyContent="center" alignIte="center">
          <Button  mt="30px" color="red">Find Best School To Learn backend Development Course </Button>
          </Box>
        </GridItem>
         
        <GridItem w="100%" h="650" bg="teal" borderRadius={"20px"}>
          <Image
            h="60%"
            bg="teal"
            w="100%"
            borderRadius="20px"
            padding="5px 5px 0px 5px"
            src="https://play-lh.googleusercontent.com/ExDTkj28UNpnc4ywetwmyei6oUj2hj-00eBilho3_Gu0HPDBg2vIrP52AE5vOj9ZSfZd"
          />
          <Text bg="teal" textAlign={"center"} fontWeight="900" fontSize="22px">
             Typing Course
          </Text>
          <VStack bg="teal" h={"150px"}>
            <Text bg="teal" color={"blue" } fontWeight="600" fontSize="20px" mt="20px">TechStack</Text>
            <HStack bg="teal" h={"100px"} gap="50px">
              <Image
                w="80px"
                h="80px"
                borderRadius="20px"
                src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/gg1kisjv4xk1mrjzbdmx"
              />
              <Image
                w="80px"
                h="80px"
                borderRadius="20px"
                src="https://storage.googleapis.com/cloudprod-apiai/bae5322f-af81-4d33-bea2-e619551384d2_x.png"
              />
               
            </HStack>
            
          </VStack>
          <Box bg="teal" borderBottomLeftRadius={"20px"} borderBottomRightRadius={"20px"} w={"100%"} margin="auto" display={"flex"} justifyContent="center" alignIte="center">
          <Button  mt="30px" color="red">Find Best School To Learn UI/UX Design </Button>
          </Box>
        </GridItem>
 
      </Grid>

      <Box
        style={{
          width: "100%",
          marginTop:"50px",
          marginBottom: "20px",
          textAlign: "center",
          fontWeight: 700,
          fontSize: "22px",
        }}
      >
        Top online Schools
      </Box>

      <marquee width="1400px" height="230px" scrollamount="12" hspace="60">
        <Box style={{ display: "flex" }}>
          <img
            style={{
              marginRight: "40px",
              borderRadius: "10%"
            }}
            src="https://d27028dliefpk3.cloudfront.net/brand/masai-school.png"
            width={"250px"}
            height="200px"
          />

          <img
            style={{
              marginRight: "40px",
              borderRadius: "10%"
            }}
            src="https://cdn.uxhack.co/product_logos/Newton_School.png"
            width={"250px"}
            height="200px"
          />

          <img
            style={{
              marginRight: "40px",
              borderRadius: "10%"
            }}
            src="https://static.theprint.in/wp-content/uploads/2021/11/coding-ninjas-announces-coding-competition-code-kaze.jpg?compress=true&quality=80&w=800&dpr=1.3"
            width={"250px"}
            height="200px"
          />
          <img
            style={{
              marginRight: "40px",
              borderRadius: "10%"
            }}
            src="https://d16pnh712pyiwa.cloudfront.net/wp-content/uploads/2021/05/Scaler-Academy.png"
            width={"250px"}
            height="200px"
          />
          <img
            style={{
              marginRight: "40px",
              borderRadius: "10%"
            }}
            src="https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo-2017-2021.png"
            width={"250px"}
            height="200px"
          />

          <img
            style={{
              marginRight: "40px",
              borderRadius: "10%"
            }}
            src="https://logos-world.net/wp-content/uploads/2021/08/Byjus-Symbol.png"
            width={"250px"}
            height="200px"
          />
          <img
            style={{
              marginRight: "40px",
              borderRadius: "10%"
            }}
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Symbol.png"
            width={"250px"}
            height="200px"
          />
        </Box>
      </marquee>
    </Box>


  );
};
