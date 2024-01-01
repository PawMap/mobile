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
} from "@ynssenem/lext";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useFoodsQuery } from "../generated/graphql";

const FoodSheet = ({
  id,
  bottomSheetRef,
}: {
  id: number;
  bottomSheetRef: any;
}) => {
  const router = useRouter();
  const { data, loading, error } = useFoodsQuery({
    nextFetchPolicy: "network-only",
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
    },
  });
  return (
    <BottomSheet ref={bottomSheetRef} snaps={[50, 75, 85]}>
      <Box>
        <Group>
          {data?.foods && <Text>{data?.foods[0]?.box.animal}</Text>}

          <Button
            onPress={() => {
              router.push({
                pathname: "/addfood",
                params: {
                  id: id,
                },
              });
            }}
          >
            <Text>Add Food</Text>
          </Button>
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
                    {boxDetail.createdAt}
                  </Text>
                  <Text>
                    <Text fontFamily="500">Expired Date: </Text>
                    {boxDetail.expiredAt}
                  </Text>
                  <Text>
                    <Text>Food Rate: </Text>
                    {boxDetail.foodType}
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
  );
};

export default FoodSheet;
