// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import * as React from 'react';

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

const PagInicial = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.pgInicial}>
      <View style={{ flex: 1, padding: 24 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 24,
              textAlign: 'center',
              marginBottom: 5,
              color: '#6389c2',
            }}>
            BLUECARE Mobile
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CadUser')}>
            <Text style={styles.txtBtn}>Faça seu cadastro</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.txtBtn}> Acesse sua conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pgInicial: {
    flex: 1,
    backgroundColor: '#fbf9ec',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#6389c2',
    padding: 10,
    width: 300,
    borderRadius: 5,
    marginTop: 12,
    elevation: 2, // Android
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
  },

  txtBtn: {
    fontFamily: 'century gothic',
    color: 'white',
  },
});
export default PagInicial;
