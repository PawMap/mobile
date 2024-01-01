import React, { useRef } from "react";
import MapboxGL from "@rnmapbox/maps";
import { Image } from "react-native";
import { BottomSheetRefProps, View } from "@ynssenem/lext";
import { log } from "console";

const Point = ({
  id,
  onPressBottomSheet,
  location,
}: {
  id: string;
  location: number[];
  onPressBottomSheet: (value: number, id: string) => void;
}) => {
  const ref: any = useRef(null);

  return (
    <MapboxGL.PointAnnotation
      id={id}
      coordinate={location}
      onSelected={(payload) => {
        if (payload.id) {
          onPressBottomSheet(1, payload?.id as string);
        }
      }}
      draggable={false}
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
          source={require("../assets/images/konum.png")}
        />
      </View>
    </MapboxGL.PointAnnotation>
  );
};

export default Point;
