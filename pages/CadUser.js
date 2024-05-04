import { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import * as SQLite from 'expo-sqlite';
import { Snackbar } from 'react-native-paper';
import { createTableUsuario, insertUser, getAllUsers, updateUser, deleteUser } from '../bancoDados/dbUser.js';

const db = SQLite.openDatabase('db.db');

const CadUser = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [listaInfo, setListaInfo] = useState([]);
  const [msg, setMsg] = useState('');
  const [visible, setVisible] = useState(false);

  const showSnackbar = (message) => {
    setMsg(message);
    setVisible(true);
  };

  const hideSnackbar = () => {
    setVisible(false);
  };

  createTableUsuario();

  insertUser();

  getAllUsers();

  updateUser();

  deleteUser();


  const onPress = (item) => {
    setNome(item.nome);
    setEmail(item.email);
    setTelefone(item.telefone);
    setSenha(item.senha);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textTitle}>C.R.U.D SQLite</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={telefone}
          onChangeText={(text) => setTelefone(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry
        />

        <View style={styles.buttonContainer}>
          <Button title="Create" onPress={insertUser} />
          <Button title="Read All" onPress={getAllUsers} />
          <Button title="Update" onPress={updateUser} />
          <Button title="Delete" onPress={deleteUser} />
        </View>

        <FlatList
          data={listaInfo}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onPress(item)}>
              <Text>
                {item.nome + ', ' + item.telefone + ', ' + item.email}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.cpf}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text>Tudo pronto!</Text>
        </TouchableOpacity>

        <Snackbar
          style={{ backgroundColor: 'red', borderRadius: 5 }}
          visible={visible}
          onDismiss={hideSnackbar}
          duration={3000}
          action={{
            label: 'OK',
            onPress: hideSnackbar,
          }}>
          {msg}
        </Snackbar>
      </View>
    </ScrollView>
  );
};

export default CadUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingLeft: 16,
    paddingRight: 16,
  },
  input: {
    marginBottom: 8,
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontSize: 24,
    color: 'blue',
    marginBottom: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 10,
  },
});
