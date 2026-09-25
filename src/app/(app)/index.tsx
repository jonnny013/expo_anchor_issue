import { mainStyles } from '@/style'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const Main = () => {
  return (
    <View style={mainStyles}>
      <Text>Main</Text>

      <Link href='/(app)/profile'>
        <Text>Click Profile</Text>
      </Link>
    </View>
  )
}

export default Main
