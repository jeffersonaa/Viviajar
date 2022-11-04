import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Card from "../../Components/Card";
import Search from '../../Components/Search';
import Axios from "../../Utils/Axios";

function Passagens() {

    const [ passagens, setPassagens ] = useState([]);
    const [ initial, setInitial ] = useState([]);

    useEffect(async () => {

        const data = await Axios.get("/passagem")

        setPassagens(data.data)
        setInitial(data.data)
    }, []);

    const handleSearch = e => {
        
        if(e === ""){
          setPassagens(initial)
        }else{
          setPassagens(passagens.filter(({ cliente }) => cliente.nome.includes(e)));
        }
    }


  return <View style={{ paddingTop: 25, justifyContent: 'center', alignItems: 'center' }}>

    <Search change={handleSearch} />

    {passagens.map(({ cliente, destino }) => <Card key={cliente.nome}>
        <Text style={styles.name}>Cliente: { cliente.nome }</Text>
        <Text>Destino: { destino.nome }</Text>
    </Card>)}
    
</View>;
}

const styles = StyleSheet.create({
    name: {
        fontWeight: "bold"
    }
  });

export default Passagens;