import { Card, Image, Text } from '@rneui/base'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, View } from 'react-native'

export const Login = () => {
    return (
      <>
      <StatusBar />
      <SafeAreaView>
        <View >
          <Image
            // style={Styles.login_header_logo}
            // source={require('./assets/logo-back4app.png')}
          />
          <Text >
            <Text >
              {'React Native on Back4App - '}
            </Text>
            {' User registration'}
          </Text>
        </View>
        {/* <UserRegistration /> */}
      </SafeAreaView>
    </>
  )
}
