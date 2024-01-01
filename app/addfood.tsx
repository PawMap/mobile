import { Box, Text, TextInput, useSession } from "@ynssenem/lext";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

const AddFood = () => {
  const { session } = useSession();
  const router = useRouter();
  const [location, setLocation] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const { id } = useLocalSearchParams();
  // const [addFood]
  useEffect(() => {
    if (!session?.jwt) {
      router.push("/(auth)/login");
    }
  }, [session]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "denied") {
        setErrorMsg("Permission to access location was denied");
        return;
      } else if (status === "undetermined") {
        setErrorMsg("Permission to access location is undetermined");
        return;
      }

      let currentLocaion = await Location.getCurrentPositionAsync({});
      setLocation([
        currentLocaion.coords.longitude,
        currentLocaion.coords.latitude,
      ]);
    })();
  }, []);
  return (
    <Box>
      <Text>Add Food</Text>
    </Box>
  );
};

export default AddFood;
