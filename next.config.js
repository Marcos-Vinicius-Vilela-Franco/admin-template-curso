/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
module.exports = {
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY:"AIzaSyBShKAx9IO5rxC1fUe67NbevkKAi1PWzic",
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:"admintemplateprojeto.firebaseapp.com",
    NEXT_PUBLIC_FIREBASE_PROJECT_ID:"admintemplateprojeto",
  },
}