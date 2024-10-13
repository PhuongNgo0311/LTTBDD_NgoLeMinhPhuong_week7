import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, Placeholder } from 'react-native';



export default function Screen7a({ navigation }) {



  
  return (
  <View style={styles.container}>
    <Image source={require('../assets/Image95.png')}/>
    <Text style = {styles.textMain}>
    MANAGER YOUR TASK
    </Text>


  <TextInput 
    style={styles.center} 
    placeholder="Enter your name"
  />

    
    <TouchableOpacity 
    style={styles.button} 
    onPress={() => navigation.navigate('Screen7b')}

    >
      <Text style={styles.buttonText}>  
      GET STARTED ->
      </Text>
  
    </TouchableOpacity>


    </View>

   );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },

  textMain:{
    color:'#8353E2',
    fontFamily:'Epilogue',
    fontWeight:700,
    fontSize:'24px',
    lineHeight:'36px',
    alignItems:'Center',
    left:'1px',
  },

  button:{
    backgroundColor:'#00BDD6',
    height:'44px',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:'10px',
  },
  buttonText:{
    color:'#FFFFFF',
    fontFamily:'Inter',
    height:'15px',
    
  },

  center:{
   height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 8,
    borderRadius:'12px',
  },

});
