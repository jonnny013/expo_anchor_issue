import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useColorScheme } from 'react-native'

SplashScreen.preventAutoHideAsync()

export default function TabLayout() {
  const colorScheme = useColorScheme()
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={true}>
        <Stack.Screen name='(app)' />
      </Stack.Protected>

      <Stack.Screen name='index' options={{ title: 'Check it out' }} />
    </Stack>
  )
}
