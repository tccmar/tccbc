import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity,TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { useFonts, Poppins_600SemiBold, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function Login(){
    const [cpf, setCpf] = useState('');
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
                <Text style={styles.titulo}>Preencha as lacunas abaixo com as informações cadastradas pela gestão escolar para acessar sua conta</Text>
            </View>
            <View style={styles.form}>
                <View>
                    <Text style={styles.label}>CPF:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu CPF"
                        placeholderTextColor="#bfbdbd"
                        onChangeText={setCpf}
                        value={cpf}
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
                <TouchableOpacity style={styles.entrar}>
                    <Text style={{fontFamily: 'Poppins_600SemiBold',color: '#fff',fontSize: 20}}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
        );
}