import { Text, View, useSession } from "@ynssenem/lext";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";

const AddFood = () => {
  const { session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session?.jwt) {
      router.push("/(auth)/login");
    }
  }, [session]);
  return (
    <View>
      <Text>Add Food</Text>
    </View>
  );
};

export default AddFood;
