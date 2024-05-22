import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
       
    },
    information:{
        marginTop: 30,
        padding: 20,
        backgroundColor: '#c8a9f1',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        width: 400,
        marginRight:40,
    },
    titulo:{
        fontSize: 15,
        color:'#fff',
        fontFamily: 'Poppins_600SemiBold'
    },
    cadastrar:{
        marginTop: 20,
        backgroundColor: '#2ecffb',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        borderRadius: 5,
    },
    form:{
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        backgroundColor: '#f2f2f3',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        width: 370,
        fontFamily: 'Poppins_400Regular',
    },
    label:{
        color: '#c8a9f1',
        fontSize: 17,
        marginBottom: 10,
        fontFamily: 'Poppins_600SemiBold'
    },
    footer:{
        width: 400,
        height: 50,
    }
});
export default styles