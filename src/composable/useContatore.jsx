import React from "react";

export function useContatore() {

    const [contatore, setContatore] = React.useState(99);
    const [numero, setNumero] = React.useState(10);

    const incrementa = () => {
        setContatore( contatore + 1 );
    }

    const decrementa = () => {
        setContatore( contatore - 1 );
    }

    const aggiungi = () => {
        console.log('aggiungi');
        setContatore( contatore +  numero);
    }

    const changeNumero = (event) => {
        console.log(event.target.value);
        setNumero( Number(event.target.value) );
    }

    return {
        contatore,
        incrementa,
        decrementa,
        aggiungi,
        numero,
        changeNumero,
    }
}
