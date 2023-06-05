import { useState } from 'react';
import'./Cadastro.css'

function Cadastro() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [codigoSeguranca, setCodigoSeguranca] = useState('');
  const [planoEscolhido, setPlanoEscolhido] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Nome: ', nome);
    console.log('Telefone: ', telefone);
    console.log('Endereço: ', endereco);
    console.log('Número do cartão: ', numeroCartao);
    console.log('Código de segurança: ', codigoSeguranca);
    console.log('Plano escolhido: ', planoEscolhido);
    // Aqui podemos enviar os dados para um servidor
    // ou exibi-los em algum lugar no próprio componente
  }

  function validarNumeroCartao(numeroCartao) {
    const regex = /^[0-9]{16,20}$/;
    return regex.test(numeroCartao);
  }

  function validarCodigoSeguranca(codigoSeguranca) {
    const regex = /^[0-9]{3}$/;
    return regex.test(codigoSeguranca);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
      </label>
      <label>
        Telefone:
        <input type="text" value={telefone} onChange={e => setTelefone(e.target.value)} />
      </label>
      <label>
        Endereço:
        <input type="text" value={endereco} onChange={e => setEndereco(e.target.value)} />
      </label>
      <label>
        Número do cartão:
        <input type="text" value={numeroCartao} onChange={e => setNumeroCartao(e.target.value)} />
        {!validarNumeroCartao(numeroCartao) && (
          <span style={{ color: 'red' }}>Número do cartão inválido</span>
        )}
      </label>
      <label>
        Código de segurança:
        <input type="text" value={codigoSeguranca} onChange={e => setCodigoSeguranca(e.target.value)} />
        {!validarCodigoSeguranca(codigoSeguranca) && (
          <span style={{ color: 'red' }}>Código de segurança inválido</span>
        )}
      </label>
      <label>
        Plano escolhido:
        <button type="button" style={{ backgroundColor: planoEscolhido === 'Free' ? 'green' : 'white' }} onClick={() => setPlanoEscolhido('Free')}>
          Gratuito
        </button>
        <button type="button" style={{ backgroundColor: planoEscolhido === 'Plus' ? 'yellow' : 'white' }} onClick={() => setPlanoEscolhido('Plus')}>
          Premium
        </button>
      </label>
      <button type="submit">Assinar</button>
    </form>
  );
}

export default Cadastro;