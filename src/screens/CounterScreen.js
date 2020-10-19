import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const reducer = (state, action) => {
  switch (action.type) {
    case 'update_count':
      return { ...state, count: state.count + action.payload }
    default:
      return state    
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  return (
    <View>
      <Button 
        title='Increase'
        onPress={() => {
          dispatch({
            type: 'update_count',
            payload: 1
          })
        }}
      />
      <Button 
        title='Decrease'
        onPress={() => {
          dispatch({
            type: 'update_count',
            payload: -1
          })
        }}
      />
      <Text>Text Count: {state.count}</Text>
    </View>
  )
}

export default CounterScreen
