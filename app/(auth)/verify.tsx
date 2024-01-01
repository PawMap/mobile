import {
  Anchor,
  Box,
  Button,
  SafeAreaView,
  Stack,
  Text,
  TextInput,
  useLoadingOverlay,
} from "@ynssenem/lext";
import React, { useEffect, useState } from "react";
import { ImageBackground } from "react-native";
import layout from "../../constants/layout";
import { useRouter } from "expo-router";

const Verify = () => {
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(60);
  const { setLoading } = useLoadingOverlay();
  const router = useRouter();

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
  }, [timer]);

  const handleVerify = () => {
    if (!code) return;
    console.log("verify");
    router.push("/(tabs)");
  };

  return (
    <ImageBackground
      source={require("../../assets/images/pawmap.png")}
      style={{
        flex: 1,
      }}
    >
      <SafeAreaView backgroundColor={null}>
        <Stack justifyContent="center" flex={1}>
          <Box gap={20}>
            {/* Change Font Family  */}
            <Text fontSize={24} textAlign="center" color="primary">
              Verify Your Account
            </Text>
            <TextInput
              placeholder="Write Code"
              placeholderTextColor="secondary"
              value={code}
              onChangeText={(e) => {
                setCode(e);
              }}
              keyboardType="number-pad"
              maxLength={6}
            />
            <Button onPress={handleVerify}>Verify</Button>
            <Box
              paddingHorizontal={0}
              paddingVertical={0}
              padding={0}
              gap={0}
              margin={0}
              alignItems="center"
            >
              <Anchor
                onPress={() => console.log("🌵💜🐢", "resend")}
                disabled={timer !== 0}
              >
                {timer > 0 ? `Resend Code in ${timer}` : "Resend Code"}
              </Anchor>
            </Box>
          </Box>
        </Stack>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Verify;
