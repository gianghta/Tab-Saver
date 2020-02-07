// This script is here for future use if needed.

// chrome.runtime.onInstalled.addListener(() => {
//     console.log('onInstalled...');
//     // create alarm after extension is installed / upgraded
//     chrome.alarms.create('refresh', { periodInMinutes: 1 });
// });

// chrome.alarms.onAlarm.addListener((alarm) => {
//     console.log(alarm.name); // refresh
//     helloWorld();
// });

// function helloWorld() {
//     console.log("Hello, world!");
// }

/*global chrome*/

// const defaultList = [];

// export const setLinksList = (list) => {
//     chrome.storage.sync.get({ linksList: defaultList }, result => {
//         if (result === undefined) {
//             console.log('List is empty');
//         }
//         chrome.storage.sync.set({ linksList: list }, () => {
//             console.log(`List ${list} is added`);
//         });
//     });
// }

// export const getLinksList = (callback) => {
//     chrome.storage.sync.get({ linksList: defaultList }, result => {
//         callback(result);
//     });
// }