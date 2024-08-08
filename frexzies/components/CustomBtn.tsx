import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'


interface CustomBtnProps {
  title: string;
  handlePress: () => void;
  containerStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
  isLoading?: boolean;
}

const CustomBtn: React.FC<CustomBtnProps> = (props) => {
  const { title, handlePress, containerStyles, isLoading, textStyles } = props;
  return (
    <TouchableOpacity
      className={`bg-secondary ${isLoading ? 'opacity-50' : ''} rounded-xl min-h-[62px] justify-center items-center`}
      onPress={handlePress}
      activeOpacity={0.7}
      style={containerStyles}
      disabled={isLoading}
    >
      <Text style={textStyles} className='text-primary font-psemibold text-lg'>
        {title}
      </Text>
    </TouchableOpacity>
  )
}


export default CustomBtn