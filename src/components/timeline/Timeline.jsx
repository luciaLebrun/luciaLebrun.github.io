import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { VscMortarBoard, VscCode } from "react-icons/vsc";
import '../timeline/timeline.css'
import ASSETS from '../../assets';

const Timeline = () => {

    return (
      <div className='timeline'>
          
          <div className='vertical-timeline-element-content head'>
            <img className='picture' alt='moi' src={ASSETS.me}/>
            <h2 className="vertical-timeline-element-title">
                Lucia Lebrun
            </h2>
            <h3 className="vertical-timeline-element-title">
                Etudiante informatique
            </h3>
            <p> <strong>Age : </strong>21 </p>
            <p> <strong>Lieu : </strong>Angers / Vannes </p>
            <p> <strong>Langages : </strong>
                <span className='item'>C++</span>
                <span className='item'>Java</span>
                <span className='item'>ReactJs</span>
                <span className='item'>Python</span>
                <span className='item'>MySQL Oracle</span>
            </p>
            <p> <strong>Outils : </strong>
                <span className='item'>Linux</span>
                <span className='item'>Git</span>
                <span className='item'>Docker</span>
            </p>
          </div>
        <VerticalTimeline>
            <VerticalTimelineElement
                date='Septembre 2022'
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#FFF' }}
                icon={<VscMortarBoard />}
            >
                <h3 className="vertical-timeline-element-title">Mastère informatique (Alternance)</h3>
                <h4 className="vertical-timeline-element-subtitle">Sup de vinci, Rennes</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date='En cours'
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#FFF' }}
                icon={<VscMortarBoard />}
            >
                <h3 className="vertical-timeline-element-title">Licence informatique</h3>
                <h4 className="vertical-timeline-element-subtitle">UBS, Vannes</h4>
                <p>
                    - Théorie des langages et compilation 
                    <br/>
                    - Apprentissage de la logique informatique
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                date='Avril 2021 - Juin 2021'
                iconStyle={{ background: '#AE3700', color: '#FFF'}}
                icon={<VscCode />}
            >
                <h3 className="vertical-timeline-element-title">Stage de fin d'études</h3>
                <h4 className="vertical-timeline-element-subtitle">Université de La Rochelle, La Rochelle</h4>
                <p>
                    - Création d'une application PHP utilisant le framework Symfony 
                    permettant la gestion des nouveaux modules universitaires suite au 
                    passage du nouveau diplôme BUT.
                    <br/>
                    - Modélisation et création de la base de données.
                    <br/>
                    - Création d'une API en JavaScript
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                date='Sept. 2019 - Juil 2021'
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#FFF' }}
                icon={<VscMortarBoard />}
            >
                <h3 className="vertical-timeline-element-title">DUT informatique</h3>
                <h4 className="vertical-timeline-element-subtitle">Université de La Rochelle, La Rochelle</h4>
                <p>
                    - Architecture et programmation des mécanismes de base 
                    d’un système informatique
                    <br/>
                    - Architecture des réseaux, bases de la programmation et de la conception orientées objet
                    <br/>
                    - Administration et conception de base de données Oracle
                </p>
            </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
  
    );
  }
  
  export default Timeline;