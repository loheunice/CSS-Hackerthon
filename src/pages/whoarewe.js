import { useState } from 'react';
import { VStack, HStack, IconButton, Image, Card, CardBody, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"

export function WhoAreWe() {
    const images = [
        { 
            src: 'https://bit.ly/dan-abramov', 
            name: 'Chuen Rae', 
            email: 'chuenrae@example.com',
            phone: '1234567890',
            instagram: '@chuenrae',
            facebook: '@chuenrae'
        },
        { 
            src: 'https://bit.ly/ryan-florence', 
            name: 'Eunice', 
            email: 'eunice@example.com',
            phone: '0987654321',
            instagram: '@eunice',
            facebook: '@eunice'
        },
        { 
            src: 'https://bit.ly/kent-c-dodds', 
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
