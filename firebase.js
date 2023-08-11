import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API,
	authDomain: 'dcode2307.firebaseapp.com',
	projectId: 'dcode2307',
	storageBucket: 'dcode2307.appspot.com',
	messagingSenderId: '111290350000',
	appId: '1:111290350000:web:4c91b4bbc0224108287e75',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
