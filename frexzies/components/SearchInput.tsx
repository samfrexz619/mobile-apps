import { View, Text, TextInput, TouchableOpacity, Image, } from 'react-native'
import React from 'react'
import { icons } from '../constants'


interface SearchInputProps {
  placeholder: string;
  value: string;
  handleChangeText: (val: string) => void;
  keyboardType?: 'default';
  inputMode: 'search';
}

const SearchInput: React.FC<SearchInputProps> = (props) => {
  const { placeholder, value, handleChangeText, inputMode, keyboardType } = props;
  return (
    <View className='w-full h-16 px-4 bg-black-100 border-2 rounded-2xl border-black-200 focus:border-secondary items-center flex-row space-x-4'>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={handleChangeText}
        className='text-base mt-0.5 font-pregular text-white flex-1 h-full'
        placeholderTextColor='#7b7b8b'
        // secureTextEntry={title === 'Password' && !showPassword}
        keyboardType={keyboardType}
        inputMode={inputMode}
      />
      <TouchableOpacity>
        <Image
          source={icons.search}
          className='w-6 h-6'
          resizeMode='contain'
        />
      </TouchableOpacity>
    </View>
  )
}

export default SearchInput