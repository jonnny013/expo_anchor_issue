import CustomHeader from '@/components/CustomerHeader'
import { Tabs } from 'expo-router'

export const unstable_settings = {
  anchor: 'index',
}

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        header: props => <CustomHeader {...props} />,
        tabBarLabelPosition: 'below-icon',
        tabBarActiveTintColor: 'red',
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          title: 'Main',
        }}
      />
      <Tabs.Screen
        name='home'
        options={{
          headerShown: false,
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          headerShown: false,
          title: 'Profile',
        }}
      />
    </Tabs>
  )
}

export default Layout
