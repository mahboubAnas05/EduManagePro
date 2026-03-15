export default function Welcome(){
    return(
        <section id="home" className="text-light mx-2 pb-5 d-md-flex gap-4 justify-content-around" style={{
            // backgroundImage : "montainIcon.jpg"
            margin : "150px 0 0"
        }}>
            <div className="my-5">
                <h1 className="text-center text-light">
                    Plateforme de Gestion des Étudiants
                </h1>
                <p className="text-center text-light">
                     C'est le "cerveau numérique" de l'établissement qui permet de gérer tout le cycle de vie de l'étudiant, de son inscription à sa diplomation.
                </p>
            </div>
            <div> 
                <img src="/school5.jpg" className="w-100" style={{
                    boxShadow : "1px 1px 30px 2px rgba(1, 195, 140, 0.51)",
                    borderRadius : "35%",
                    zIndex : "1"
                }} alt="" />
            </div>

        </section>
    )
}