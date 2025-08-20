para poder utilizarlo deben tener intalado node.js https://nodejs.org/en/download
en una terminal dentro del proyecto ejecutar el comando npm install
para ejecutar el server es npm run dev
para acceder al endpoint en este caso el unico que existe de momento el de deffects http://localhost:3000/arbas/defects/getDefect/CDEX-419363
el valor dinamico en este caso es el numero de deffect puede recibr cualquiera example: http://localhost:3000/arbas/defects/getDefect/{{deffectId}} , incluso US normales pero para eso voy a crear otro path para tener consistencia en cuales son defects y que es US
pueden testearlo desde postman con el servidor ejecutandose en su local
