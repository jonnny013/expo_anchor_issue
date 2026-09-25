import { mainStyles } from '@/style'
import { Text, View } from 'react-native'

const HomePage = () => {
  return (
    <View style={mainStyles}>
      <Text>Profile with some ID</Text>
      <View style={{ height: 50 }}></View>
      <Text style={{ color: 'red', fontWeight: 600 }}>
        Refresh the page to see the problem
      </Text>
      <Text>There should be a back button but there isn't</Text>
      <Text>The bottom tab link should be profile, but it is profile/[id]</Text>
    </View>
  )
}

export default HomePage
