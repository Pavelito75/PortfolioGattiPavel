import React, { useState, useRef } from "react";
import { MdToggleOff } from "react-icons/md";
import { MdToggleOn } from "react-icons/md";
import { TbFileCv } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPhp } from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { FaTrello } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import '../index.css';
import emailjs from '@emailjs/browser';
import picturePavel from "/src/assets/GP.png";
import pictureToDo from "/src/assets/toDoPics.png";
import pictureTweet from "/src/assets/tweetPics.png"
import picturePuissance4 from "/src/assets/puissance4pics.png";



export default function Home() {
    return (
       <>
        <header className="block">
                <div id="navbar" className="flex opacity-40 content-center p-1 fixed text-xs text-center justify-evenly gap-4 w-screen bg-amber-100 text-black md:text-xl dark:bg-black dark:text-white">
                    <a href="#gp" className="place-self-center"><h1>GP</h1></a>
                    <a href="#skills" className="place-self-center"><h1>SKILLS</h1></a>
                    <a href="#projets" className="place-self-center"><h1>PROJETS</h1></a>
                    <a href="#contact" className="place-self-center"><h1>CONTACT</h1></a>
                    <h4 className="cursor-pointer text-white" onClick={toggleDark}><MdToggleOff size={50} className="dark:hidden"/><MdToggleOn className="hidden text-white dark:flex" size={50}/></h4>
                </div>
                <div className="p-12 pt-24 text-center text-2xl text-gray-950 bg-cover md:text-4xl dark:bg-[url(../public/assets/portfolio_bg_dark.png)] dark:text-yellow-100">
                    <h1>PAVEL GATTI</h1>
                    <h2>Développeur Web</h2>
                </div>
        </header>
        <main className="m-10 p-4">
            <div id="gp" className="justify-center items-center md:flex md:justify-evenly md:pb-4">
                <div className="w-full p-2 border-2 border-dashed border-blue-400 items-center justify-center dark:border-yellow-50">
                    <img className="md:w-128 md:h-full" src={picturePavel} alt="C'EST MOI" />
                </div>
                <div className="md:block md:pl-6">
                    <div className="md:text-xs">
                        <h1 className="underline font-medium underline-offset-3 text-2xl py-2">A propos</h1>
                        <h6 className="py-2 text-xl">Mon parcours</h6>
                        <p className="text-left md:text-xl">Originaire de Paris, j’ai exploré différents horizons avant de me tourner vers le développement web. J’ai commencé par étudier le droit pendant un an, puis j’ai poursuivi avec une année en lettres classiques, nourrissant à la fois mon esprit logique et mon goût pour la culture. J’ai ensuite travaillé comme préparateur de commandes, une expérience qui m’a appris la rigueur et l’efficacité. Aujourd’hui, je me consacre pleinement au développement web, un domaine qui allie créativité et technique, et où je continue d’apprendre et de progresser chaque jour.  </p>
                    </div>
                    <div className="flex p-1">
                        <a className="p-1" target="_blank" href="https://github.com/Pavelito75">
                            <FaGithub size={50} className="dark:hidden md:size-10"/> <FaGithub size={50} color="white" className="hidden md:size-10 dark:flex"/>
                        </a>
                        <a className="p-1" href="https://www.linkedin.com/in/pavelgatti/" target="_blank">
                            <FaLinkedin size={50} className="md:size-10 dark:hidden"/> <FaLinkedin size={50} color="white" className="hidden md:size-10 dark:flex"/>
                        </a>
                        <a className="p-1" download href="../maquette-CDC/CV_Pavel.pdf">
                            <TbFileCv size={50} className="md:size-10 dark:hidden"/> <TbFileCv size={50} color="white" className="hidden md:size-10 dark:flex"/>
                        </a>
                    </div>
                </div>
            </div>
                    <hr id="skills" className="dark:text-white"/>
                <div className="skills">
                    <h1 className="pt-6 p-2 text-center underline underline-offset-3 dark:text-white">Mes Compétences</h1>
                    <Skills />
                </div>
                <hr id="projets"/>
                <div  className="projects">
                    <h1 className="underline underline-offset-3 text-center dark:text-white p-3">Mes Projets</h1>
                    <Debian />
                </div>
                <hr id="contact" />
                <footer className="contact">
                    <h1 className="underline underline-offset-3 p-3 text-center dark:text-white">Me contacter</h1>
                    <Kali />
                </footer>
        </main>
       </>
    )
}

function toggleDark() {
    document.body.classList.toggle("dark")
}

function Skills() {

    const aze = [
        [<FaHtml5 size={70} />, "HTML"], [<FaSass size={70} />, "SASS"], [<IoLogoJavascript size={70} />, "JS"], [<SiPhp size={70} />, "PHP"], [<DiDatabase size={70} />, "SQL"], [<FaDocker size={70} />, "DOCKER"], [<RiTailwindCssFill size={70} />, "TAILWIND"], [<FaReact size={70} />, "REACT"], [<FaGithub size={70} />, "GITHUB"], [<FaLinux size={70} />, "LINUX",], [<FaTrello size={70} />, "TRELLO"], [<FaFigma size={70} />, "FIGMA"],
    ]

    return (
        <>
            <div className="flex flex-wrap p-4 justify-around w-fit">
                {aze.map((array, index) => (
                    <Description key={index} props={array} />
                ))}
            </div>
        </>
    )
}

function Description(items) {
    return (
        <div className="p-2 justify-center align-center items-center">
            <div className="border-dashed border-1 p-2 border-blue-500 dark:text-white dark:border-yellow-50">
                {items.props[0]}
            </div>
            <h3 className="font-medium align-center items-center text-center dark:text-white">{items.props[1]}</h3>
        </div>
    )
}

function Debian() {
    const proj = [
        ["My To-Do List", pictureToDo, "Développé en 3h sous surveillance à Epitech avec HTML, CSS et JavaScript, ce site web permet d'ajouter, supprimer et valider des tâches. Un exercice pratique pour renforcer les bases du front-end dans un cadre contraint.", "https://github.com/Pavelito75/My-To-Do-List"],

        ["Tweet Academie", pictureTweet, "En un mois et en équipe de 4, nous avons développé une version simplifiée de Twitter avec PHP pour le back-end et JS pour le front-end. Nous avons pu travailler sur notre organisation grace a l'aide d'un Trello et d'un Figma et focus sur la sécurité (sessions, SQL). Un bon défi pour renforcer nos compétences en full-stack et en travail d'équipe.", "https://github.com/Pavelito75/Tweet-Academie"],

        ["Puissance 4", picturePuissance4, "En deux semaines, j'ai développé un Puissance 4 entièrement personnalisable en JavaScript pur. Le jeu permet de modifier la taille de la grille, le nombre de joueurs et leurs couleurs, tout en gardant les règles classiques. L'interface est dynamique (événements clics, vérification des victoires), et le code est structuré pour une bonne maintenabilité. Un bon défi pour approfondir JS, le DOM et la logique de jeu.", "https://github.com/Pavelito75/Puissance-4"],
    ];
    
     return (
       <div>
         {proj.map((project, index) => (
           <Arch props={project} key={index} />
         ))}
       </div>
     );
}


function Arch(project) {
console.log(project.props);

  return (
    <div className="p-4">
            <h1 className="p-2 underline underline-offset-3 dark:text-white">{project.props[0]}</h1>
        <div className="md:flex md:w-full">
            <img src={project.props[1]} alt="Photo du Projet" className="border-1 border-dashed p-1 border-blue-300 dark:border-yellow-50 md:w-1/2" />
            <div className="block">
                <p className="p-1 dark:text-white">{project.props[2]}</p>
                <a href={project.props[3]} target="_blank" rel="" className="p-1 text-center text-blue-400 block">
                Voir sur GitHub
                </a>
            </div>
        </div>
    </div>
  );
}

function Kali() {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_l4btkkq', 'template_yriem9n', form.current, {
          publicKey: 'qz19tAQDX2XE4_ymx',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            location.reload();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
        
        return (
            <form ref={form} onSubmit={sendEmail} className="block justify-center border-solid border-1 border-black text-center items-center sm:border-hidden sm:p-2 p-4 dark:border-white">
                <input name="name" className="rounded-sm md:block md:place-self-center bg-blue-300 text-zinc-900 dark:bg-gray-400 dark:text-gray-950" type="text" placeholder=" Votre nom..." required/>
                <input className="m-2 rounded-sm md:block md:place-self-center bg-blue-300 text-zinc-900 dark:bg-gray-400 dark:text-gray-950" name="email" type="email" placeholder=" Votre mail..." required/>
                <input type="text" name="title" className=" rounded-sm md:block md:place-self-center bg-blue-300 text-zinc-900 dark:bg-gray-400 dark:text-gray-950" placeholder=" Objet du mail..." required />
                <textarea name="message" className="rounded-sm md:block md:place-self-center bg-blue-300 text-zinc-900 dark:bg-gray-400 dark:text-gray-950 m-2 p-2.5" placeholder="Entrez votre message..." required></textarea>
                <button className="bg-blue-500 block place-self-center text-white rounded p-2  hover:bg-blue-700 dark:bg-gray-600 dark:hover:bg-gray-800"><input type="submit" value="Send" /></button>
            </form>
        );
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}