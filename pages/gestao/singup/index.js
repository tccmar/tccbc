import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { useFonts, Poppins_600SemiBold, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function SingUp() {
    const [nomeEscola, setNomeEscola] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');

    const navigation = useNavigation();

    let [fontsLoaded] = useFonts({
        Poppins_600SemiBold
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.information}>
                    <Text style={styles.titulo}>Preencha as lacunas abaixo com as informações da escola para que a conta da gestão escolar seja cadastrada</Text>
                </View>
                <View style={styles.form}>
                    <View>
                        <Text style={styles.label}>Nome da escola</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setNomeEscola}
                            value={nomeEscola}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>E-Mail da escola</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setEmail}
                            value={email}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Telefone da escola</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setTelefone}
                            value={telefone}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Endereço da escola</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={setEndereco}
                            value={endereco}
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
                    <TouchableOpacity style={styles.cadastrar}>
                        <Text style={{ fontFamily: 'Poppins_600SemiBold', color: '#fff', fontSize: 20 }}>Cadastrar Gestão</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    
                </View>
            </View>
        </ScrollView>
    );
}