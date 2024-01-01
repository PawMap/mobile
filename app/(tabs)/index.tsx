import {
  Alert,
  Anchor,
  BottomSheet,
  BottomSheetRefProps,
  Box,
  Button,
  Group,
  Stack,
  Text,
  View,
  useLoadingOverlay,
} from "@ynssenem/lext";
import { Link, useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet } from "react-native";
import MapboxGL from "@rnmapbox/maps";
import { useCallback, useEffect, useRef, useState } from "react";
import * as Location from "expo-location";
import Point from "../../components/Point";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useBoxesQuery } from "../../generated/graphql";
import FoodSheet from "../../components/FoodSheet";
import { load } from "js-yaml";

MapboxGL.setAccessToken(
  "sk.eyJ1IjoieXVudXMtYWNhciIsImEiOiJjbHFzNTBybXQxc2NqMnFtd3F5NnU5bzI4In0.OC_gmWm69DSnQAfOMuOJkA"
);

export default function TabOneScreen() {
  const [location, setLocation] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [activeId, setActiveId] = useState<string>("");
  const router = useRouter();
  const bottomSheetRef = useRef<BottomSheetRefProps>(null);
  const mapRef = useRef(null);
  const { setLoading } = useLoadingOverlay();
  const { data, loading, refetch, error } = useBoxesQuery({
    fetchPolicy: "network-only",
  });

  const onPressBottomSheet = useCallback((destination: number, id: string) => {
    bottomSheetRef.current?.snapToIndex(destination);
    setActiveId(id);
  }, []);

  useEffect(() => {
    setLoading(loading);
  }, [loading]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "denied") {
        setErrorMsg("Permission to access location was denied");
        Alert({
          title: "Permission to access location was denied",
          message: "Please allow location permission",
        });
        return;
      } else if (status === "undetermined") {
        setErrorMsg("Permission to access location is undetermined");
        Alert({
          title: "Permission to access location is undetermined",
          message: "Please allow location permission",
        });
        return;
      }

      let currentLocaion = await Location.getCurrentPositionAsync({});
      setLocation([
        currentLocaion.coords.longitude,
        currentLocaion.coords.latitude,
      ]);
    })();
  }, []);

  useEffect(() => {
    MapboxGL.setTelemetryEnabled(false);
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
      }}
    >
      {location.length === 2 && (
        <MapboxGL.MapView
          style={{
            flex: 1,
            width: "100%",
          }}
          logoEnabled={false}
          zoomEnabled={true}
          styleURL={MapboxGL.StyleURL.Street}
          ref={mapRef}
        >
          <MapboxGL.Camera
            centerCoordinate={location}
            animationMode="flyTo"
            animationDuration={2000}
            zoomLevel={10}
          />

          {data?.boxes.map((point) => (
            <Point
              onPressBottomSheet={onPressBottomSheet}
              key={point.id}
              id={point.id.toString()}
              location={point.location}
            />
          ))}
        </MapboxGL.MapView>
      )}
      <FoodSheet id={+activeId} bottomSheetRef={bottomSheetRef} />
    </View>
  );
}
