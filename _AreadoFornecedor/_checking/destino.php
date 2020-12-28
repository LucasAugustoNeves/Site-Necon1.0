<?php

$condominio = $_POST["Condominiodata"];
$fornecedor = $_POST["fornrcedordata"];
$tipo = $_POST["tipodata"];

$conteudo = "$condominio; $fornecedor; $tipo; ";

$DATA=date("d/m/Y"); 
$HORA=time("H");

$arq=fopen("data.txt","a") or die("Erro na crição do arquivo EMPENHOS.TXT");

fwrite($arq,"\r\n");

fwrite($arq,"*");
fwrite($arq,str_pad($condominio,100));

fwrite($arq,";");
fwrite($arq,str_pad( $fornecedor,74));


fwrite($arq,str_pad($DATA,20));

fwrite($arq,";");
fwrite($arq,str_pad($HORA,20));

fwrite($arq,";");
fwrite($arq,"\r\n");

fclose($arq);

$arq=fopen("Empenhos.csv","a") or die("Erro na crição do arquivo EMPENHOS.CSV");

fwrite($arq,"\r\n");

fwrite($arq,"*");
fwrite($arq,str_pad($condominio,100));

fwrite($arq,";");
fwrite($arq,str_pad( $fornecedor,74));

fwrite($arq,";");
fwrite($arq,str_pad($tipo,50));

fwrite($arq,";");
fwrite($arq,str_pad($DATA,20));

fwrite($arq,";");
fwrite($arq,str_pad($HORA,20));

fwrite($arq,";");
fwrite($arq,"\r\n");

fclose($arq);

  
  //FECHA O ARQUIVO
fclose($abrir);

  echo "<meta http-equiv='refresh' content='3;URL=cheking.html'>";

?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>gravar</title>
  <style>
      body {background-color: coral;}
  </style>  
</head>
<body>
</body>
</html>