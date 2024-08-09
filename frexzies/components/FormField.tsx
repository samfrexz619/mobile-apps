import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'


import { icons } from '../constants';


interface FormFieldProps {
  title: string;
  value: string;
  otherStyles: string;
  keyboardType?: 'numeric' | 'email-address' | 'default';
  handleChangeText: (param: string) => void;
  placeholder: string;
  inputMode: 'text' | 'email' | 'search';
}

const FormField: React.FC<FormFieldProps> = (props) => {
  const { title, value, otherStyles, inputMode, keyboardType = 'default', handleChangeText, placeholder } = props;

  const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-gray-100 font-pmedium'>
        {title}
      </Text>

      <View className='w-full h-16 px-4 bg-black-100 border-2 rounded-2xl border-black-200 focus:border-secondary items-center flex-row'>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={handleChangeText}
          className='flex-1 h-full pb-0.5 text-white font-psemibold text-base'
          placeholderTextColor='#7b7b8b'
          secureTextEntry={title === 'Password' && !showPassword}
          keyboardType={keyboardType}
          inputMode={inputMode}
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className='w-6 h-6'
              resizeMode='contain'
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField;

// cmd + k to keyboard