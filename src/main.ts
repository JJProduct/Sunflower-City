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
        currentPopup = WA.ui.openPopup("phrase01Popup", "Welcome to Jalan Journey!", []);
    })

    WA.room.area.onLeave('phrase01').subscribe(closePopup)


    WA.room.area.onEnter('phrase02').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase02Popup", "These are woka - characters in the game as well! Remember to interact with them and you might find something interesting!", []);
    })

    WA.room.area.onLeave('phrase02').subscribe(closePopup)


    WA.room.area.onEnter('phrase03').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase03Popup", "Look out for these green arrows! They are portals into the next rooms. Try to enter", []);
    })

    WA.room.area.onLeave('phrase03').subscribe(closePopup)

    WA.room.area.onEnter('phrase04').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase04Popup", "What to do when you are lost?", []);
    })

    WA.room.area.onLeave('phrase04').subscribe(closePopup)

    WA.room.area.onEnter('phrase05').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase05Popup", "If you ever find yourself experiencing some sort of glitch, just refresh your browser page and you'll find yourself at where you last left off!", []);
    })

    WA.room.area.onLeave('phrase05').subscribe(closePopup)

    WA.room.area.onEnter('phrase06').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase06Popup", "How are you? Auntie is happy!", []);
    })

    WA.room.area.onLeave('phrase06').subscribe(closePopup)

    WA.room.area.onEnter('phrase07').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase07Popup", "Please have a seat and start video meeting", []);
    })

    WA.room.area.onLeave('phrase07').subscribe(closePopup)

    WA.room.area.onEnter('phrase08').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase08Popup", "You can change the aspect ratio by zooming in and out using your mouse or trackpad!", []);
    })

    WA.room.area.onLeave('phrase08').subscribe(closePopup)

    WA.room.area.onEnter('phrase09').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase09Popup", "These blue arrows will guide you from one location to another!", []);
    })

    WA.room.area.onLeave('phrase09').subscribe(closePopup)

    WA.room.area.onEnter('phrase10').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase10Popup", "Lastly, do ask your facilitator for help if you require any assistance!", []);
    })

    WA.room.area.onLeave('phrase10').subscribe(closePopup)



    WA.room.area.onEnter('phrase11').subscribe(() => {
        currentPopup = WA.ui.openPopup("phrase11Popup", "Hi i'm Jason. Want to have a conversation?", []);
    })

    WA.room.area.onLeave('phrase11').subscribe(closePopup)





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


