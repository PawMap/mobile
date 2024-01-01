import {
  Box,
  Button,
  MaskInput,
  SafeAreaView,
  Stack,
  Text,
  TextInput,
  View,
  useLoadingOverlay,
} from "@ynssenem/lext";
import React, { useState } from "react";
import { ImageBackground } from "react-native";
import validate from "google-libphonenumber";
import { useRouter } from "expo-router";

const Login = () => {
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const { setLoading } = useLoadingOverlay();

  const handleSendCode = () => {
    if (!phone) return;
    const phoneUtil = validate.PhoneNumberUtil.getInstance();
    const number = phoneUtil.parseAndKeepRawInput(phone, "TR");
    const isValid = phoneUtil.isValidNumber(number);
    if (isValid) {
      console.log("valid");
      router.push("/(auth)/verify");
      setLoading(true);
    } else {
      console.log("invalid");
    }
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
              Sign In to PawMap
            </Text>
            <MaskInput
              placeholder="Phone Number"
              placeholderTextColor="secondary"
              value={phone}
              onChangeText={(e) => {
                setPhone(e);
              }}
              mask={[
                "5",
                /\d/,
                /\d/,
                " ",
                /\d/,
                /\d/,
                /\d/,
                " ",
                /\d/,
                /\d/,
                " ",
                /\d/,
                /\d/,
              ]}
              keyboardType="phone-pad"
            />
            <Button onPress={handleSendCode}>Send Code</Button>
          </Box>
        </Stack>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Login;
