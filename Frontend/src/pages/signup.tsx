import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
    Spinner
   
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { useRouter } from 'next/navigation';
  import Link from 'next/link'
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [mobile,setMobile] = useState("")
    const [loading,setLoading]=useState(false)

  const toast = useToast();
   const router=useRouter();

  const handleSignup=()=>{
    const payload={
      name,
      mobile,
      email,
      password,
      
  }
  setLoading(true)
  if(payload.mobile.length<10){
    setLoading(false)
    toast({
      title:"Invalid mobile number",
      description:"mobile number should be 10digits",
      status:"error",
      position:"top",
      duration:5000,
      isClosable:true,
    })
  } else {
    fetch("https://anxious-garment-pig.cyclic.app/users/register",{
              method:"POST",
              body:JSON.stringify(payload),
              headers:{
                  "Content-type":"application/json"
              }
          }).then(res=>res.json())
          .then(res=>{
          if(res.msg==="User already exists"){
            setLoading(false)
            toast({
              title:"Signup failed",
              description:"User already exist, Please login",
              status:"error",
              position:"top",
              duration:5000,
              isClosable:true,
            })
          router.push("/login")
            
          } else if(res.msg==="Registered"){
            setLoading(false)
            toast({
              title:"Signup successfull",
              description:"Account has been created, Please login",
              status:"success",
              position:"top",
              duration:5000,
              isClosable:true,
            })
  
            router.push("/login")
          } else {
            setLoading(false)
            toast({
              title:"Signup failed",
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
  
  }
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
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Full Name</FormLabel>
                    <Input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Full Name" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Mobile No</FormLabel>
                    <Input type="text" placeholder='Mobile No' value={mobile} onChange={(e)=>setMobile(e.target.value)} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" placeholder='Email Address' value={email} onChange={(e)=>setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
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
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} onClick={handleSignup}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Flex align={'center'} justify="center">
                  Already a user? <Link href='/login'><Text color={'blue.400'}>
                    Login</Text></Link>  
                </Flex>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }