import SignIn from "../boutiqueComponent/signIn"
import Welcome from "../boutiqueComponent/welcome"
export default function Home(){
    return(
        <div>
            <Welcome/>
            <section id="aPropos">
                <div className="text-center">
                    <h1 
                    style={{
                        borderBottom : "3px solid #01c38d"
                    }} className="hoverText d-inline my-3">
                        C’est quoi  ?
                    </h1>
                </div>
                <div className="container-fluid row align-items-center my-4">
                    <article className="hoverArticle col-md-4 rounded mt-3 p-4">
                        <div className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#01c38d"><path d="M300-80q-58 0-99-41t-41-99v-520q0-58 41-99t99-41h500v600q-25 0-42.5 17.5T740-220q0 25 17.5 42.5T800-160v80H300Zm-60-267q14-7 29-10t31-3h20v-440h-20q-25 0-42.5 17.5T240-740v393Zm160-13h320v-440H400v440Zm-160 13v-453 453Zm60 187h373q-6-14-9.5-28.5T660-220q0-16 3-31t10-29H300q-26 0-43 17.5T240-220q0 26 17 43t43 17Z"/></svg>
                        </div>
                        <h2 className="my-4 text-light text-capitalize text-center">
                            Gestion des étudiant
                        </h2>
                        <p className="text-center text-light">
                            C’est un logiciel (souvent en ligne) conçu pour centraliser, automatiser et simplifier la gestion administrative et pédagogique d’un établissement (école, université, centre de formation)
                        </p>
                    </article>
                    <article className="hoverArticle col-md-4 rounded mt-3 p-4">
                        <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#01c38d"><path d="M200-80v-760h640l-80 200 80 200H280v360h-80Zm80-440h442l-48-120 48-120H280v240Zm0 0v-240 240Z"/></svg>                    </div>
                        <h2 className="my-4 text-light text-capitalize text-center">
                            Objectifs principaux                     </h2>
                        <ul className="text-center text-light">
                            <li>Remplacer les méthodes papier ou les fichiers Excel dispersés.</li>
                            <li>Offrir un espace unique et connecté pour tous les acteurs (administration, profs, étudiants, parents).</li>
                        </ul>
                    </article>
                    <article className="hoverArticle col-md-4 rounded mt-3 p-4">
                        <div className="text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#01c38d"><path d="m296-320 122-122 80 80 142-141v63h80v-200H520v80h63l-85 85-80-80-178 179 56 56Zm-96 200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>                    </div>
                        <h2 className="my-4 text-light text-capitalize text-center">
                            Avantages
                        </h2>
                        <ul className="text-center text-light">
                            <li>
                                Gain de temps : Fin de la double saisie.
                            </li>
                            <li>
                                Fiabilité : Moins d'erreurs, données à jour en temps réel.
                            </li>
                            <li>
                                Transparence : Les parents et étudiants suivent la progression facilement.
                            </li>
                            <li>
                            Prise de décision : Rapports statistiques pour aider la direction.
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
            <SignIn/>
        </div>
    )
}