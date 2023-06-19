var assentosSelecionados = [];

document.getElementById("enviar").addEventListener("click", function() {
  var nome = document.getElementById("nome").value;
  var cpf = document.getElementById("cpf").value;
  var quantidade = document.getElementById("quantidade").value;
  var valor = quantidade * 550;
  var lugarOnibus = document.getElementById("lugarOnibus").value;
  var formaPagamento = document.getElementById("formaPagamento").value;
  var parcelamento = document.getElementById("parcelamento").value;

  if (assentosSelecionados.includes(lugarOnibus)) {
    alert("O assento selecionado já foi comprado. Por favor, escolha outro assento.");
    return;
  }

  assentosSelecionados.push(lugarOnibus);

  alert("Nome: " + nome + "\nCPF: " + cpf + "\nValor da Passagem: R$" + valor + "\nQuantidade: " + quantidade + "\nLugar no ônibus: " + lugarOnibus + "\nForma de Pagamento: " + formaPagamento + "\nParcelamento: " + parcelamento + " vezes" + "\nTotalizando: " + parcelamento + " vezes de R$" + valor/parcelamento);

  limparFormulario();
});

function limparFormulario() {
  document.getElementById("nome").value = "";
  document.getElementById("cpf").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("lugarOnibus").value = "";
  document.getElementById("formaPagamento").value = "";
  document.getElementById("parcelamento").value = "";
}
