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
        currentPopup = WA.ui.openPopup("phrase01Popup", "Oh no... I don't have enough money to buy fresh fish", []);
    })

    WA.room.area.onLeave('phrase01').subscribe(closePopup);

    WA.room.area.onEnter('phrase02').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase02Popup", "Hi youngster... Can you help auntie reach for the soup? Auntie cannot reach...", []);
    })

    WA.room.area.onLeave('phrase02').subscribe(closePopup);

    WA.room.area.onEnter('phrase03').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase03Popup", "Hmmm what meat should I get?", []);
    })

    WA.room.area.onLeave('phrase03').subscribe(closePopup);


    WA.room.area.onEnter('phrase04').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase04Popup", "Oh, hi there..", []);
    })

    WA.room.area.onLeave('phrase04').subscribe(closePopup);

    WA.room.area.onEnter('phrase05').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase05Popup", "Hello, how are you?", []);
    })

    WA.room.area.onLeave('phrase05').subscribe(closePopup);

    WA.room.area.onEnter('phrase06').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase06Popup", "Hello!", []);
    })

    WA.room.area.onLeave('phrase06').subscribe(closePopup);

    WA.room.area.onEnter('phrase07').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase07Popup", "Well, hello youngster", []);
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

