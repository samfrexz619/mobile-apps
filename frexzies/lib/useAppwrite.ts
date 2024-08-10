
import React, { useEffect, useState } from 'react';
import { Models } from 'react-native-appwrite';
import { Alert } from 'react-native';

const useAppwrite = (fn: Function) => {
  const [data, setData] = useState<Models.Document[]>([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    setLoading(true)
    try {
      const res = await fn()
      setData(res)
    } catch (error: any) {
      Alert.alert('Error', error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  const refresh = () => fetchData()

  return {
    data,
    loading,
    refresh
  };
}

export default useAppwrite;
