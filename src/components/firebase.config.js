import {getApp,getApps,initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAbiJQRvIls81W8-hHOYHvQoTYipjC36SU",
    authDomain: "reastaurantapp-2c153.firebaseapp.com",
    databaseURL: "https://reastaurantapp-2c153-default-rtdb.firebaseio.com",
    projectId: "reastaurantapp-2c153",
    storageBucket: "reastaurantapp-2c153.appspot.com",
    messagingSenderId: "849486614339",
    appId: "1:849486614339:web:62190667e0a45c7e10a9f6"
  };

  const app = getApps.Length >0 ? getApp() : initializeApp(firebaseConfig)
  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export{app,firestore,storage}
