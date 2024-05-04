import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo:
    {
        marginLeft: 50,
        marginBottom: 80,
        width: 250,
        height: 250
    },
    titulo:{
        fontSize: 30,
        marginBottom: 100,
        color:'#2ecffb',
        fontFamily: 'Poppins_600SemiBold'
    },
    entrar:{
        backgroundColor: '#2ecffb',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 60,
        borderRadius: 10,
        margin: 20,

    },
    criar:{
        padding: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#2ecffb',
        width: 150,
        borderRadius: 10,
        margin: 20,
    },
    buttonsContainer:{
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default styles