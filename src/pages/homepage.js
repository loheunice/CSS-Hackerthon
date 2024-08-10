import { HStack, VStack } from "@chakra-ui/react"; 
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

export function Homepage() {
    return (
        <VStack>
            <Image
    boxSize='100px'
    objectFit='cover'
    Image src='https://lh3.google.com/u/0/d/1o0K_HL0ja7KUZSP_eiX2Pqhf4kQUaTAx=w1920-h946-iv2'
    alt='CSS Logo' />           
            <HStack>
                <Button colorScheme='blue'>CSS stuff</Button>
            </HStack>
        </VStack>
    )
}
