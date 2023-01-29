import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Heading,
    Text,
    useColorModeValue,
    Button,
    InputRightElement,
    InputGroup,
    useToast,
    Spinner,
  } from '@chakra-ui/react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import Link from 'next/link'
  import { useRouter } from 'next/navigation';
  import {useEffect, useState}from "react"



  export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [reload,setReload]=useState(false)
    const toast = useToast();
    const router =useRouter()
    const [loading,setLoading]=useState(false)
    const handleLogin=()=>{
      const payload={
        email,
        password,
        
    }
    setLoading(true)
    
      fetch("https://anxious-garment-pig.cyclic.app/users/login",{
                method:"POST",
                body:JSON.stringify(payload),
                headers:{
                    "Content-type":"application/json"
                }
            }).then(res=>res.json())
            .then(res=>{
              localStorage.setItem("token",res.token)
              localStorage.setItem("user", JSON.stringify(res.userData) )
            if(res.msg==="Login Successfull"){
              setLoading(false)
              setReload(true)
              toast({
                title:"Login Successfull",
                description:"You are redirected to home page",
                status:"success",
                position:"top",
                duration:5000,
                isClosable:true,
              })
              router.push("/")
              
            } else if(res.msg==="wrong credential"){
              setLoading(false)
              toast({
                title:"Login failed",
                description:"Wrong credentials",
                status:"error",
                position:"top",
                duration:5000,
                isClosable:true,
              })
            } else if(res.msg==="Please Signup first"){
              setLoading(false)
              toast({
                title:"User not found",
                description:"Please Signup first",
                status:"error",
                position:"top",
                duration:5000,
                isClosable:true,
              })
            } else {
              setLoading(false)
              toast({
                title:"Login failed",
                description:"Something went wrong",
                status:"error",
                position:"top",
                duration:5000,
                isClosable:true,
              })
            }
            })
            .catch(err=>console.log(err)) 
      
    }

    useEffect(()=>{},[reload])
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
          
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          {loading?<Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
  display={"block"}
margin="auto"
/>:""}
        
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account ✌️</Heading>
            
          </Stack>
        
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email Address"/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'}  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10}>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} onClick={handleLogin}>
                Sign in
              </Button>
              <Flex align={'center'} justify="center">
                  Dont have account? <Link href='/signup'><Text color={'blue.400'}>
                    Register</Text></Link>  
                </Flex>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }