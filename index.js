import { cert, initializeApp } from "firebase-admin/app";
import{ getFirestore} from 'firebase-admin/firestore';
import serviceAccount from "./serviceAccount.js";

// import our credentials (serviceAccount)
import seervieAccount from './serviceAccount.js';
// connect to our firebase project using those credentials
initializeApp({
    credential: cert(serviceAccount)
})


// connect to firestore database 
const db = getFirestore();

// define a new video game:
const newGame = {
    tittle: 'Frogger',
    rated: 'E',
    genre: 'Arcade',
    released: 1981,
    

}



// create a doc inside a collection 
db.collection('games').add(newGame)

// if ok, console log the doc id 
.then(doc => console.log('game created: ', doc.id))

// if not, console the error 
.catch(console.error) 
//get all games 
db.collection('games').get()
.then(collection => {
    collection.docs.forEach(doc => {
        console.log(doc.id,doc.data())
    })
})
.catch(console.error)

db.collection('game').where('title', '==', 'Frogger'.update({ released: 1982}))

db.collection('game').where('tittle', '==', 'Dead Island 2').delete()