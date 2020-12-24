<?php

$condominio = $_POST["Condominiodata"];
$fornecedor = $_POST["fornrcedordata"];
$tipo = $_POST["tipodata"];
$historico = $_POST["historicodata"];
$valor = $_POST["valordata"];
$recibo = $_POST["recibodata"];
$os = $_POST["osdata"];
$destino = $_POST["destinodata"];


$conteudo = "* $condominio; $fornecedor; $tipo; $historico; $valor; $recibo; $os; $destino; ";

//ARQUIVO TXT
$arquivo = "data.txt";
//TENTA ABRIR O ARQUIVO TXT
if (!$abrir = fopen($arquivo, "a")) {
  echo "Erro abrindo arquivo ($arquivo)";
  exit;
  }

  //ESCREVE NO ARQUIVO TXT
if (!fwrite($abrir, $conteudo)) {
  print "Erro escrevendo no arquivo ($arquivo)";
  exit;
  }else{

  echo "Arquivo gravado com Sucesso !!";

  }






  
  //FECHA O ARQUIVO
  fclose($abrir);

  echo "<meta http-equiv='refresh' content='3;URL=empenho.html'>";

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