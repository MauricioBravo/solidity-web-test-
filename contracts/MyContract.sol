pragma solidity ^0.5.0;
//el usuario gasta gas cuando ejecuta una funcion que modifica datos en la blockchain
contract MyContract{

    address[14] public billeteras; //quiero almacenar las 15 billeteras de donadores en mi página

    //funcion se crea dentro del contrato inteligente, 
    //dan funcionalidad, la ejecuta un usuario desde la web
    function donador(uint billeteraIndex) public returns(bool){

        require(billeteraIndex >= 0 && billeteraIndex <15, "fuera de rango");//precondiciones, luego de la coma es que pasa si no se cumple la condicion para ejecutar la funcion

        bool donoConExito = true;

        if(billeteras[billeteraIndex] == address(0) ){ //si el address está vacío billetera en ese index está vacío
            billeteras[billeteraIndex] = msg.sender;//msg.sender es la direccion de la cartera de quien ejecutó la acción

        } else{
            donoConExito = false;
        }
        return donoConExito;
    }
    
    function getBilleteras() public view returns (address[14] memory){ //como esta funcion no modifica nada en la blockchain su uso es gratuito, sin gas
        return billeteras;                          //solo se puede usar memory si es un array o una estructura, no string ni int por ej.
    }

    
}