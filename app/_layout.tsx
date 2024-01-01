import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";
import {
  LoadingOverlay,
  LoadingOverlayProvider,
  Text,
  ThemeProvider,
  createTheme,
  useLoadingOverlay,
} from "@ynssenem/lext";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const theme = createTheme({
    colorScheme: "lighten",
    colors: {
      lighten: {
        primary: "#FDBD4E",
        secondary: "#2D384C",
        muted: "#F7F7F7",
      },
    },
    components: {
      Button: {
        default: {
          paddingVertical: 15,
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme} gestureHandlerRootView>
      <LoadingOverlayProvider content={<Text>LLL</Text>}>
        <Stack>
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </LoadingOverlayProvider>
    </ThemeProvider>
  );
}
