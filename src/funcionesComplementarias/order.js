const order = (nombre,apellido,direccion,email,confirmacionEmail,telefono,Cart,Total) =>{

    return{
        comprador:{
        nombre: '',
        apellido: '',
        direccion:'',
        email: '',
        confirmacionEmail:'',
        telefono: '',
        },
        productos: Cart,
        Date:new Date().toLocalDateString(),
        total:Total,
        }
    }
    console.log(order);