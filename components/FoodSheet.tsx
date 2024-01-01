import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import {
  Anchor,
  BottomSheet,
  BottomSheetRefProps,
  Box,
  Button,
  Divider,
  Group,
  Stack,
  Text,
  useSession,
} from "@ynssenem/lext";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SortOrder, useFoodsQuery, useGetBoxQuery } from "../generated/graphql";
import dayjs from "dayjs";

const FoodSheet = ({
  id,
  bottomSheetRef,
}: {
  id: number;
  bottomSheetRef: any;
}) => {
  const router = useRouter();
  const { session } = useSession();
  const { data, loading, error } = useFoodsQuery({
    fetchPolicy: "network-only",
    variables: {
      where: {
        box: {
          is: {
            id: {
              equals: id,
            },
          },
        },
      },
      orderBy: {
        createdAt: SortOrder.desc,
      },
    },
  });
  const { data: boxData, loading: boxLoading } = useGetBoxQuery({
    variables: {
      where: {
        id: id,
      },
    },
    fetchPolicy: "network-only",
  });
  return (
    <BottomSheet ref={bottomSheetRef} snaps={[50, 75, 85]}>
      <Box>
        <Group justifyContent="space-between">
          {boxData?.getBox && (
            <Stack>
              <Text>Animal: {boxData.getBox?.animal}</Text>
              <Text>
                Creation Date:{" "}
                {dayjs(boxData.getBox?.createdAt).format("DD/MM/YYYY")}
              </Text>
              {boxData.getBox?.createdBy.name && (
                <Text>Creation By: {boxData.getBox.createdBy.name}</Text>
              )}
            </Stack>
          )}
          {session?.jwt && (
            <Button
              onPress={() => {
                router.push({
                  pathname: "/(tabs)/addfood",
                  params: {
                    id: id,
                  },
                });
                bottomSheetRef.current?.snapToIndex(0);
              }}
              color="secondary"
              activeOpacity={0.9}
            >
              Add Food
            </Button>
          )}
        </Group>
      </Box>
      <Divider />
      <ScrollView>
        {data?.foods.map((boxDetail, i) => (
          <Box key={i + boxDetail.id}>
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
                    {dayjs(boxDetail.createdAt).format("DD/MM/YYYY HH:mm")}
                  </Text>
                  <Text>
                    <Text fontFamily="500">Food Rate: </Text>%{boxDetail.rate}
                  </Text>
                  <Text>
                    <Text>Food Type: </Text>
                    {boxDetail.foodType}
                  </Text>
                </Stack>
              </Group>
              {boxDetail.photo && (
                <Anchor
                  onPress={() => {
                    console.log("🌵💜🐢", "go to photo :D");
                  }}
                >
                  <MaterialIcons name="insert-photo" size={24} color="black" />
                </Anchor>
              )}
            </Group>
          </Box>
        ))}
      </ScrollView>
    </BottomSheet>
  );
};

export default FoodSheet;
