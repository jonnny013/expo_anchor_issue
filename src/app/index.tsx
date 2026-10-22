import { mainStyles } from '@/style'
import { Button, Text, View } from 'react-native'
import { useAudioPlayer } from 'expo-audio'

import StartAudio from '@/assets/audio/start_noise.wav'

const Main = () => {
  const player = useAudioPlayer(StartAudio)

  const handlePlay = async () => {
    try {
      await player.seekTo(0)
      await player.play()
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <View style={mainStyles}>
      <Text>Main</Text>

      <Button title='play' onPress={handlePlay} />
    </View>
  )
}

export default Main
