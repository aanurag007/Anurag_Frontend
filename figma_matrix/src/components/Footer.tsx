import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  VisuallyHidden,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  FaTelegramPlane,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaFacebookF,
} from "react-icons/fa";

// Social Button Component
const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={10} // Adjusted to match image size
      h={10} // Adjusted to match image size
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

// Footer Component
export default function Footer() {
  return (
    <Box className="bg-[#010e14] mt-[70px]" color={"white"}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }} // Two columns layout for left and right parts
          spacing={10}
          alignItems="center"
        >
          {/* Left Side: EthAi Logo and Social Media Icons */}
          <Stack spacing={6} align={"flex-start"}>
            <Box>
              <div className="flex items-center gap-[10px]">
                {/* EthAi logo container */}
                <div className="grid grid-cols-3 gap-[1px] p-2 max-w-max">
                  <div className="w-[11.31px] h-[11.31px] bg-logoBg1 rounded-tr-[100px]"></div>
                  <div className="w-[11.31px] h-[11.31px] bg-logoBg2"></div>
                  <div className="w-[11.31px] h-[11.31px] bg-logoBg2 rounded-tr-[100px]"></div>
                  <div className="w-[11.31px] h-[11.31px] bg-logoBg2"></div>
                  <div className="w-[11.31px] h-[11.31px] bg-none"></div>
                  <div className="w-[11.31px] h-[11.31px] bg-logoBg2"></div>
                  <div className="w-[11.31px] h-[11.31px] bg-logoBg2 rounded-bl-[100px]"></div>
                  <div className="w-[11.31px] h-[11.31px] bg-logoBg1 rounded-br-[100px]"></div>
                  <div className="w-[11.31px] h-[11.31px] bg-logoBg2 rounded-bl-[100px]"></div>
                </div>
                {/* EthAi Text */}
                <div className="text-[24px] font-bold leading-[22px] tracking-[-0.03px] text-white font-play">
                  EthAi
                </div>
              </div>
            </Box>

            {/* Social Media Icons */}
            <Stack direction={"row"} spacing={4}>
              <SocialButton label={"Telegram"} href={"#"}>
                <FaTelegramPlane />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
              <SocialButton label={"X"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"Facebook"} href={"#"}>
                <FaFacebookF />
              </SocialButton>
              <SocialButton label={"Discord"} href={"#"}>
                <FaDiscord />
              </SocialButton>
            </Stack>
          </Stack>

          {/* Right Side: Quote and Email Input */}
          <Stack align={"flex-end"} spacing={4}>
            {/* Quote */}
            <h1 className="text-[32px] lg:text-[32px] md:text-[24px] font-bold text-white font-space">
              “Designed for traders of today, just like you.”
            </h1>
            {/* Email Input */}
            <div className="flex items-center">
              <div className="relative w-full max-w-[520px] h-[50px] border-[1px] border-white rounded-[12px] p-[2px]">
                <input
                  type="email"
                  placeholder="What’s your work email?"
                  className="w-full h-[44px] pl-4 pr-24 rounded-[12px] bg-footerBg text-white focus:bg-whiteAlpha-200 border-none"
                />
                <button className="absolute inset-y-0 right-0 h-[42px] px-6 text-white bg-dApp border border-dAppBorder rounded-[12px] hover:bg-navButtonColor hover:text-black hover:font-medium mt-1 mr-1 mb-1">
                  Get Started
                </button>
              </div>
            </div>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
