import {
  Stack,
  Box,
  Text,
  TextInput,
  useSession,
  ActionButton,
  Anchor,
  SelectBox,
  Button,
  Alert,
} from "@ynssenem/lext";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import {
  FoodType,
  useCreateOneFoodMutation,
  useGetBoxQuery,
} from "../../generated/graphql";
import { AntDesign } from "@expo/vector-icons";

const AddFood = () => {
  const { session } = useSession();
  const router = useRouter();
  const [location, setLocation] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [foodType, setFoodType] = useState("");
  const [visible, setVisible] = useState(false);
  const [rate, setRate] = useState(0);
  const { id } = useLocalSearchParams();
  const [addFood] = useCreateOneFoodMutation();
  const { data, loading } = useGetBoxQuery({
    variables: {
      where: {
        id: +id,
      },
    },
    fetchPolicy: "network-only",
  });
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
  const handleAddFood = async () => {
    try {
      const { data: addData } = await addFood({
        variables: {
          data: {
            addedBy: {
              connect: {
                id: session?.id,
              },
            },
            box: {
              connect: {
                id: +id,
              },
            },
            foodType: foodType as FoodType,
            location: data?.getBox?.location,
            rate: rate,
          },
        },
      });
      if (addData?.createOneFood) {
        router.push("/(tabs)");
      }
    } catch (error: any) {
      console.log("🌵💜🐢 error", error);
      Alert({
        title: "Error",
        message: error?.message,
      });
    }
  };

  return (
    <Box>
      <Stack>
        <SelectBox
          layout={{
            label: "Select Food Type",
            right: (
              <ActionButton
                variant="transparent"
                onPress={() => setVisible(true)}
              >
                <AntDesign name="caretdown" size={24} color="#2D384C" />
              </ActionButton>
            ),
          }}
          data={Object.keys(FoodType).map((a) => ({
            label: a,
            value: a,
          }))}
          value={foodType}
          onChange={(value) => {
            setFoodType(value.value as FoodType);
            setVisible(false);
          }}
          modal={{
            visible: visible,
            header: {
              left: <Anchor onPress={() => setVisible(false)}>Close</Anchor>,
            },
          }}
          onPress={() => setVisible(true)}
        />
        <TextInput
          layout={{
            label: "Rate (%)",
          }}
          value={rate.toString()}
          onChangeText={(value) => setRate(+value)}
        />
        <Button onPress={handleAddFood}>Add Food</Button>
      </Stack>
    </Box>
  );
};

export default AddFood;
