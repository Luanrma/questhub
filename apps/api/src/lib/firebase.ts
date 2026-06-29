import { cert, getApps, initializeApp } from 'firebase-admin/app'
import { getStorage } from 'firebase-admin/storage'
import { env, firebasePrivateKey, firebaseStorageBucket } from '../config/env'

function getFirebaseApp() {
  const existingApp = getApps()[0]
  if (existingApp) return existingApp

  try {
    return initializeApp({
      credential: cert({
        projectId: env.FIREBASE_PROJECT_ID,
        clientEmail: env.FIREBASE_CLIENT_EMAIL,
        privateKey: firebasePrivateKey,
      }),
      storageBucket: firebaseStorageBucket,
    })
  } catch (err) {
    throw new Error(
      'Firebase Admin SDK nao conseguiu ler FIREBASE_PRIVATE_KEY. Use a private_key completa do service account, com \\n escapado, quebras reais, ou base64 do PEM.',
      { cause: err },
    )
  }
}

export function getFirebaseStorage() {
  return getStorage(getFirebaseApp())
}
