
interface FormProps {
    Nome: string;
    DescricaoE: string;
    Email: string;
    DescricaoM: string;
    Mensagem: string;
    DescricaoMe: string;
    
}

function Form({ Nome, DescricaoE, Email, DescricaoM, Mensagem, DescricaoMe}: FormProps) {
            
   
    return (
        <>
        <form id="forms">
            <div id="campos-form">
                <label id="nome">{Nome}</label>
                <input id="nome" name="nome" type="text"
                    placeholder={DescricaoE} />
                <div id="txtNome"></div>
            </div>
            <div id="campos-form">
                <label id="email">{Email}</label>
                <input  id="email" name="email" type="email"
                    placeholder={DescricaoM} />
                <div id="txtEmail"></div>
            </div>
            <div id="campos-form">
                <label id="mensagem">{Mensagem}</label>
                <textarea id="mensagem" name="mensagem" rows={8}
                    placeholder={DescricaoMe}></textarea>
                <div id="txtMensagem"></div>
            </div>
            
        </form>
        <script src="src/pages/script.js"> </script>
        </>
    )
}

export default Form;