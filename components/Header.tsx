import { Box, Group, SafeAreaView, Text, View } from "@ynssenem/lext";
import React from "react";
import layout from "../constants/layout";

const Header = () => {
  return (
    <SafeAreaView>
      {/* <Group
        style={{
          marginVertical: 20,
        }}
        justifyContent="space-around"
      >
        <Box
          width={layout.window.width / 2}
          backgroundColor="secondary"
          paddingVertical={2}
          style={{
            borderRadius: 25,
            opacity: 0.5,
          }}
        />
        <View
          style={{
            borderRadius: 25,
            height: 50,
            width: 50,
            backgroundColor: "#ff0000",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text fontSize={20} color="primary" textAlign="center">
            YN
          </Text>
        </View>
      </Group> */}
    </SafeAreaView>
  );
};

export default Header;
