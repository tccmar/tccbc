import React from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

export default function Home(){
    const navigation = useNavigation();

    const goToLogin = () => {
        navigation.navigate('Login');
    }

    const goToSingUp = () => {
        navigation.navigate('SingUp');
    }

    let [fontsLoaded] = useFonts({
        Poppins_600SemiBold
    });

    if(!fontsLoaded){
        return null;
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>BlueCare Mobile</Text>
            <Image source={require('../../assets/bluecare.png')} style={styles.logo}/>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.entrar} onPress={goToLogin}>
                    <Text style={{fontFamily: 'Poppins_600SemiBold',color: '#fff',fontSize: 20}}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.criar} onPress={goToSingUp}>
                    <Text style={{fontFamily: 'Poppins_600SemiBold',color: '#2ecffb'}}>Criar conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
