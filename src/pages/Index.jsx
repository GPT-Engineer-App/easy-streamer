import { Container, VStack, Heading, Text, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaVideo, FaMicrophone, FaBolt, FaDollarSign } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch" w="100%">
        <Box textAlign="center" py={10} bg="gray.100" borderRadius="md">
          <Heading as="h1" size="2xl" mb={4}>
            Camthis
          </Heading>
          <Text fontSize="xl" mb={6}>
            Easily stream live events from multiple angles
          </Text>
          <Button colorScheme="teal" size="lg">
            Get Started
          </Button>
        </Box>

        <Flex direction={{ base: "column", md: "row" }} py={10} justify="space-around" align="center">
          <Box textAlign="center" maxW="sm" p={4}>
            <FaVideo size="3em" color="teal" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Multiple Angles
            </Heading>
            <Text>Stream live events from multiple camera angles seamlessly.</Text>
          </Box>
          <Box textAlign="center" maxW="sm" p={4}>
            <FaMicrophone size="3em" color="teal" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Great Audio Quality
            </Heading>
            <Text>Experience crystal clear audio quality for your live streams.</Text>
          </Box>
          <Box textAlign="center" maxW="sm" p={4}>
            <FaBolt size="3em" color="teal" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Quick Setup
            </Heading>
            <Text>Get started with minimal setup time and effort.</Text>
          </Box>
          <Box textAlign="center" maxW="sm" p={4}>
            <FaDollarSign size="3em" color="teal" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Easy Monetization
            </Heading>
            <Text>Charge your audience effortlessly and maximize your revenue.</Text>
          </Box>
        </Flex>

        <Box textAlign="center" py={10} bg="gray.100" borderRadius="md">
          <Heading as="h2" size="xl" mb={4}>
            Why Choose Camthis?
          </Heading>
          <Text fontSize="lg" mb={6}>
            Camthis offers a seamless and professional live streaming experience with minimal setup and maximum impact.
          </Text>
          <Button colorScheme="teal" size="lg">
            Learn More
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;