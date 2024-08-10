import { Image, ScrollView, StyleSheet, Text, Keyboard, View, TouchableWithoutFeedback, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomBtn from '../../components/CustomBtn';
import { Link, router } from 'expo-router';
import { createUser } from '../../lib/appwrite';
import { useGlobalContext } from '../../context/GlobalContext';


const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const { setIsLoggedIn, setUser } = useGlobalContext();

  const submitHandler = async () => {
    if (!form.username.trim() || !form.email.trim() || !form.password) {
      Alert.alert('Error!', 'Please fill all fields')
    }
    setIsSubmitting(true)
    try {
      const res = await createUser(form)
      setUser(res)
      setIsLoggedIn(true)
      router.replace('/home');
    } catch (error: any) {
      Alert.alert('Error!', error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <SafeAreaView className='bg-primary h-full'>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView>

          <View className='w-full justify-center min-h-[83vh] px-4 my-6'>
            <Image
              source={images.logo}
              resizeMode='contain'
              className='w-[115px] h-[35px]'
            />
            <Text className='text-2xl text-white text-semibold font-psemibold mt-10'>
              Login to Aora
            </Text>
            <FormField
              title="Username"
              value={form.username}
              handleChangeText={(e) => setForm({ ...form, username: e })}
              otherStyles='mt-10'
              // keyboardType="default"
              placeholder='benny'
              inputMode='text'
            />
            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              otherStyles='mt-7'
              keyboardType="email-address"
              placeholder='testx@test.com'
              inputMode='email'
            />
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              otherStyles='mt-7'
              placeholder='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
              inputMode='text'
            />
            <CustomBtn
              title='Sign Up'
              handlePress={submitHandler}
              containerStyles={styles.btn}
              isLoading={isSubmitting}
            />

            <View className='justify-center pt-5 flex-row gap-2'>
              <Text className='text-lg text-gray-100 font-pregular'>
                Already have an account?
              </Text>
              <Link href='/sign-in' className='text-lg font-psemibold text-secondary'>
                Sign In
              </Link>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 28
  }
})
export default SignUp;
