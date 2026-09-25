import { mainStyles } from '@/style'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const HomePage = () => {
  return (
    <View style={mainStyles}>
      <Text>Home</Text>

      <Link href='/(app)/profile'>
        <Text>Click Profile</Text>
      </Link>
    </View>
  )
}

export default HomePage
