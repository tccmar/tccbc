import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity,TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { useFonts, Poppins_600SemiBold, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function Login(){
    const [email, setEmail] = useState('');
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
                <Text style={styles.titulo}>Preencha as lacunas abaixo com suas informações para acessar sua conta</Text>
            </View>
            <View style={styles.form}>
                <View>
                    <Text style={styles.label}>E-Mail:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Senha:</Text>
                    <TextInput
                        style={styles.input}
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