let elevador = (function(pisosT){
    pisoActual = 1;
    estadoPuerta = true;
    pisosTotales = 4;
    pisosTotales = pisosT;

    function cerrar(){
        if (estadoPuerta) {
            estadoPuerta = false;   
        }
    };
    function subir(){
        if(pisoActual<pisosTotales && estadoPuerta ==false){
            pisoActual++;
        }
    };
    function bajar(){
        pisoActual--;
    }
    function irApiso(destino){
        cerrar();
        if(destino > 0 && destino <= pisosTotales){
            if(destino < pisoActual){
                
            }
        }
    }
    function estado(){
        return pisoActual + '/' + pisosTotales + "abierto o cerrado";
    }
})