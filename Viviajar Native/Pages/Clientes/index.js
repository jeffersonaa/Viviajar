import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Card from "../../Components/Card";
import Search from '../../Components/Search';
import Axios from "../../Utils/Axios";

function Clientes() {

    const [ clientes, setClientes ] = useState([]);
    const [ initial, setInitial ] = useState([]);

    useEffect(async () => {

        const data = await Axios.get("/cliente")

        setClientes(data.data)
        setInitial(data.data)
    }, []);

    const handleSearch = e => {
        
        if(e === ""){
            setClientes(initial)
        }else{
            setClientes(clientes.filter(({ nome }) => nome.includes(e)));
        }
    }


  return <View style={{ paddingTop: 25, justifyContent: 'center', alignItems: 'center' }}>

    <Search change={handleSearch} />

    {clientes.map(({ nome, email }) => <Card key={nome}>
        <Text style={styles.name}>{ nome }</Text>
        <Text>{ email }</Text>
    </Card>)}
    
</View>;
}

const styles = StyleSheet.create({
    name: {
        fontWeight: "bold"
    }
  });

export default Clientes;