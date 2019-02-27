import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCPVWdkpSuT80ztUJvIxnlLiC9GzDkQBDM',
  authDomain: 'heroyc-afe1f.firebaseapp.com',
  databaseURL: 'https://heroyc-afe1f.firebaseio.com',
  projectId: 'heroyc-afe1f',
  storageBucket: '',
  messagingSenderId: '93765122513'
}

firebase.initializeApp(config)
const db = firebase.database()

export default db
