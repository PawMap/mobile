import { StyleSheet } from "react-native";

import {
  Box,
  Button,
  Group,
  Text,
  View,
  useLoadingOverlay,
  Stack,
  useSession,
  Alert,
} from "@ynssenem/lext";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { useUserQuery } from "../../generated/graphql";

export default function TabTwoScreen() {
  const { session, signOut } = useSession();
  const router = useRouter();
  const { setLoading } = useLoadingOverlay();
  const { data, loading, error } = useUserQuery({
    variables: {
      where: {
        id: session?.id,
      },
    },
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (loading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [loading]);
  useEffect(() => {
    if (error) {
      console.log("🌵💜🐢", error);

      Alert({
        title: "Error",
        message: error.message ?? "Something went wrong",
      });
    }
  }, [error]);
  useEffect(() => {
    if (!session?.jwt) {
      router.push("/(auth)/login");
    }
  }, [session]);
  return (
    <Box>
      <Stack>
        <Text>Phone {data?.user?.phone}</Text>
        <Text>Role {data?.user?.type}</Text>
      </Stack>
      <Button onPress={signOut}>Log Out</Button>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
