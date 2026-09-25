import { mainStyles } from '@/style'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'

const Main = () => {
  return (
    <View style={mainStyles}>
      <Text>Opening page</Text>
      <Link href='/(app)/home'>
        <Text>Go Home</Text>
      </Link>
    </View>
  )
}

export default Main
