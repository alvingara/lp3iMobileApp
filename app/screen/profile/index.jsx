import { 
    View,
    Text,
    StyleSheet
} from 'react-native'


export default function ProfileScreen(){
    return (
        <View style={StyleSheet.container}>
            <Text>Profile</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})