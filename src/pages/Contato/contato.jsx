import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    ContatoContainer, 
    FormContainer, 
    FormItem, 
    FormLabel,
    FormInput, 
    FormTextArea,
    FormButton,
    Container
    } from './contato.styles'
import Cabecalho from '../../components/Cabecalho/cabecalho'
import Rodape from '../../components/Rodape/rodape'
//Passando os hooks

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
//teste dos await do grupo 3 para enviar
    try {
      await axios.post('http://localhost:3000/contato', {
        nome,
        email,
        mensagem,
      });

      toast.success('Mensagem enviada com sucesso!', {
        position: 'top-right',
        autoClose: 3000,
      });
    } catch (error) {
      console.error('Erro ao enviar a mensagem:', error);
      toast.error('Erro ao enviar a mensagem. Por favor, tente novamente.', {
        position: 'top-right',
        autoClose: 5000,
      });
    }
  };

  return (
    //Criação do forms!
    <>
    <Cabecalho/>
    <Container>
        <ContatoContainer>
        <FormContainer>
            <form onSubmit={handleSubmit}>
            <FormItem>
                <FormLabel>Nome:</FormLabel>
                <FormInput type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
            </FormItem>
            <FormItem>
                <FormLabel>E-mail:</FormLabel>
                <FormInput type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormItem>
            <FormItem>
                <FormLabel>Mensagem:</FormLabel>
                <FormTextArea value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
            </FormItem>
            <FormItem>
                <FormButton type="submit">Enviar Mensagem</FormButton>
            </FormItem>
            </form>
        </FormContainer>
        <ToastContainer />
        </ContatoContainer>
    </Container>
    <Rodape />
    </>
  );
};

export default Contato;
