import {
  Alert,
  Anchor,
  BottomSheet,
  BottomSheetRefProps,
  Box,
  Group,
  Stack,
  Text,
  View,
} from "@ynssenem/lext";
import { Link } from "expo-router";
import { Image, ScrollView, StyleSheet } from "react-native";
import MapboxGL from "@rnmapbox/maps";
import { useCallback, useEffect, useRef, useState } from "react";
import * as Location from "expo-location";
import Point from "../../components/Point";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

MapboxGL.setAccessToken(
  "sk.eyJ1IjoieXVudXMtYWNhciIsImEiOiJjbHFzNTBybXQxc2NqMnFtd3F5NnU5bzI4In0.OC_gmWm69DSnQAfOMuOJkA"
);

const points = [
  {
    id: "1",
    location: [29.0621, 40.9641],
  },
  {
    id: "2",
    location: [29.05142177042097, 40.97757333874856],
  },
];

const boxDetails = [
  {
    date: "12.12.2021",
    expiredDate: "13.12.2021",
    foodRate: "65",
    animal: "Dog",
    foodType: "Dry",
    photo:
      "https://i.pinimg.com/originals/0f/6e/9e/0f6e9e1b6b6b6b6b6b6b6b6b6b6b6b6b.jpg",
  },
  {
    date: "15.01.2022",
    expiredDate: "16.01.2022",
    foodRate: "70",
    animal: "Cat",
    foodType: "Wet",
    photo: "https://example.com/cat.jpg",
  },
  {
    date: "20.03.2022",
    expiredDate: "21.03.2022",
    foodRate: "75",
    animal: "Fish",
    foodType: "Pellets",
    photo: "https://example.com/fish.jpg",
  },
  {
    date: "05.05.2022",
    expiredDate: "06.05.2022",
    foodRate: "80",
    animal: "Rabbit",
    foodType: "Hay",
    photo: "https://example.com/rabbit.jpg",
  },
  {
    date: "10.07.2022",
    expiredDate: "11.07.2022",
    foodRate: "85",
    animal: "Hamster",
    foodType: "Seeds",
    photo: "https://example.com/hamster.jpg",
  },
  {
    date: "15.09.2022",
    expiredDate: "16.09.2022",
    foodRate: "90",
    animal: "Bird",
    foodType: "Mixed",
    photo: "https://example.com/bird.jpg",
  },
  {
    date: "20.11.2022",
    expiredDate: "21.11.2022",
    foodRate: "95",
    animal: "Turtle",
    foodType: "Pallets",
    photo: "https://example.com/turtle.jpg",
  },
  {
    date: "25.01.2023",
    expiredDate: "26.01.2023",
    foodRate: "70",
    animal: "Guinea Pig",
    foodType: "Hay",
    photo: "https://example.com/guinea-pig.jpg",
  },
  {
    date: "01.04.2023",
    expiredDate: "02.04.2023",
    foodRate: "75",
    animal: "Ferret",
    foodType: "Raw",
    photo: "https://example.com/ferret.jpg",
  },
  {
    date: "05.06.2023",
    expiredDate: "06.06.2023",
    foodRate: "80",
    animal: "Iguana",
    foodType: "Vegetables",
    photo: "https://example.com/iguana.jpg",
  },
];

export default function TabOneScreen() {
  const [location, setLocation] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [activeId, setActiveId] = useState<string>("");
  const bottomSheetRef = useRef<BottomSheetRefProps>(null);

  const onPressBottomSheet = useCallback((destination: number, id: string) => {
    bottomSheetRef.current?.snapToIndex(destination);
    setActiveId(id);
  }, []);

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

      let location = await Location.getCurrentPositionAsync({});
      setLocation([location.coords.longitude, location.coords.latitude]);
    })();
  }, []);

  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      {errorMsg && <Alert title={"Error"} message={errorMsg} />}
      {location.length === 2 && (
        <MapboxGL.MapView
          style={{
            flex: 1,
            width: "100%",
          }}
          logoEnabled={false}
          zoomEnabled={true}
          styleURL={MapboxGL.StyleURL.Street}
        >
          <MapboxGL.Camera
            centerCoordinate={points[0].location}
            animationMode="flyTo"
            animationDuration={2000}
            zoomLevel={10}
          />

          {points.map((point) => (
            <Point
              onPressBottomSheet={onPressBottomSheet}
              key={point.id}
              id={point.id}
              location={point.location}
            />
          ))}
        </MapboxGL.MapView>
      )}
      <BottomSheet ref={bottomSheetRef} snaps={[50, 75, 85]}>
        <ScrollView>
          {boxDetails.map((boxDetail, i) => (
            <Box key={i + boxDetail.animal}>
              <Group justifyContent="space-between">
                <Group>
                  <Box
                    flexDirection="row"
                    paddingHorizontal={0}
                    paddingVertical={0}
                    backgroundColor="muted"
                    width={50}
                    height={50}
                    justifyContent="center"
                    alignItems="center"
                    style={{
                      borderRadius: 25,
                    }}
                  >
                    <FontAwesome5 name="bone" size={24} color="black" />
                  </Box>
                  <Stack>
                    <Text>
                      <Text fontFamily="500">Date: </Text>
                      {boxDetail.date}
                    </Text>
                    <Text>
                      <Text fontFamily="500">Expired Date: </Text>
                      {boxDetail.expiredDate}
                    </Text>
                    <Text>
                      <Text>Food Rate: </Text>
                      {boxDetail.foodRate}%
                    </Text>
                  </Stack>
                </Group>
                <Anchor
                  onPress={() => {
                    console.log("🌵💜🐢", "go to photo :D");
                  }}
                >
                  <MaterialIcons name="insert-photo" size={24} color="black" />
                </Anchor>
              </Group>
            </Box>
          ))}
        </ScrollView>
      </BottomSheet>
    </View>
  );
}
