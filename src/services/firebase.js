import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

import { configFirebase } from '.'

export class Firebase {
  constructor() {
    firebase.initializeApp(configFirebase);

    this.db = firebase.database();
    this.auth = firebase.auth()
  }
  user = uid => this.db.ref(`users/${uid}`);

  signUp = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);
  signIn = (email, password) => this.auth.signInWithEmailAndPassword(email, password);
  signOut = () => this.auth.signOut();

  onAuthUser = (next, fallback) => this.auth.onAuthStateChanged(authUser => {
    if (authUser) {
      this.user(authUser.uid).once('value')
        .then(snapshot => {
          const dbUser = snapshot.val();
          if (!dbUser.todos) {
            dbUser.todos = []
          }
          authUser = {
            uid: authUser.uid,
            email: authUser.email,
            ...dbUser
          };
          next(authUser)
        })
    } else {
      fallback()
    }
  })
}
