import { useContext, useState } from "react";
import { Shop } from "../../contex/ShopProv";
import {addOrder} from "../../firebase/config";
import { Link } from 'react-router-dom';
import Cart from "../../Containers/Cart";



const ConfirmarCompra = () =>{

    //Contex del carrito.
    const {cart, clear, Total}= useContext(Shop)

    // Use state que permite obtener id de la compra,mostrar modal y obtener datos del comprador.
    const[idCompra,setIdCompra]= useState("")
    const[showModal, setShowModal] = useState ( false)
    const [comprador, setComprador] = useState({
        nombre: '',
        apellido: '',
        email: '',
        confirmacionEmail:'',
        telefono: '',
    })

    const handleSubmitChange = (e) =>{
        setComprador({...comprador,[e.target.nombre]:e.target.value})
    }

    //Generacion de Orden con info de comprador.
    function orderHandle() {
        const orderr = {
            comprador,
            producto:cart,
            total:Total,
            date:new Date().toLocaleDateString(),

        }
        addOrder(orderr).then(data => {
            setIdCompra(data)
        })
    }

        //Render de Confirmacion de compra
        return (
        <>
            {/* Confirmacion */}
            <div className="contenedor">
                <div className="flex">

                    {/* Título */}
                    <h2 className='title'> CONFIRMACION DE COMPRA </h2>
                    
                    {/* Información de la compra */}
                    <div className="info">
                        
                        {/* Resúmen */}
                        <div className="resumen">
                            <h3 className='resumen'>Resúmen</h3>
                            <div className="flex">
                                <div className= 'resumen'>
                                    <p>Cantidad de items:</p>
                                    <p>{cart.length}</p>
                                </div>
                                <div className= 'resumen'>
                                    <p>Productos:</p>
                                    <p>{cart.title}</p>
                                </div>
                                <div className='resumen'>
                                    <p>Gastos de envío:</p>
                                    <p>¡Envío gratis!</p>
                                </div>
                                <div className='resumen'>
                                    <p>Total:</p>
                                    <p>{Total()}</p>
                                </div>
                            </div>
                            <Link to='/cart'>
                
                                Volver al carrito
                            </Link>
                        </div>

                        {/* Detalle de facturación */}
                        <div className="detalle">

                            {/* Formulario */}
                            <form className="space-y-6">
                                <h2 className='form'>Detalles de facturación</h2>
                                <input
                                    id="nombre"
                                    type="text"
                                    name="nombre"
                                    required
                                    onClick={handleSubmitChange}
                                    placeholder="Nombre"
                                />
                                <input
                                    id="apellido"
                                    type="text"
                                    name="apellido"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Apellido"
                                />
                                <input
                                    id="telefono"
                                    type="tel"
                                    name="telefono"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Teléfono (insertar como mínimo 7 dígitos)"
                                />
                                <input
                    
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="E-mail"
                                />
                                <input
                                
                                    id="emailConfirm"
                                    type="email"
                                    name="emailConfirm"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Confirmar e-mail"
                                />
                            </form>

                            {/* Si se completan todos los inputs correctamente, se habilita el botón para proceder con el pago */}
                            {comprador.nombre && comprador.apellido && comprador.telefono && (comprador.email === comprador.confirmacionEmail)
                                ? (
                                    // Botón habilitado
                                    <input 
                                        onClick={() => { orderHandle(); setShowModal(true) }} 
                                        type="submit" 
                                        value="Proceder al pago" 
                                    />
                                ) : (
                                    // Botón deshabilitado
                                    <input
                                        type="submit" 
                                        value="Proceder al pago" 
                                        disabled 
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* Contenedor modal final */}
            <div>
                <div>
                    <div className="conclusion">
                        <h2 >¡Muchas gracias por tu compra {(comprador.nombre).toUpperCase()}!</h2>
                        <p >Te enviamos un mail a {(comprador.email).toLowerCase()} con tu orden de compra ID: {idCompra}. Esperamos que hayas tenido una linda experiencia con TIENDA LYP. ¡Hasta la próxima!</p>
                        <Link to="/" className="mt-6 flex justify-center">
                            <button onClick={clear}>
                                Volver al inicio
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
    };

   export default ConfirmarCompra
