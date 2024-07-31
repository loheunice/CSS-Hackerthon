import { HStack, VStack } from "@chakra-ui/react"; 
import { Button, ButtonGroup } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/react'


export function Homepage() {
    return (
        <VStack>
            <Box boxSize='sm'>
                <Image src='https://bit.ly/dan-abramov' alt='CSS Logo' />           
            </Box>
            <HStack>
                <PhoneIcon />
                <AddIcon boxSize={6} />
                <WarningIcon w={8} h={8} color="red.500" />
                <Button colorScheme='blue'>Button</Button>
            </HStack>
        </VStack>
    )
}
