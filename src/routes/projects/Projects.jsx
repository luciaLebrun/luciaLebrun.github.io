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
                    desc={"Le projet de mon portfolio"}
                    tags={["ReactJS"]}
                    git="https://github.com/luciaLebrun"
                />
                <Project
                    titre={"PokeFanGame"}
                    desc={"Un petit projet qui m'a permise d'apprendre les bases de ReactJS"}
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
                />
                <Project
                    titre={"CorpusParser"}
                    desc={"Analyseur de corpus scientifique réalisé durant ma licence avec une équipe."}
                    tags={["Python"]}
                />

            </div>

            <Footer/>
        </div>
    )
}
export default Projects;