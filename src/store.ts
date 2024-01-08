/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;


// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)


    WA.controls.disablePlayerProximityMeeting();


    WA.room.area.onEnter('phrase01').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase01Popup", "Wow, there is a sale today! No, there is no such thing as too many clothing!", []);
    })

    WA.room.area.onLeave('phrase01').subscribe(closePopup);

    WA.room.area.onEnter('phrase02').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase02Popup", "HHmm... I wonder which shoe size Mina wears?", []);
    })

    WA.room.area.onLeave('phrase02').subscribe(closePopup);

    WA.room.area.onEnter('phrase03').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase03Popup", "Sunshine City Mayor is planning to impose carbon taxes! What a shame, leather products are going to spike up in price...", []);
    })

    WA.room.area.onLeave('phrase03').subscribe(closePopup);


    WA.room.area.onEnter('phrase04').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase04Popup", "Welcome to Sunflower City’s Boutique! We sell only the best quality clothing around!", []);
    })

    WA.room.area.onLeave('phrase04').subscribe(closePopup);

    WA.room.area.onEnter('phrase05').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase05Popup", "I really like the feel of cotton, but my friends told me that hemp is better for the environment...", []);
    })

    WA.room.area.onLeave('phrase05').subscribe(closePopup);

    WA.room.area.onEnter('phrase06').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase06Popup", "Thank you for visiting! Enjoy your time here!", []);
    })

    WA.room.area.onLeave('phrase06').subscribe(closePopup);

    WA.room.area.onEnter('phrase07').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase07Popup", "I love thrifting! Not only are the thrifted clothing cheaper, they are also better for the environment!", []);
    })

    WA.room.area.onLeave('phrase07').subscribe(closePopup);




    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopup(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

