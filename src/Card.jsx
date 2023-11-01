export const Card = ({usuario, contrasenia})=>{
    return(
        <>
            <h2>Hola, {usuario}</h2>
            <p>la contraseña que ingresaste es: {contrasenia}</p>
        </>
    )
}