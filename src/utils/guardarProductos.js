import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';

const guardarProductos = async () => {
    console.log("Entra una vez");
    const response = await fetch('/data.json');
    const productosAguardar = await response.json();

    productosAguardar.forEach( async (producto) => {
        const docRef = await addDoc(collection(db,"productos"),{
            title:producto.title,
            price:producto.price,
            descripcion:producto.descripcion,
            category:producto.category,
            image:producto.image,
            stock:15,

        });
        //console.log("Document written with ID: ", docRef.id );
       
    });
  console.log(productosAguardar);
}


export default guardarProductos