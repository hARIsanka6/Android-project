import { tokenCache } from './cache'
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { ClerkProvider, SignedIn, SignedOut} from '@clerk/clerk-expo'
import { Text, View } from "react-native";
import LoginScreen from "../app-example/components/loginScreen"



export default function RootLayout() {

  useFonts({
    'Outfit': require('./../assets/fonts/Outfit-Bold.ttf')
  })
  return (
    
    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <SignedIn>
        <Stack screenOptions={{ headerShown:false}}>
        <Stack.Screen name="(tabs)"/>
        </Stack>
        
      </SignedIn>
      <SignedOut>
        <LoginScreen></LoginScreen>
      </SignedOut>
      
    </ClerkProvider>
    
     
    
  );
}
