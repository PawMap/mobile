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
  useSession,
} from "@ynssenem/lext";
import React, { useEffect, useState } from "react";
import { ImageBackground } from "react-native";
import validate from "google-libphonenumber";
import { useRouter } from "expo-router";
import { useLoginMutation } from "../../generated/graphql";
import { log } from "console";

const Login = () => {
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const { setLoading } = useLoadingOverlay();
  const [login] = useLoginMutation();
  const { session } = useSession();
  useEffect(() => {
    if (session?.jwt) {
      router.push("/(tabs)");
    }
  }, []);

  const handleSendCode = async () => {
    if (!phone) return;
    const phoneUtil = validate.PhoneNumberUtil.getInstance();
    const number = phoneUtil.parseAndKeepRawInput(phone, "TR");
    const isValid = phoneUtil.isValidNumber(number);
    if (isValid) {
      const { data, errors } = await login({
        variables: {
          data: {
            phone: phoneUtil
              .format(number, validate.PhoneNumberFormat.E164)
              .replace("+", ""),
          },
        },
      });
      console.log(data?.login);

      if (data?.login.id) {
        router.push({
          pathname: "/(auth)/verify",
          params: {
            id: data?.login.id,
          },
        });
        setLoading(true);
      }
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
