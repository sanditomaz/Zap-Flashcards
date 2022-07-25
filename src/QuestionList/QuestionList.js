import React from "react";
import Header from "../Header/Header";
import Deck from "./Deck";
import Footer from "../Footer/Footer";

export default function QuestionList(){
    const flashCard = [
        {icon:'play-outline', name:'full', question: "~ I've been working here for two and a half years. ~ - How would you say that sentence in French ?", answer: "Je travaille ici depuis deux ans et demi."},
        {icon:'play-outline', name:'full', question: "~ Last year, I traveled to Argentina. ~  -How would you say that sentence in French ?", answer: "L'année dernière, j'ai voyagé en Argentine."},
        {icon:'play-outline', name:'full', question: "~ We had fun! ~ - How would you say that sentence in French ?", answer:"On s'est bien amusés !"},
        {icon:'play-outline', name:'full', question: "~ We need to make a decision before tomorrow. ~ - How would you say that sentence in French ?", answer:"Il faut prendre une décision avant demain."},
        {icon:'play-outline', name:'full', question: "~ Did you make an appointment with the doctor? ~ - How would you ask that question in French ?", answer:"Avez-vous pris rendez-vous chez le médecin ?"},
        {icon:'play-outline', name:'full', question: "~ The meal is over. I'm going to take off. ~ - How would you say that sentence in French ?", answer:"Le repas est terminé. Je vais prendre congé."},
        {icon:'play-outline', name:'full', question: "~ Buying this property was a bad deal for my client. ~ - How would you say that sentence in French ?", answer:"Acheter cette propriété a été une mauvaise affaire pour mon client."},
        {icon:'play-outline', name:'full', question: "~ I thought hard in order to solve this problem. ~ - How would you say that sentence in French ?", answer:"Je me suis creusé la tête pour résoudre ce problème."},
    ];

    let title = 1;
    let shuffledCards = flashCard.sort(() => Math.random() - 0.5);
    let listLength = flashCard.length

    return(
        <>
            <div className="questionlist">
                <Header />
                {shuffledCards.map((item, index) => <Deck key={index} question={item.question} answer={item.answer} icon={item.icon} name={item.name} title ={title++}/>)}    
            </div>
            <Footer total ={listLength}/>
             
        </>
    );

}