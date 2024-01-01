import {
  ActionButton,
  Alert,
  Anchor,
  Box,
  Button,
  SafeAreaView,
  SelectBox,
  Text,
  View,
  useColor,
  useSession,
} from "@ynssenem/lext";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import * as Location from "expo-location";
import { Animal, useCreateOneBoxMutation } from "../../generated/graphql";
import { AntDesign } from "@expo/vector-icons";
import MapboxGL from "@rnmapbox/maps";
import layout from "../../constants/layout";
import { Image } from "react-native";

MapboxGL.setAccessToken(
  "sk.eyJ1IjoieXVudXMtYWNhciIsImEiOiJjbHFzNTBybXQxc2NqMnFtd3F5NnU5bzI4In0.OC_gmWm69DSnQAfOMuOJkA"
);
const AddFood = () => {
  const { session } = useSession();
  const router = useRouter();
  const [location, setLocation] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [addBox] = useCreateOneBoxMutation();
  const [animal, setAnimal] = useState();
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
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

  const handleAddBox = async () => {
    try {
      if (!animal)
        return Alert({
          title: "Please select animal",
          message: "Please select animal",
        });
      if (!session) {
        Alert({
          title: "Please login",
          message: "Please login",
        });
        return router.push("/(auth)/login");
      }
      console.log(
        "🌵💜🐢",
        JSON.stringify({
          data: {
            animal: animal as Animal,
            createdBy: {
              connect: {
                id: session?.id,
              },
            },
            location: location,
          },
        })
      );

      const { data } = await addBox({
        variables: {
          data: {
            animal: animal as Animal,
            createdBy: {
              connect: {
                id: session?.id,
              },
            },
            location: location,
          },
        },
      });
      if (data?.createOneBox.id) {
        router.push("/(tabs)");
      }
    } catch (error: any) {
      console.log("🌵💜🐢 error", error);
      Alert({
        title: "Error",
        message: error.message,
      });
    }
  };

  return (
    <SafeAreaView>
      <Box>
        <SelectBox
          layout={{
            label: "Select Animal",
            right: (
              <ActionButton
                variant="transparent"
                onPress={() => setVisible(true)}
              >
                <AntDesign name="caretdown" size={24} color="#2D384C" />
              </ActionButton>
            ),
          }}
          data={Object.keys(Animal).map((a) => ({
            label: a,
            value: a,
          }))}
          value={animal}
          onChange={(value) => {
            setAnimal(value.value as Animal);
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
      </Box>
      {location.length === 2 && (
        <View
          style={{
            height: layout.window.height / 2,
            marginVertical: 20,
          }}
        >
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
              centerCoordinate={location}
              animationMode="flyTo"
              animationDuration={2000}
              zoomLevel={10}
            />
            <MapboxGL.PointAnnotation
              id={session?.id.toString() ?? "id"}
              coordinate={location}
              draggable={true}
              onDrag={(e) => {
                setLocation(e.geometry.coordinates);
              }}
              ref={ref}
              style={{
                width: 35,
                height: 35,
              }}
            >
              <View
                style={{
                  width: 35,
                  height: 35,
                  // backgroundColor: "white",
                }}
              >
                <Image
                  style={{
                    flex: 1,
                    resizeMode: "contain",
                    width: 35,
                    height: 35,
                  }}
                  resizeMode="contain"
                  onLoad={() => ref.current?.refresh()}
                  source={require("../../assets/images/konum.png")}
                />
              </View>
            </MapboxGL.PointAnnotation>
          </MapboxGL.MapView>
        </View>
      )}

      <Box>
        <Button onPress={handleAddBox}>Add Box</Button>
      </Box>
    </SafeAreaView>
  );
};

export default AddFood;
