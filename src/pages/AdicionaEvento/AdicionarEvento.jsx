import axios from 'axios'
import Cabecalho from '../../components/Cabecalho/cabecalho'
import Rodape from '../../components/Rodape/rodape'
import {useState} from 'react'
import {
    FormContainer,  
    FormLabel,
    FormButton,
    } from '../Contato/contato.styles'


const AdicionarEvento = () => {

    const [evento, setEvento] = useState({
        titulo: '',
        data: '',
        horario: '',
        preco: 0,
        url_da_imagem: '',
        evento_privado: false
    });

    const handleChange =(event)=> {
        const {name,value} = event.target;
        setEvento((prevEvent) => ({
            ...prevEvent,
            [name]:value
        }));
    };

    const handleSubmit= async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/eventos', evento);
            console.log(response.data);
            alert('Evento adicionado com sucesso!');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
        <Cabecalho/>
            <h1>Adicionar evento</h1>
            <form onSubmit={handleSubmit}>
            <FormContainer>
                <FormLabel>
                    Titulo:
                    <input type="text" name="titulo" value={evento.titulo} onChange={handleChange} />
                </FormLabel>
                <br />
                <FormLabel>
                    Data:
                    <input type="text" name="titulo" value={evento.titulo} onChange={handleChange} />
                </FormLabel>
                <br />
                <FormLabel>
                    Horário:
                    <input type="text" name="titulo" value={evento.titulo} onChange={handleChange} />
                </FormLabel>
                <br />
                <FormLabel>
                    Preço:
                    <input type="text" name="titulo" value={evento.titulo} onChange={handleChange} />
                </FormLabel>
                <br />
                <FormLabel>
                    URL da imagem:
                    <input type="text" name="titulo" value={evento.titulo} onChange={handleChange} />
                </FormLabel>
                <br />
                <FormLabel>
                    Evento privado:
                    <input type="text" name="titulo" value={evento.titulo} onChange={handleChange} />
                </FormLabel>
                <br/>
                <FormButton/>
            </FormContainer>
            </form>
            <Rodape/>
        </>
    )
}

export default AdicionarEvento