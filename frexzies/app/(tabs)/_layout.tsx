import { View, Text, Image } from 'react-native'
import React from 'react';
import { Tabs, Redirect } from 'expo-router';

import { icons } from '../../constants';


interface TabIconProps {
  name: string;
  focused: boolean;
  color: string;
  icon: any;
}

const TabIcon: React.FC<TabIconProps> = ({ name, color, focused, icon }) => {
  return (
    <View className='items-center justify-center gap-2'>
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='w-6 h-6'
      />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}>
        {name}
      </Text>
    </View>
  )
}

const TabLayout = () => {
  return (
    <>
      <Tabs screenOptions={{
        tabBarShowLabel: false
      }}>
        <Tabs.Screen
          name='home'
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                focused={focused}
                name='Home'
              />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabLayout