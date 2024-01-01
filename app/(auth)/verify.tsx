import {
  Anchor,
  Box,
  Button,
  SafeAreaView,
  Stack,
  Text,
  TextInput,
  useLoadingOverlay,
  useSession,
} from "@ynssenem/lext";
import React, { useEffect, useState } from "react";
import { ImageBackground } from "react-native";
import layout from "../../constants/layout";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import {
  useResendCodeMutation,
  useVerifyMutation,
} from "../../generated/graphql";

const Verify = () => {
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(60);
  const { setLoading } = useLoadingOverlay();
  const router = useRouter();
  const params = useLocalSearchParams();
  const { id } = params;
  const [verify] = useVerifyMutation();
  const [resendCode] = useResendCodeMutation();
  const { signIn } = useSession();

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

  const handleVerify = async () => {
    if (!code) return;
    const { data, errors } = await verify({
      variables: {
        code,
        verifyId: +id,
      },
    });

    if (data?.verify.token) {
      router.push("/(tabs)");
      signIn({
        id: data.verify.id,
        jwt: data.verify.token,
      });
    }
  };

  const handleResendCode = async () => {
    const { data, errors } = await resendCode({
      variables: {
        resendCodeId: +id,
      },
    });
    if (data?.resendCode) {
      setTimer(120);
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
              <Anchor onPress={handleResendCode} disabled={timer !== 0}>
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
