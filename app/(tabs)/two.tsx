import { StyleSheet } from "react-native";

import { Text, View, useSession } from "@ynssenem/lext";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function TabTwoScreen() {
  const { session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session?.jwt) {
      router.push("/(auth)/login");
    }
  }, [session]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} />
      {/* <EditScreenInfo path="app/(tabs)/two.tsx" /> */}
    </View>
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
