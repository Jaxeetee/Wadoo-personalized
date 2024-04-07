import { React, useState, useEffect } from 'react';

import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { getDateToday, getGreeting } from '../helpers/date-and-time';
import PlayButton from '../components/PlayButton';
import Stopwatch from '../components/Stopwatch';
import TimestampStart from '../components/TimestampStart';

const HomeScreen = () => {
  const [isPlayButtonActive, setIsPlayButtonActive] = useState(false);

  const updateStartTask = (setStartTaskState) => {
    setIsPlayButtonActive(setStartTaskState);
  };

  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>Good {getGreeting()}!</Text>    
      <Text style={{fontSize:24}}>{getDateToday()}</Text>
      <ScrollView style={styles.scrollview}>
        <Text style={styles.textContent}>You have no tracked tasks yet</Text>
      </ScrollView>
      <TextInput 
        style={styles.textInput}
        autoCapitalize='none'
        placeholder='What are you going to do?'
        
      />
      <View style={styles.timerRow}>
        <TimestampStart
          isPlayButtonActive = {isPlayButtonActive}
        />
        <PlayButton 
          setButtonActive = {updateStartTask}
        />
        <Stopwatch 
          isPlayButtonActive = {isPlayButtonActive}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20,
    marginTop: 50,
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
  },

  text: {
    color: '#313131',
    fontWeight: '800', 
  },

  textdate: {
    fontWeight: '800',
    fontSize: 24,
  },

  textInput :{
    backgroundColor: '#F4F4F4',
    color: '#313131',
    height: 55, 
    padding:15, 
    paddingLeft: 20,
    marginTop: 15,
    fontSize:16,
    borderRadius: 50,
    elevation: 5
  },

  textContent: {
    justifyContent: 'center',
    alignContent: 'center',
  },

  scrollview : {
    borderWidth: 1,
    borderRadius: 20,
  },

  button: {
    backgroundColor: '#F4F4F4',
    padding:20,
    borderRadius:40,
    elevation: 5,
  },

  timerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap:30,
    padding: 20
  },

  subtitle: {
    fontWeight: '800'
  },

  timerFont: {
    fontSize: 24,
  }

});

export default HomeScreen