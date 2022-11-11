const HDWalletProvider = require('@truffle/hdwallet-provider'); //libreria para acceder a nuestra wallet
const provider = new HDWalletProvider({ //el provider es donde quiero desplegar el contrato inteligente
   privateKeys: ['46fa219235321a42b24a64773eb8439c3bed2c2add57ec2a6a006e06cee60b6e'], //clave privada de mi wallet
   providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545', //url de la wallet de pruebas de bsc
})


module.exports = { //se crea objeto json networks
  networks: {
    binanceTestnet: { //metemos un nombre que queramos
      provider: () => provider, //el provider de arriba
      network_id: "97", //la id de la red de purebas
      gas: 29000000 //maximo gas a gastar en gwei 18 ceros es un bnb
    },
    develop: {
      port: 8545
    }
  } 
};

//para iniciar el proyecto primero se instala la libreria en el directorio del proyecto
//npm install @truffle/hdwallet-provider
//si no funciona instalar git
//luego se debe ejecutar el comando de truffle que hace la migracion del proyecto
//truffle migrate --reset --network binanceTestnet 

//si despliego el contrato de nuevo se despliega en otra direccion, es decir lo que yo despliegue es inmodificable por otros
//asi que antes de desplegar de nuevo, borrar lo de la carpeta build o moverlo es bueno porque se sobreescribe, y a veces no lo hace bien