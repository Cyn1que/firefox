function save() {
    browser.tabs.executeScript({
        file: "/files/bookmarklet.js"
    });

}

browser.browserAction.onClicked.addListener(save);
browser.commands.onCommand.addListener(command => {
    if (command == "CopyMeThat") {
        save()
    }
});