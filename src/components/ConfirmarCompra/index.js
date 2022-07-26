import { useContext, useState } from "react";
import { Shop } from "../../contex/ShopProv";
import {db} from "../../firebase/config";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './estilos.css';
import { addDoc, collection } from "firebase/firestore";
import swal from "sweetalert";



const ConfirmarCompra = () =>{

    //Contex del carrito.
    const {cart, Total}= useContext(Shop)

    // Use state que permite obtener id de la compra,mostrar modal y obtener datos del comprador.
    const[idCompra,setIdCompra]= useState("")
    const [comprador, setComprador] = useState({
        nombre: '',
        apellido: '',
        email: '',
        confirmacionEmail:'',
        telefono: '',
    })
     const finalizar =() =>{
        swal({
            title:"Muchas gracias por su compra, " ,
            html: <p>Su N° de Orden es:" {idCompra} </p>,
            text: "El total de su compra fue de ,"+ Total(),

            }
        )
    }

    const handleInputChange = (e) =>{
        console.log(e.target.nombre);
        setComprador({...comprador,[e.target.nombre]:e.target.value})
    }

    //Generacion de Orden con info de comprador.
    const orderHandle = async () => {
        const orderr = {
            comprador,
            items:cart,
            total:Total(),
            date:new Date(),

        }
     await addDoc(collection(db, "orders"), orderr)
    .then(res => (res.id))
    }


        //Render de Confirmacion de compra
        return (
        <>
            {/* Confirmacion */}
            <div className="contenedor">
                
                        
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
                                    <p className="text-danger">$ {Total()}</p>
                                </div>
                            </div>
                            <Link to='/cart'>
                
                                Volver al carrito
                            </Link>
                        </div>

                        {/* Detalle de facturación */}
                        <div className="detalle">

                            {/* Formulario */}
                            <form className="row ">
                                
                                <h2 className='form'>Detalles de facturación</h2>
                                <div className="col-md-3">
                                <input
                                    id="nombre"
                                    type="text"
                                    name="nombre"
                                    required
                                    onChange={handleInputChange}
                                    placeholder="Nombre"
                                    className="form-control "
                                />
                                </div>
                                <div className="col-md-3">
                                <input
                                    id="apellido"
                                    type="text"
                                    name="apellido"
                                    required
                                    onChange={handleInputChange}
                                    placeholder="Apellido"
                                    className="form-control"
                                />
                                </div>
                                <div className="col-md-3">
                                <input
                                    id="telefono"
                                    type="tel"
                                    name="telefono"
                                    required
                                    onChange={handleInputChange}
                                    placeholder="Teléfono (insertar como mínimo 7 dígitos)"
                                    className="form-control"
                                />
                                </div>
                                <div className="col-md-3">
                                <input
                    
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    onChange={handleInputChange}
                                    placeholder="E-mail"
                                    className="form-control"
                                />
                                </div>
                                <div className="col-md-3">
                                <input
                                
                                    id="emailConfirm"
                                    type="email"
                                    name="emailConfirm"
                                    required
                                    onChange={handleInputChange}
                                    placeholder="Confirmar e-mail"
                                    className="form-control"
                                />
                                </div>
                            </form>
                            { true ? (
                                    <button onClick={finalizar}>
                                            Finalizar
                                    </button>

                                   
                                ) : (
                                    <Link to='/'>Volver a Inicio</Link>
                                   
                                )
                            
                                }</div>
             </div>
        </>
    )
    };

   export default ConfirmarCompra
