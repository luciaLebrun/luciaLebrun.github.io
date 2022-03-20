import React from "react";
import { Buttons, Project } from "../../components";
import { Footer } from "../../containers";
import './projects.css';

const Projects = () => {
    return(
        <div>
            <div className="return">
                <Buttons
                    text={"Retour"}
                    link="/"
                />
            </div>
            <div className="projects">
                <Project
                    titre={"Porfolio"}
                    desc={"Le code source de mon portfolio"}
                    tags={["ReactJS"]}
                    git="https://github.com/luciaLebrun/luciaLebrun.github.io/tree/master"
                />
                <Project
                    titre={"PokeFanGame"}
                    desc={"Un petit projet qui m'a permis d'apprendre les bases de ReactJS"}
                    tags={["ReactJS"]}
                    git="https://github.com/luciaLebrun/PokeFanGame"
                />
                <Project
                    titre={"ProdLocal"}
                    desc={"Application en PHP réalisée durant ma formation en IUT, cette application web est une représentation d'un faux site de livraisons de produits Bio."}
                    tags={["Symfony", "PHP"]}
                    git="https://github.com/luciaLebrun/ProdLocal"
                />
                <Project
                    titre={"Slayman"}
                    desc={"Premier RPG réalisé avec l'outil Godot."}
                    tags={["Godot"]}
                    git="https://github.com/luciaLebrun/Slayman"
                />
                <Project
                    titre={"CorpusParser"}
                    desc={"Analyseur de corpus scientifique réalisé durant ma licence avec une équipe."}
                    tags={["Python"]}
                    git="https://github.com/luciaLebrun/Parseur_lbgl"
                />

            </div>

            <Footer/>
        </div>
    )
}
export default Projects;