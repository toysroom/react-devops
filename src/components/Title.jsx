function Title(props) {
    console.log(props)
    return (
        <h3 style={ {color: 'red'}}>{ props.label }</h3>
    )
}

export default Title;


function somma(a, b) {
    return a+b;
}