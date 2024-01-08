/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    WA.controls.disablePlayerProximityMeeting();

    WA.room.area.onEnter('clock').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup", "It's " + time, []);
    })

    WA.room.area.onLeave('clock').subscribe(closePopup)

    WA.room.area.onEnter('phrase01').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase01Popup", "Some exfoliating body washes contain microplastics! They go through filters and end up in our seas!", []);
    })

    WA.room.area.onLeave('phrase01').subscribe(closePopup)


    WA.room.area.onEnter('phrase02').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase02Popup", "Some people recycle their soft drink bottles with the leftover drink inside... eww!", []);
    })

    WA.room.area.onLeave('phrase02').subscribe(closePopup)


    WA.room.area.onEnter('phrase03').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase03Popup", "Germany has the Pfand system to encourage citizens to recycle used cans and bottles! How cool is that?", []);
    })

    WA.room.area.onLeave('phrase03').subscribe(closePopup)


    WA.room.area.onEnter('phrase04').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase04Popup", "There are 7 types of labels for plastics? I have always thought all plastics are the same!", []);
    })

    WA.room.area.onLeave('phrase04').subscribe(closePopup)


    WA.room.area.onEnter('phrase05').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase05Popup", "While recycling helps conserve resources, I have grown a habit of refusing plastic bags altogether!", []);
    })

    WA.room.area.onLeave('phrase05').subscribe(closePopup)


    WA.room.area.onEnter('phrase06').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase06Popup", "Batteries are incredibly toxic! Make sure you dispose of them properly!", []);
    })

    WA.room.area.onLeave('phrase06').subscribe(closePopup)


    WA.room.area.onEnter('phrase07').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase07Popup", "Welcome to Sunflower City’s Recycling Corner! Citizens come over weekly to deposit their recyclables.", []);
    })

    WA.room.area.onLeave('phrase07').subscribe(closePopup)


    WA.room.area.onEnter('phrase08').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase08Popup", "Scientists made a fusion energy breakthrough in August 2023, where they yielded more energy than what was put into it!", []);
    })

    WA.room.area.onLeave('phrase08').subscribe(closePopup)


    WA.room.area.onEnter('phrase09').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase09Popup", "What do I do here? Oh, I’m here as a volunteer! Yes, I really enjoy helping save my environment while earning points on my resumé!", []);
    })

    WA.room.area.onLeave('phrase09').subscribe(closePopup)


    WA.room.area.onEnter('phrase10').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase10Popup", "Really? That sounds amazing! I will search it up right now!", []);
    })

    WA.room.area.onLeave('phrase10').subscribe(closePopup)


    WA.room.area.onEnter('phrase11').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase11Popup", "Have you heard? A group of singers made a song about planting a tree! Something about “wind, sunlight, water”...", []);
    })

    WA.room.area.onLeave('phrase11').subscribe(closePopup)


    WA.room.area.onEnter('phrase12').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase12Popup", "I sure hope that the items in these bins are clean, else I will have to throw them all away... that would be such a waste.", []);
    })

    WA.room.area.onLeave('phrase12').subscribe(closePopup)


    WA.room.area.onEnter('phrase13').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase13Popup", "Why spend money on public transport when you can spend even more money on a bicycle to save the world?", []);
    })

    WA.room.area.onLeave('phrase13').subscribe(closePopup)


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


