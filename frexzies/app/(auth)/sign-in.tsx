import { Image, ScrollView, StyleSheet, Text, Keyboard, View, TouchableWithoutFeedback, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomBtn from '../../components/CustomBtn';
import { Link, router } from 'expo-router';
import { getCurrentUser, logIn } from '../../lib/appwrite';
import { useGlobalContext } from '../../context/GlobalContext';


const SignIn = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submitHandler = async () => {
    if (form.email.trim() === '' || form.password === '') {
      Alert.alert('Error!', 'Please fill all fields')
    }
    setIsSubmitting(true)

    try {
      await logIn(form)
      const res = await getCurrentUser()
      setUser(res!)
      setIsLoggedIn(true)
      Alert.alert("Success", "User signed in successfully");
      router.replace('/home')
    } catch (error: any) {
      console.log(error.message)
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
              title='Log In'
              handlePress={submitHandler}
              containerStyles={styles.btn}
              isLoading={isSubmitting}
            />

            <View className='justify-center pt-5 flex-row gap-2'>
              <Text className='text-lg text-gray-100 font-pregular'>
                Don’t have an account?
              </Text>
              <Link href='/sign-up' className='text-lg font-psemibold text-secondary'>
                Signup
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
export default SignIn;
