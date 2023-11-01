interface CardsProps {
    Nome: string;
    Imagem: string;
    MFrame: string
}



function MusicCards({ Nome, Imagem, MFrame }: CardsProps) {
    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: "0 auto",
                padding: "0.8rem",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
                backgroundColor: "#a78295",
                maxWidth: "260px",
               

            }}
                id="card">
                <h2>{Nome}</h2>
                <img style={{
                    borderRadius: "12px",
                    width: "100%",
                    height: "100%",
                    maxWidth: "400px",
                    marginTop: "0.8rem",
                }}
                    src={Imagem} alt="Music Card" />
                <iframe style={{ borderRadius: "12px" }} src={MFrame} width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>

            
        </>
    );
}

export default MusicCards;
