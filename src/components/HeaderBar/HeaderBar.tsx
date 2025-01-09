import React from 'react'
import { View, Text, Pressable, Image } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { navigate } from '@navigation/navigation'
import { useTranslation } from 'react-i18next'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { SCREENS } from '@/navigation/ScreenRouter'
import images from '@/assets/images'
import icons from '@assets/icons'
import { createStyles } from './styles'

type HeaderBarProps = {
  title?: string
  showBackButton?: boolean
  goBack?: () => void
}

const HeaderBar = ({
  title,
  goBack,
  showBackButton = false,
}: HeaderBarProps) => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const styles = createStyles()

  const handleToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer())
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {showBackButton ? (
          <View style={styles.centerContainer}>
            <Pressable style={styles.backButton} onPress={goBack}>
              <icons.backArrow width={18} height={18} />
            </Pressable>
            {title && <Text style={styles.headerCenterTitle}>{title}</Text>}
          </View>
        ) : (
          <>
            <View style={styles.headerIconContainer}>
              <Pressable
                style={styles.iconButton}
                onPress={() => navigate(SCREENS.Notice.name)}
              >
                <icons.notification width={22} height={22} />
              </Pressable>
              <Pressable
                style={styles.iconButton}
                onPress={() => navigate('Reservation')}
              >
                <icons.mail width={22} height={22} />
              </Pressable>
            </View>

            <View style={styles.logoContainer}>
              <Image
                source={images.bloom}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>
            <Pressable style={styles.menuButton} onPress={handleToggleDrawer}>
              <MaterialIcon name="menu" size={30} color="#333" />
            </Pressable>
          </>
        )}
      </View>
    </View>
  )
}

export default HeaderBar
