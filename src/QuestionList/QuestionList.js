import React from "react";
import Header from "../Header/Header";
import Deck from "./Deck";
import Footer from "../Footer/Footer";

export default function QuestionList(){
    const flashCard = [
        {icon:'play-outline', name:'full', question: "Translante to French: I've been working here for two and a half years.", answer: "Je travaille ici depuis deux ans et demi."},
        {icon:'play-outline', name:'full', question: "Translante to French: Last year, I traveled to Argentina.", answer: "L'année dernière, j'ai voyagé en Argentine."},
        {icon:'play-outline', name:'full', question: "Translante to French: We had fun!", answer:"On s'est bien amusés !"},
        {icon:'play-outline', name:'full', question: "Translante to French: We need to make a decision before tomorrow.", answer:"Il faut prendre une décision avant demain."},
        {icon:'play-outline', name:'full', question: "Translante to French: Did you make an appointment with the doctor?", answer:"Avez-vous pris rendez-vous chez le médecin ?"},
        {icon:'play-outline', name:'full', question: "Translante to French: The meal is over. I'm going to take off.", answer:"Le repas est terminé. Je vais prendre congé."},
        {icon:'play-outline', name:'full', question: "Translante to French: Buying this property was a bad deal for my client.", answer:"Acheter cette propriété a été une mauvaise affaire pour mon client."},
        {icon:'play-outline', name:'full', question: "Translante to French: I thought hard in order to solve this problem.", answer:"Je me suis creusé la tête pour résoudre ce problème."},
    ];

    let title = 1;
    let shuffledCards = flashCard.sort(() => Math.random() - 0.5);

    return(
        <>
            <div className="questionlist">
                <Header />
                {shuffledCards.map((item, index) => <Deck key={index} question={item.question} answer={item.answer} icon={item.icon} name={item.name} title ={title++}/>)}    
            </div>
            <Footer />
             
        </>
    );

}