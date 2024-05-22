import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Snackbar } from 'react-native-paper';

const CadAluno = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [diagnostico, setDiagnostico] = useState('');
  const [nomeEscola, setNomeEscola] = useState('');
  const [turma, setTurma] = useState('');
  const [tipoUser, setTipoUser] = useState('');
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

  createTableAluno();
  
  const insertAluno = () => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO a (nomeAluno, dataNascAluno, cpfAluno, diagnosticoAluno, nomeEscolaAluno, salaAluno, turmaAluno, tipoUser) VALUES (?, ?, ?, ?, ?, ?, ?, ?);',
        [nome, dataNasc, cpf, diagnostico, nomeEscola, sala, turma, tipoUser],
        (_, result) => {
          setListaInfo([...listaInfo, { nome, dataNasc, cpf, diagnostico, nomeEscola, sala, turma, tipoUser }]);
          showSnackbar('Estudante cadastrado com sucesso');
        },
        error => {
          console.log('O estudante não foi cadastrado', error);
        }
      );
    });
  };

  const getAllUsers = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM aluno;',
        [],
        (_, result) => {
          const data = [];
          for (let i = 0; i < result.rows.length; i++) {
            data.push(result.rows.item(i));
          }
          setListaInfo(data);
          showSnackbar('Todos os usuários foram recuperados');
        },
        error => {
          console.log('Error occurred while fetching users:', error);
        }
      );
    });
  };

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Responsável', value: 'responsavel'},
    {label: 'Docente', value: 'docente'},
    {label: 'Gestão', value: 'gestao'},
    {label: 'Acompanhante', value: 'acompanhante'}
  ]);

  return (
    
    <View style={styles.container}>

        <Text style={styles.textTitle}>C.R.U.D SQLite</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={text => setNome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Data de Nascimento"
          value={dataNasc}
          onChangeText={text => setDataNasc(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="CPF"
          value={cpf}
          onChangeText={text => setCpf(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Diagnóstico"
          value={diagnostico}
          onChangeText={text => setDiagnostico(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Nome da Escola"
          value={nomeEscola}
          onChangeText={text => setNomeEscola(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Sala"
          value={sala}
          onChangeText={text => setSala(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Turma"
          value={turma}
          onChangeText={text => setTurma(text)}
        />

        <DropDownPicker style={{}}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onChangeValue={(value) => setTipoUser(value)}
        />

        <View style={styles.buttonContainer}>
          <Button title="Create" onPress={insertAluno} />
          <Button title="Read All" onPress={getAllUsers} />
        </View>

        <FlatList
          data={listaInfo}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onPress(item)}>
              <Text>{item.nome + ', ' + item.cpf + ', ' + item.nomeEscola}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.cpf}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PagInicial')}>
          <Text>Tudo pronto!</Text>
        </TouchableOpacity>



        <Snackbar
          style={{ backgroundColor: 'red', borderRadius: 10 }}
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
    
  );
};

export default CadAluno;

