import CustomHeader from '@/components/CustomerHeader'
import { Stack } from 'expo-router'

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        header: props => <CustomHeader {...props} />,
      }}
    >
      <Stack.Screen name='index' options={{ title: 'Test' }} />
      <Stack.Screen name='[id]' options={{ title: 'Test' }} />
    </Stack>
  )
}

export default Layout
