import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { useFonts, Poppins_600SemiBold, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function SingUp() {
    const [cpfDiretor, setCpfDiretor] = useState('');
    const [nomeDiretor, setNomeDiretor] = useState('');
    const [email, setEmail] = useState('');
    const [nomeEscola, setNomeEscola] = useState('');
    const [senha, setSenha] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');

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
                    <Text style={styles.titulo}>Preencha as lacunas abaixo com as informações da escola para criar sua conta e poder gerenciar a gestão da sua escola</Text>
                </View>
                <View style={styles.form}>
                    <View>
                        <Text style={styles.label}>CPF do Diretor:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o CPF do Diretor"
                            placeholderTextColor="#bfbdbd"
                            onChangeText={setCpfDiretor}
                            value={cpfDiretor}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Nome do Diretor:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o Nome do Diretor"
                            placeholderTextColor="#bfbdbd"
                            onChangeText={setNomeDiretor}
                            value={nomeDiretor}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Email:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o Email"
                            placeholderTextColor="#bfbdbd"
                            onChangeText={setEmail}
                            value={email}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Endereço da Escola:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o Endereço da Escola"
                            placeholderTextColor="#bfbdbd"
                            onChangeText={setEndereco}
                            value={endereco}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Nome da Escola:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o Nome da Escola"
                            placeholderTextColor="#bfbdbd"
                            onChangeText={setNomeEscola}
                            value={nomeEscola}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Telefone:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o Telefone"
                            placeholderTextColor="#bfbdbd"
                            onChangeText={setTelefone}
                            value={telefone}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Senha:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite sua Senha"
                            placeholderTextColor="#bfbdbd"
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