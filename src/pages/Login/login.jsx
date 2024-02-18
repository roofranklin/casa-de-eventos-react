import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import axios from 'axios'

import {
        LoginContainer,
        LoginContent,
        LoginBox,
        LoginTitle,
        FormBox,
        FormItem,
        FormLabel,
        FormInput,
        FormButton,
        Sidebar,
        SidebarContainer,
        LogoContainer,
        Logo,
        ErrorMessage
       } from './login.style'


const Login = () => {
    // AQUI FICAM OS MEUS HOOKS, FUNÇÕES, ETC..
    
    // AQUI FICAM MINHAS DECLARAÇÕES DE HOOKS
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    // FUNÇÃO PARA CONSULTAR API E VERIFICAR SE USUÁRIO E SENHA ESTÃO CORRETOS
    const EfetuarLogin = async () => {
        try {
            // CHAMADA NA API DE USUÁRIOS
            const response = await axios.get('http://localhost:3000/usuarios');
            const usuarios = response.data;
            // VERIFICA SE USUÁRIO E SENHA FORAM ENCONTRADOS
            const usuarioEncontrado = usuarios.find(usuario => usuario.nome === nome && usuario.senha === senha);
            if (usuarioEncontrado) {
                navigate('/admin');
            } else {
                setErro('Nome ou senha inválido');
            }
        } catch (error) {
            console.error('Erro ao buscar eventos', error);
        }
    };
    return (
        // AQUI ENTRA O FORMULÁRIO DA TELA
        <LoginContainer>
            <Sidebar>
                <SidebarContainer>
                    <LogoContainer>
                        <Logo src="../images/logo.svg" alt="Logomarca da casa de eventos" />
                    </LogoContainer>
                </SidebarContainer>
            </Sidebar>
            <LoginContent>
                <LoginBox>
                    <LoginTitle>Área de login</LoginTitle>
                    <FormBox>
                        <FormItem>
                            <FormLabel>Nome:</FormLabel>
                            <FormInput type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} />
                        </FormItem>
                        <FormItem>
                            <FormLabel>Senha:</FormLabel>
                            <FormInput type="password" placeholder="Senha" value={senha} onChange={e => setSenha(e.target.value)} />
                        </FormItem>
                        <FormItem>
                            <FormButton onClick={EfetuarLogin}>Entrar</FormButton>
                        </FormItem>
                        {erro && <ErrorMessage>{erro}</ErrorMessage>}
                    </FormBox>
                </LoginBox>
            </LoginContent>          
        </LoginContainer>
    );

};

export default Login;