import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity,TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { useFonts, Poppins_600SemiBold, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function CadAl(){
    const [nome, setNome] = useState('');
    const [ra, setRa] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [diagnostico, setDiagnostico] = useState('');
    const [email1, setEmail1] = useState('');
    const [telefone1, setTelefone1] = useState('');
    const [email2, setEmail2] = useState('');
    const [telefone2, setTelefone2] = useState('');
    const [senha, setSenha] = useState('');


    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Poppins_600SemiBold,
        Poppins_400Regular
    });

    if(!fontsLoaded){
        return null;
    }

    return(
        <View style={styles.container}>
            <View style={styles.information}>
                <Text style={styles.titulo}>Preencha as lacunas abaixo com aas informações do estudante a ser registrado</Text>
            </View>
            <View style={styles.form}>
                <View>
                    <Text style={styles.label}>Nome completo</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setNome}
                        value={nome}
                    />
                </View>
                <View>
                    <Text style={styles.label}>RA do estudante</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setRa}
                        value={ra}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Data de nascimento</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setDataNasc}
                        value={dataNasc}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Diagnóstico do estudante</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setDiagnostico}
                        value={diagnostico}
                    />
                </View>
                <View>
                    <Text style={styles.label}>E-Mail do responsável</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail1}
                        value={email1}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Telefone do responsável</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setTelefone1}
                        value={telefone1}
                    />
                </View>
                <View>
                    <Text style={styles.label}>E-Mail do responsável 2</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail2}
                        value={email2}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Telefone do responsável 2</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setTelefone2}
                        value={telefone2}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setSenha}
                        value={senha}
                    />
                </View>

                <TouchableOpacity style={styles.c}>
                    <Text style={{fontFamily: 'Poppins_600SemiBold',color: '#fff',fontSize: 20}}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
}