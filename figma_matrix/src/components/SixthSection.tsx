import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";

const SixthSection: React.FC = () => {
  const faqs = [
    {
      title: "What is EthAi?",
      content:
        "EthAi is a decentralized trading platform that allows users to trade cryptocurrencies and trade in the future.",
    },
    {
      title: "How can EthAi can help me as a Trader?",
      content:
        "EthAi is a decentralized trading platform that allows users to trade cryptocurrencies and trade in the future.",
    },
    {
      title: "Who can use EthAi?",
      content:
        "EthAi is a decentralized trading platform that allows users to trade cryptocurrencies and trade in the future.",
    },
    {
      title: "How does EthAi track smart money?",
      content: "EthAi tracks smart money on the Ethereum blockchain. ",
    },
    {
      title: "How does EthAi ensure data security?",
      content: "EthAi ensures data security by using smart contracts.",
    },
  ];

  return (
    <Box color={"white"} h={"500px"}>
      <Flex
        justify="center"
        align={{ base: "center", md: "center" }}
        h="100%"
        direction={{ base: "column", md: "row" }}
      >
        <Box
          width={{ base: "100%", md: "50%" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="40%"
        >
          <Text
            className="font-space font-normal"
            fontSize="30px"
            ml={[16, 0, 20, 12]}
          >
            Frequently Asked Questions
          </Text>
        </Box>

        <Box
          width={{ base: "100%", md: "50%" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="70%"
        >
          <Accordion allowMultiple width="80%" border="none">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} border="none">
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        {/* Flex container for icon and title */}
                        <Flex align="center" width="100%">
                          {/* Left-aligned icon */}
                          <Box className="text-navBorder">
                            {isExpanded ? (
                              <MinusIcon fontSize="12px" />
                            ) : (
                              <AddIcon fontSize="12px" />
                            )}
                          </Box>
                          {/* Title of the accordion section with added margin-top */}
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            ml={2}
                            className="font-space font-normal text-[16px]"
                            mt={index === 0 ? "20px" : "0px"} // Adds margin-top to the first question
                          >
                            {faq.title}
                          </Box>
                        </Flex>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      fontWeight={"400"}
                      fontSize={"16px"}
                      pb={4}
                      className="font-space font-normal text-[16px]"
                    >
                      {faq.content}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Flex>
    </Box>
  );
};

export default SixthSection;
