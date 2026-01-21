<?php

class Conexion {

    public static function Conectar(){
        $nombreServidor= "localhost";
        $usuarioServidor = "root";
        $nombreBaseDatos = "miniproyecto";
        $password="";

        try {
            $objConexion = new PDO('mysql:host='.$nombreServidor.';dbname='.$nombreBaseDatos.';',$usuarioServidor,$password);
            $objConexion->exec("SET NAMES utf8mb4");
            $objConexion->exec("SET CHARACTER SET utf8mb4");

        } catch (Exception $e) {
            $objConexion = $e;
        }

        return $objConexion;        
    }
}
