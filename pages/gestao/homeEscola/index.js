import React from 'react';
import { View, Text, Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

export default function Home(){
    const navigation = useNavigation();

    const goToCadTurma = () => {
        navigation.navigate('CadTurma');
    }

    const goTCadProf = () => {
        navigation.navigate('CadProf');
    }

    let [fontsLoaded] = useFonts({
        Poppins_600SemiBold
    });

    if(!fontsLoaded){
        return null;
    }

    return(
        <View style={styles.container}>

        </View>
    );
}
