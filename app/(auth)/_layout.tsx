import { Stack } from "expo-router";

const Auth = () => {
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
