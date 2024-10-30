import { useState } from 'react';
import { VStack, HStack, IconButton, Image, Card, CardBody, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"

export function WhoAreWe() {
    const images = [
        { 
            src: 'https://th.bing.com/th/id/OIF.OV8zL19BfIi3B5YJd1fXKQ?w=180&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7', 
            name: 'Chuen Rae', 
            email: 'chuenrae@example.com',
            phone: '1234567890',
            instagram: '@chuenrae',
            facebook: '@chuenrae'
        },
        { 
            src: 'https://www.humanesociety.org/sites/default/files/2019/03/rabbit-475261_0.jpg', 
            name: 'Eunice', 
            email: 'eunice@example.com',
            phone: '0987654321',
            instagram: '@eunice',
            facebook: '@eunice'
        },
        { 
            src: 'https://i.pinimg.com/474x/c4/66/90/c466907bfa75c5598d6a193a589531a4.jpg', 
            name: 'Sanjana', 
            email: 'sanjana@example.com',
            phone: '1112223333',
            instagram: '@sanjana',
            facebook: '@sanjana'
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return(
        <VStack>
            <HStack>
                <IconButton
                    icon={<ChevronLeftIcon />}
                    aria-label="Previous image"
                    onClick={handlePrev}
                    variant="outline"
                    size="lg"
                />
                <VStack>
                    <Text fontSize="xl" fontWeight="bold" mt={4}>{images[currentIndex].name}</Text>
                    <Image
                        borderRadius='full'
                        boxSize='500px'
                        src={images[currentIndex].src}
                        alt={images[currentIndex].name}
                    />
                </VStack>
                <IconButton
                    icon={<ChevronRightIcon />}
                    aria-label="Next image"
                    onClick={handleNext}
                    variant="outline"
                    size="lg"
                />
            </HStack>

            <Card>
                <CardBody>
                    <Text fontWeight="bold">CONTACT US! (don't actually)</Text>
                    <Text>Email: {images[currentIndex].email}</Text>
                    <Text>Phone number: {images[currentIndex].phone}</Text>
                    <Text>Instagram: {images[currentIndex].instagram}</Text>
                    <Text>Facebook: {images[currentIndex].facebook}</Text>
                </CardBody>
            </Card>
        </VStack>
    );
}
