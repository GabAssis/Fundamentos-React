import { useEffect, useState } from "react";
import Form from "../../components/forms/Form";
import "./Contact.css";


function Contact() {

    const [isEnviado, setIsEnviado] = useState(false)
    const [status, setStatus] = useState('Enviar')

    useEffect(() => {
        if (isEnviado) {
            setStatus('Formulário Enviado!')
            
        }
    }, [isEnviado])

    return (
        <div >
            <div id="nav" >
                <div id="logo">
                    <img src="src/assets/images/chuusig.png" alt="" />
                    <span >Portifólio Chuu</span>
                </div>
                <ul id="menuheader">
                    <li><a href="src/pages/home/Home.tsx">Home</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#video">Vídeo</a></li>
                    <li><a href="src/pages/contact/Contact.tsx">Contato</a></li>
                </ul>
            </div>

            <div id="contato">
                <div id="formulario_mensagem">
                    <h2>Contato</h2>
                    <Form Nome="Nome" 
                    DescricaoE="Digite seu nome" 
                    Email="Email" 
                    DescricaoM="Digite seu email" 
                    Mensagem="Mensagem" 
                    DescricaoMe="Digite sua mensagem" />
                    <div>
                        <button onClick={() =>setIsEnviado(true)}>{status}</button>
                        
                    </div>

                </div>

            </div>

            <div id="footer">
                <div id="redes_sociais">
                    <a href="http://linkedin.com" target="_blank">
                        <img id="icons" src="src/assets/images/linkedin.png" alt="Linkedin" />
                    </a>
                    <a href="http://github.com" target="_blank">
                        <img id="icons" src="src/assets/images/github.png" alt="Github" />
                    </a>
                    <a href="http://instagram.com" target="_blank">
                        <img id="icons" src="src/assets/images/instagram.png" alt="Instagram" />
                    </a>
                </div>
                <p id="by">Desenvolvido por Gabriel - 2023 &copy;</p>
            </div>
            <script src="src/pages/script.js"> </script>
        </div>
        
    )
}

export default Contact;