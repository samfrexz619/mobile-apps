import { StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { GlobalContextProvider } from '../../context/GlobalContext'

const AuthLayout = () => {
  return (
    <GlobalContextProvider>
      <Stack>
        <Stack.Screen
          name='sign-in'
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name='sign-up'
          options={{
            headerShown: false
          }}
        />
        <StatusBar backgroundColor='#161622' style='light' />
      </Stack>
    </GlobalContextProvider>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})