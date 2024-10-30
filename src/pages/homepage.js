import { HStack, VStack } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Flex } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { getFirestore, collection } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

export function Homepage() {
  

  return (
    
    <VStack>
      <HStack style={{ alignItems: "stretch" }}>
        <Card maxW='md' >
          <CardHeader>

            <Flex spacing='9' align='center'>
              <Flex direction="row" gap="4" justify="flex-start" h="full">
                <Avatar name='StareAtYou' src='zazu the cat.png' />
                <Box>
                  <Heading size='sm'>Chuen Rae</Heading>
                  <Text>Griffles institution</Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              i dont like organic chemistry too many functional groups alkanes alkenes arenes nitrogenous bases carboxylic derivatives halogen derivatives
            </Text>
          </CardBody>
          <Image
            objectFit='cover'
            src='enantiomers.jpeg'
            w="500px"
            h="205px"
          />

          <CardFooter
            justify='space-between'
            flexWrap='wrap'
            sx={{
              '& > button': {
                minW: '136px',
              },
            }}
          >
          </CardFooter>
        </Card>

        <Card maxW='md' >
          <CardHeader>

            <Flex spacing='4'>

              <Flex flex='1' gap='4' alignItems='top' flexWrap='wrap'>
                <Avatar name='Segun Adebayo' src='https://i.pinimg.com/originals/9f/fd/55/9ffd55b9fa78e4673c8190dce45d4a67.png' />

                <Box>
                  <Heading size='sm'>Eunice Loh</Heading>
                  <Text>A Hungry Student From Raffles Institution</Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              Have you ever been to the rumoured Professor Brawn Cafe in Raffles Institution?
              As a poor JAE who had been lured to raffles for its amazing food options, I am saddened to have never tried any food from Brawn Cafe.
              Hopefully it'll be opened before I leave this school ☹️

            </Text>
          </CardBody>
          <Image
            objectFit='cover'
            src='https://www.professorbrawn.sg/images/article-images/article-img-menu.jpg'
            alt='FOOD'
            w="500px"
            h="345px"
            alignItems={"center"}
          />

          <CardFooter
            justify='space-between'
            flexWrap='wrap'
            sx={{
              '& > button': {
                minW: '136px',
              },
            }}
          >
          </CardFooter>
        </Card>

        <Card maxW='md'>
          <CardHeader>
            <Flex spacing='4'>
              <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                <Avatar name='Sanjana' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvk01gK2CRQk9n62KsjWQymzEAOyfcLasRlQ&s' />

                <Box>
                  <Heading size='sm'>Sanjana</Heading>
                  <Text>Sad kid</Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>
              Pineapples belong on pizza
            </Text>
          </CardBody>
          <Image
            objectFit='cover'
            src='https://i1.sndcdn.com/artworks-btEZS3uZZbZlsOz5-loxvTg-t500x500.jpg'
            w="500px"
            h="405px"

          />

          <CardFooter
            justify='space-between'
            flexWrap='wrap'
            sx={{
              '& > button': {
                minW: '136px',
              },
            }}
          >
          </CardFooter>
        </Card>
      </HStack>
    </VStack>
  )
}

const BlogPosts = () => {
  const [value, loading, error] = useCollection(
    collection(getFirestore(firebaseApp), 'blog'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return (
    <div>
      <p>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>blog: Loading...</span>}
        {value && (
          <span>
            blog:{' '}
            {value.docs.map((doc) => (
             <Card maxW='md'>
             <CardHeader>
               <Flex spacing='4'>
                 <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                   <Avatar name='Sanjana' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvk01gK2CRQk9n62KsjWQymzEAOyfcLasRlQ&s' />
   
                   <Box>
                     <Heading size='sm'>Sanjana</Heading>
                     <Text>Sad kid</Text>
                   </Box>
                 </Flex>
               </Flex>
             </CardHeader>
             <CardBody>
               <Text>
                 Pineapples belong on pizza
               </Text>
             </CardBody>
             <Image
               objectFit='cover'
               src='https://i1.sndcdn.com/artworks-btEZS3uZZbZlsOz5-loxvTg-t500x500.jpg'
               w="500px"
               h="405px"
   
             />
   
             <CardFooter
               justify='space-between'
               flexWrap='wrap'
               sx={{
                 '& > button': {
                   minW: '136px',
                 },
               }}
             >
             </CardFooter>
           </Card>
            ))}
          </span>
        )}
      </p>
    </div>
  );
};