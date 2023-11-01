
import MusicCards from "../../components/MusicCards/Cards";
import "./Home.css";

function Home() {
    return (
        <body>
            <div id="nav" >
                <div id="logo">
                    <img src="src/assets/images/chuusig.png" alt="" />
                    <span >Portifólio Chuu</span>
                </div>
                <ul id="menuheader">
                    <li><a href="">Home</a></li>
                    <li><a href="#nav">Sobre</a></li>
                    <li><a href="#meu_video">Vídeo</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </div>

            <div id="main">
                <div id="sobre">
                    <div id="texto_sobre">
                        <h1>Sobre a Chuu "김지우":</h1>
                        <p>Chuu nasceu em 20 de outubro de 1999 em CheongJu, da província de Chungcheong, na Coreia do Sul.Em 2015 entrou no departamento de música da Hanlim Multi Art School e entre 2016 treinou como estagiária nas empresas de entretenimento sul-coreana FNC Entertainment e Music Works.</p>
                        <br />
                        <p>Em 14 de dezembro de 2017, Chuu foi revelada como sendo a nova integrante do grupo LOOΠΔ.</p>
                        <br />
                        <p>Após participação em diversos programas conhecidos na televisão coreana, como o King of Mask Singer, e o lançamento de sua websérie Chuu Can Do It, a popularidade de Chuu cresceu bastante entre o público coreano.</p>
                    </div>
                    <img id="foto" src="src/assets/images/chuuperfil.jpg" alt="Lara em negação" />
                </div>

            </div>
            <h1 id="meu_video">Vídeo: </h1>
            <div id="video">
                <h3>Youtube Intro:</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/sVU9-mpWJ5I?si=i7pBqtnpCe-v3ARj" title="YouTube video player" frameBorder={"0"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <h4>Transcrição do Vídeo</h4>
                <p>Olá, meu nome é CHUU.</p>
                <p>Meu canal oficial no YouTube acabou de abrir!</p>
                <p>Espero encontrar você aqui através dos meus vídeos,</p>
                <p>Por favor, escreva nos comentários o que você quer ver ou sobre o que devo falar</p>
                <p>Torça por mim e espero que você esteja feliz também ☺</p>
                <p>Obrigada ❤</p>

            </div>
            <div className="titleh2" style={{ fontSize: "2rem" }}>
                <h2 >MÚSICAS RELEVANTES</h2>
            </div>
            <div className="MusicCards">
                <MusicCards Nome="Heart Attack" Imagem="src/assets/images/HeartAttack.png" MFrame="https://open.spotify.com/embed/track/6SSC9KZQaxBdyipKRigrFC?utm_source=generator&theme=0" />
                <MusicCards Nome="Howl" Imagem="src/assets/images/Howl.png" MFrame="https://open.spotify.com/embed/track/17cciVZC83EP26VENr3J5n?utm_source=generator" />
                <MusicCards Nome="Girl's Talk" Imagem="src/assets/images/HeartAttack.png" MFrame="https://open.spotify.com/embed/track/1j3zXAq0W9cLIpiAXwcYXF?utm_source=generator" />
                <MusicCards Nome="Aliens" Imagem="src/assets/images/Howl.png" MFrame="https://open.spotify.com/embed/track/1FS27YH6ra3pkwNDnIHIfa?utm_source=generator" />
                <MusicCards Nome="Lullaby" Imagem="src/assets/images/lullaby.png" MFrame="https://open.spotify.com/embed/track/7el09AiwrCGGZW8rsSvbc1?utm_source=generator" />



            </div>


            <div id="footer">
                <div id="redes_sociais">
                    <a href="http://linkedin.com" target="_blank">
                        <img id="icons" src="src/assets/images/linkedin.png" alt="Linkedin" />
                    </a>
                    <a href="http://github.com" target="_blank">
                        <img id="icons" src="src/assets/images/github.png" alt="github" />
                    </a>
                    <a href="http://instagram.com" target="_blank">
                        <img id="icons" src="src/assets/images/instagram.png" alt="instagram" />
                    </a>
                </div>
                <p id="by">Desenvolvido por Gabriel - 2023 &copy;</p>
            </div>

        </body>
    )
}

export default Home;