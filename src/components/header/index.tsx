import { Text, View,StyleSheet } from "react-native";


export default function Header(){
    return(
        <View style={styles.container}>
            <Text style={styles.logo}>GitSearch</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#001f3f",
        width:"100%",
        height:60,
        alignItems:"center",
        justifyContent:"center",
        borderBottomLeftRadius:3,
        borderBottomRightRadius:3,
        marginTop:25
    },

    logo:{
        fontSize:20,
        fontWeight:"bold",
        color:"#ffff"
    }
})