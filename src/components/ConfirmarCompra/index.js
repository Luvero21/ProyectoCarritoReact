import { useContext, useState } from "react";
import { Shop } from "../../contex/ShopProv";
import {addOrder} from "../../firebase/config";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './estilos.css';




const ConfirmarCompra = () =>{

    //Contex del carrito.
    const {cart, Total, cartLenght}= useContext(Shop);

    // Use state que permite obtener id de la compra,mostrar modal y obtener datos del comprador.
    const[idCompra,setIdCompra]= useState("");
    const[showModal,setShowModal]=useState(false);
    const [comprador, setComprador] = useState({
        nombre: '',
        apellido: '',
        dirección:'',
        email: '',
        confirmacionEmail:'',
        telefono: '',
    })

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    const telephoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{1,6}$/im

     /*const finalizar =() =>{
        swal({
            title:"Muchas gracias por su compra, " ,
            html: <p>Su N° de Orden es:" {idCompra} </p>,
            text: "El total de su compra fue de ,"+ Total(),

            }
        )
    }*/
     const orderDate = new Date().toLocaleDateString();
   
 //Generacion de Orden con info de comprador.
    const handleSubmitChange = (e) =>{
        setComprador({...comprador, [e.target.name]: e.target.value})
    }   
//Orden con info del cliente y compra
    const orderHandle = async () => {
        const orderr = {
            comprador,
            items:cart,
            total:Total(),
            date:orderDate,
        }

        addOrder(orderr).then(data =>{
            setIdCompra(data)
        })
    /* await addDoc(collection(db, "orders"), orderr)
    .then(res => (res.id))*/
    }


        //Render de Confirmacion de compra
        return (
        <>
            {/* Confirmacion */}
            <div className="contenedor">
                
                        
                        {/* Resúmen */}
                        <div className="titu">
                            <h3 className='resumen text-secondary'>Resúmen</h3>
                            <div>
                                <div className= 'resumen'>
                                    <p className="text-secondary">Cantidad de items:</p>
                                    <p>{cartLenght()}</p>
                                </div>
                                <div className= 'resumen'>
                                    <p className="text-secondary">Productos:</p>
                                    <p>{cart.productos}</p>
                                </div>
                                <div className='resumen'>
                                    <p className="text-secondary">Gastos de envío:</p>
                                    <p>¡Envío gratis!</p>
                                </div>
                                <div className= 'resumen'>
                                    <p className="text-secondary">Fecha:</p>
                                    <p>{orderDate}</p>
                                </div>
                                <div className='resumen'>
                                    <p className="text-secondary">Total de la compra:</p>
                                    <p className="text-danger">$ {Total()}</p>
                                </div>
                            </div>
                            <Link className="link" to='/cart'>
                
                                Volver al carrito
                            </Link>
                        </div>

                        {/* Detalle de facturación */}
                        <div className="container">
                            

                            {/* Formulario */}
                            <form className="row g-3 pb-5 ">
                                
                                <h2 className='form text-secondary text-center pt-5'>Complete con sus datos</h2>
                                <div className="col-6 pt-3">
                                <input
                                    id="nombre"
                                    type="text"
                                    name="nombre"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Nombre"
                                    className="form-control "
                                />
                                </div>
                                <div className="col-6 pt-3">
                                <input
                                    id="apellido"
                                    type="text"
                                    name="apellido"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Apellido"
                                    className="form-control"
                                />
                                </div>
                                <div className="col-12">
                                <input
                                    id="dirección"
                                    type="text"
                                    name="dirección"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Dirección"
                                    className="form-control"
                                />
                                </div>
                                <div className="col-6">
                                <input
                                    id="telefono"
                                    type="tel"
                                    name="telefono"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Teléfono (insertar como mínimo 7 dígitos)"
                                    className="form-control"
                                />
                                </div>
                                <div className="col-6">
                                <input
                    
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="E-mail"
                                    className="form-control"
                                />
                                </div>
                                <div className="col-6">
                                <input
                                
                                    id="emailConfirm"
                                    type="email"
                                    name="emailConfirm"
                                    required
                                    onChange={handleSubmitChange}
                                    placeholder="Confirmar e-mail"
                                    className="form-control"
                                />
                                </div>
                            </form>
                           </div>
                            {comprador.nombre && comprador.apellido && comprador.telefono&&comprador.dirección && telephoneRegex.test(comprador.telefono)&& emailRegex.test(comprador.email, comprador.emailConfirm)
                             ? (
                                
                                <input 
                                        className="bg-secondary text-white text-center "
                                        onClick={() => { orderHandle(); setShowModal(true) }}
                                        type="submit" 
                                        value="Proceder al pago" 
                                    />
                                    

                                   
                                ) : (
                                    <input 
                                        className="text-center"
                                        type="submit" 
                                        value="Proceder al pago" 
                                        disabled 
                                    />
                                   // <Link to='/'>Volver a Inicio</Link>
                                   
                                )
                            
                                }
                            
             </div>
             <div className={`${showModal ? "flex" : "hidden"} text-secondary mt-5 pt-5`}>
                <div className="container mx-auto justify-center items-center px-4 md:px-10 py-20 place-self-center">
                    <div className="bg-white px-3 md:px-4 py-12 flex flex-col justify-center items-center">
                        <h2>¡Muchas gracias por tu compra {(comprador.nombre).toUpperCase()}!</h2>
                        <p className="pt-5 text-danger">Te enviamos un mail a {(comprador.email).toLowerCase()} con tu orden de compra ID: {idCompra}. ¡Hasta la próxima!</p>
                        <Link to="/">
                            
                                Volver al inicio
                    
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
    };

   export default ConfirmarCompra
