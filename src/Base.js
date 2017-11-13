

const config = {
    apiKey: "AIzaSyBTh5YtiFcQUq2wlqCjZgfSV6g9_sjkse4",
    authDomain: "mercadodev-xokys.firebaseapp.com",
    databaseURL: "https://mercadodev-xokys.firebaseio.com",
    projectId: "mercadodev-xokys",
    storageBucket: "gs://mercadodev-xokys.appspot.com",
    messagingSenderId: "896379310241"
  };

  const Rebase = require('re-base')
  const firebase = require('firebase/app')
  require('firebase/database')
  require('firebase/storage')

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export const storage = app.storage()
  export const baseF = app.database()
  export default base