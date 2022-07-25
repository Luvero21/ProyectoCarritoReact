/*import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';

const saveProducts = async () => {
    const response = await fetch('/data.json');
    const itemsGuardados = await response.json();

    itemsGuardados.forEach( async (producto) => {
        const docRef = await addDoc(collection(db,"productos"),{
            title:producto.title,
            price:producto.price,
            description:producto.description,
            category:producto.category,
            image:producto.image,
            stock:15,

        });
        console.log("ID: ", docRef.id );
       
    });
  console.log(itemsGuardados);
}


export default saveProducts*/