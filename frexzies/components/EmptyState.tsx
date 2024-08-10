import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { images } from '../constants';
import CustomBtn from './CustomBtn';
import { router } from 'expo-router';


interface EmptyStateProps {
  title: string;
  subtitle: string;

}

const EmptyState: React.FC<EmptyStateProps> = (props) => {
  const { title, subtitle } = props;

  return (
    <View className='justify-center items-center px-4'>
      <Image
        source={images.empty}
        resizeMode='contain'
        className='w-[270px] h-[215px]'
      />
      <Text className='text-xl font-psemibold text-white'>
        {title}
      </Text>
      <Text className='font-pmedium text-sm text-gray-100'>
        {subtitle}
      </Text>

      <CustomBtn
        title='Create Video'
        handlePress={() => router.push('/')}
        containerStyles={styles.btn}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 20,
    width: '100%'
  }
})
export default EmptyState