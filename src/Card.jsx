export const Card = ({user, password})=>{
    return(
        <>
            <h2>Hola, {user}</h2>
            <p>la contraseña que ingresaste es: {password}</p>
        </>
    )
}