class NegociacaoController {

  constructor() {
    let $ = document.querySelector.bind(document);

    this._inputData = $('#data');
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor');

  }

  adiciona(event) {
    event.preventDefault();

    let negociacao = new Negociacao(
      this._inputData.value,
      this._inputQuantidade.value,
      this._inputValor.value
    );




    console.log(negociacao);
    console.log(this.inputQuantidade.value);
    console.log(this.inputValor.value);

  }

}