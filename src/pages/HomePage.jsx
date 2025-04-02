import Title from "../components/Title";
import { useContatore } from "../composable/useContatore"

function HomePage()
{
    const {
        contatore,
        incrementa,
        decrementa,
        aggiungi,
        numero,
        changeNumero,
      } = useContatore();

    return (
        <>
            <Title label="Home" pippo="ciao" />
            <p>{ contatore }</p>
            <button onClick={ incrementa }>Incrementa</button>
            <button onClick={ decrementa }>Decrementa</button>

            <input type="number" value={ numero } onChange={ changeNumero } />
            <button onClick={ aggiungi }>Aggiungi numero</button>
        </>
    )
}

export default HomePage