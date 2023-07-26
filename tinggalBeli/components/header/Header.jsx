import React from "react";
import { Box, AspectRatio, Image, Center, Flex, Spacer } from "native-base";
import { View } from "react-native";
// import Vector from 'assets/images/Vector.png'


export default function Header() {
    const headerImage = require("../../assets/images/header.png")
    const iconBell = require("../../assets/icons/Bell.png")
    return (
        <Box alignItems="center">
            <Box>
                <AspectRatio w="100%">
                    <Image resizeMode={"contain"} source={headerImage} alt="image" />
                </AspectRatio>
                <Box>
                    <Flex direction="row" justifyContent={"space-between"} bottom={220}>
                        <Center left={5}>
                            <Image size={30} alt="fallback text" borderRadius={100} borderColor={"white"} borderWidth={2} source={{
                                uri: "https://-page-icon.png"
                            }} fallbackSource={{
                                uri: "https://www.w3schools.com/css/img_lights.jpg"
                            }} />
                        </Center>
                        <Center right={4}>
                            <Image size={30} alt="fallback text" borderRadius={100} borderColor={"white"} borderWidth={2} source={iconBell} fallbackSource={iconBell} />
                        </Center>
                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}
