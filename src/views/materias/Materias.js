import { Text } from '@rneui/base'
import React from 'react'
import { View } from 'react-native'
import { StyleSheet } from 'react-native'
import { Avatar, Button, Icon, Image, ListItem } from '@rneui/themed';
import { useState } from 'react';
import { url } from '../../helpers/url';
import { useSession } from '../../context/SessionProvider';
import { useEffect } from 'react';

export const Materias = () => {
    const [materias, setMaterias] = useState();
    const token = useSession()
    const list = [
        {
          title: 'Appointments',
          icon: 'av-timer'
        },
        {
          title: 'Trips',
          icon: 'flight-takeoff'
        }
      ]


      const getMaterias = async()=>{

        try {
            
            const response = await fetch(`${url}/materias`,{
              method: "GET",
              headers: {
                authorization: token,
                "Content-type": "application/json; charset=UTF-8",
              },
            })

            const result = await response.json()

            if (!response.ok) {
              return
            }
            const {materias} = result
            setMaterias(materias)

        } catch (error) {
            console.log();
        }

      }

      useEffect(()=>{
        getMaterias()
      },[])

  return (
    <View style={styles.container}>
    <Text style={styles.text}>Materias</Text>

    {
    materias?.map((materia, i) => (

      <ListItem key={i}>
      <ListItem.Content>
       
        <ListItem.Title> <Icon name='book'></Icon>{materia.descripcion_materia}</ListItem.Title>
        <View style={styles.subtitleView}>
          <Text style={styles.ratingText}>{materia.descripcion_carrera}</Text>
        </View>
      </ListItem.Content>
    </ListItem>

    ))
  }

    </View>
  )
}


const styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  },
    container: {
      flex: 1,
      backgroundColor: "#ffff",
    },
    text:{
      fontSize:30,
      marginTop:30,
      marginBottom:40,
      textAlign:"center",
    },
    buttonContainer: {
      height: 45,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 0,
      marginTop:500,
      width: 250,
      borderRadius: 30,
    },
    loginButton: {
      backgroundColor: "red",
    },
    loginText: {
      color: "white",
    },
  })