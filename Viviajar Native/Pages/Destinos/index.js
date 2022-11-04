import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Card from "../../Components/Card";
import Search from '../../Components/Search';
import Axios from "../../Utils/Axios";

function Destinos() {

    const [ destinos, setDestinos ] = useState([]);
    const [ initial, setInitial ] = useState([]);

    useEffect(async () => {

        const data = await Axios.get("/destino")

        setDestinos(data.data)
        setInitial(data.data)
    }, []);

    const handleSearch = e => {
        
        if(e === ""){
            setDestinos(initial)
        }else{
            setDestinos(destinos.filter(({ nome, descricao }) => nome.includes(e) || descricao.includes(e) ));
        }
    }


  return <View style={{ paddingTop: 25, justifyContent: 'center', alignItems: 'center' }}>

    <Search change={handleSearch} />

    {destinos.map(({ nome, estado, cidade, descricao }) => <Card key={nome}>
        <Text style={styles.name}>{ nome } - { cidade }, { estado }</Text>
        <Text>{ descricao }</Text>
    </Card>)}
    
</View>;
}

const styles = StyleSheet.create({
    name: {
        fontWeight: "bold"
    }
  });

export default Destinos;