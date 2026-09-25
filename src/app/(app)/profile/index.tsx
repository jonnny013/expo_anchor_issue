import { mainStyles } from '@/style'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const HomePage = () => {
  return (
    <View style={mainStyles}>
      <Text>Profile</Text>
      <Link href='/(app)/profile/test-123'>
        <Text>Go to the test page</Text>
      </Link>
    </View>
  )
}

export default HomePage
