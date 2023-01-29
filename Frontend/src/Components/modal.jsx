import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
  } from '@chakra-ui/react'
  import { Heading, useDisclosure } from '@chakra-ui/react'
  import Chat from "../pages/chat"


  function ChatModal(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
     <Button h="45px" onClick={onOpen}  borderRadius="100px 100px 100px 0px" bg="red" color={"white"} position={"fixed"} top="80vh" left="90%" zIndex={5}>Ask your que</Button>
  
  <Modal isOpen={isOpen} onClose={onClose} size="xl">
    <ModalOverlay />
    <ModalContent>
      <ModalHeader color={"blue"}>Fill Free To  Share Your Query</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Chat/>
        <Heading fontSize={16} textAlign="center">You will be get your Answer soon..</Heading>
      </ModalBody>
  
      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose}>
          Close
        </Button>
       
      </ModalFooter>
    </ModalContent>
  </Modal>
      </>
    )
  }
  export default ChatModal;