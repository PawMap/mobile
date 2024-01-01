import { useSession } from "@ynssenem/lext";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

const Auth = () => {
  const router = useRouter();
  const { session } = useSession();

  useEffect(() => {
    if (session?.jwt) {
      router.push("/(tabs)");
    }
  }, []);
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="login"
    >
      <Stack.Screen name="login" />
      <Stack.Screen name="verify" />
    </Stack>
  );
};

export default Auth;
