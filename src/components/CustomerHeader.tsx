import { NativeStackHeaderProps } from 'expo-router'
import { BottomTabHeaderProps } from 'expo-router/build/layouts/TabsClient.js'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export default function CustomHeader(
  props: NativeStackHeaderProps | BottomTabHeaderProps,
) {
  const insets = useSafeAreaInsets()

  const { navigation, route, options } = props

  const back = 'back' in props ? !!props.back : undefined
  const headerRight =
    typeof options.headerRight === 'function'
      ? options.headerRight({ canGoBack: navigation.canGoBack() })
      : null

  const titleText = options.title ?? route.name

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.row}>
        <View style={[styles.side, { left: 16 }]}>
          {back && (
            <Pressable onPress={navigation.goBack}>
              <Text>Back</Text>
            </Pressable>
          )}
        </View>

        <View style={styles.titleContainer}>
          <Text numberOfLines={1} ellipsizeMode='middle' style={styles.title}>
            {titleText}
          </Text>
        </View>

        <View style={[styles.side, { right: 16 }]}>{headerRight}</View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fffefe',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  back: {
    color: 'black',
  },
  side: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    maxWidth: '80%',
  },
})
