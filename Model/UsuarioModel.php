<?php

include_once "Conexion.php";

class UsuarioModel {


    public static function mdlListarUsuarios(){
        $mensage = array();

        try {
            $objRespuesta = Conexion::Conectar()->prepare("SELECT * FROM usuarios");
            $objRespuesta->execute();
            $listaUsuarios = $objRespuesta->fetchAll();
            $objRespuesta = null ;

            $message = array("codigo"=>"200","listaUsuarios"=>$listaUsuarios);
        } catch ( Exception $e) {
         $message = array("codigo"=>"400","mensaje"=>$e->getMessage());
        }
        return $message;
    }
}