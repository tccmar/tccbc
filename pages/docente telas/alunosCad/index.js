import {
    Text,
    SafeAreaView,
    StyleSheet,
    View,
    Image,
    TouchableHighlight,
    FlatList,
    ScrollView,
    TextInput,
    TouchableOpacity
  } from 'react-native';
  
  import { Snackbar } from 'react-native-paper';
  
  import React, { useState, useEffect } from 'react';
  import AsyncStorage from '@react-native-community/async-storage';
  
   const infoAluno = () => {
      db.transaction(tx => {
        tx.executeSql(
          'select * from usuario;',
          [nome, dataNasc, diagnostico, nomeEscola,turma, tipoUser],
          (_, result) => {
            setListaInfo([...listaInfo, { nome, dataNasc, diagnostico, nomeEscola, sala, turma, id do user }]);
          },
        );
      });
  
      const renderItem2 = ({ item }) => (
      <View
        style={ styles.renderItem2}>
        <Image style={{ width: 20, height: 20 }} source={{ uri: item.imgurl }} />
        <Text style={{ fontWeight: 'bold', fontSize: 15, marginLeft: 10 }}>
          {item.nome}: {item.serie}
        </Text>
      </View>
    );
    
  <SafeAreaView style={styles.container}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
              Alunos Cadastrados
            </Text>
          </View>
  
          <View>
            <View
              style={{
                padding: 10,
                borderWidth: 2,
                borderRadius: 5,
                backgroundColor: '#BB94D4',
                marginTop: 20,
                borderColor:'#714794'
              }}>
              <FlatList
                style={{ marginTop: 10 }}
                data={infoAluno}
                renderItem={renderItem2}
                keyExtractor={(item) => item.id}
              />
            </View>
          </View>
          <TouchableHighlight
            style={{ position: 'absolute' }}
            onPress={() => setQualTela(1)}
            underlayColor="null">
            <Image
              style={{ width: 20, height: 20 }}
               source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/93/93634.png',
              }}
            />
          </TouchableHighlight>
        
      );
    ;
    </SafeAreaView>
  
      
  };
    
  