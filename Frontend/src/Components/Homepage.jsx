import React, { useState } from "react";
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
import Link from "next/link"
import { useEffect } from "react";

export const HomePage = () => {
  const[reload,setReload]=useState(false);
  useEffect(()=>{
    setReload(true)
  },[reload])
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
            objectFit={"cover"}
            padding="5px 5px 0px 5px"
            src="data:image/jpeg;base64,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"
          />
          <Text bg="teal" textAlign={"center"} fontWeight="900" fontSize="22px">
            {" "}
           English Learning Course
          </Text>
          <VStack bg="teal" h={"150px"}>
            {/* <Text color={"blue" } bg="teal" fontWeight="600" fontSize="20px" mt="20px">TechStack</Text>
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
            </HStack> */}
          
          </VStack>
          <Box bg="teal" borderBottomLeftRadius={"20px"} borderBottomRightRadius={"20px"} w={"100%"} margin="auto" display={"flex"} justifyContent="center" alignIte="center">
          <Button  mt="30px" color="red" ><Link href="/English">Find Best School To Learn English</Link></Button>
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
          <Button mt="30px" color="red"> <Link href="/ui">  Find Best School To Learn UI/UX Design </Link></Button>
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
          <Button mt="30px" color="red" ><Link href="/Frontend">Find Best School To Learn Fullstack Web Development Course</Link>  </Button>
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
          <Button  mt="30px" color="red"><Link href="/">Find Best School To Learn backend Development Course</Link> </Button>
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
          <Button  mt="30px" color="red"><Link href="/Typing">Find Best School To Learn UI/UX Design </Link></Button>
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
