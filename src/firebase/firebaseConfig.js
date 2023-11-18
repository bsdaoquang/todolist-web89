/** @format */

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDMY3fv_Z-ctXxMe6z0VS19GVJBfMV65fU',
	authDomain: 'todolist-web89.firebaseapp.com',
	projectId: 'todolist-web89',
	storageBucket: 'todolist-web89.appspot.com',
	messagingSenderId: '944857330951',
	appId: '1:944857330951:web:6b4870a0214fc20fa801a2',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
