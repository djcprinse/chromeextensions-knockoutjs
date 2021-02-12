//you cannot use the browser.windows api in the devtools.js page.
browser.windows.onFocusChanged.addListener(function(windowId) {
    //send message to devtool.js. Then you can re-evaluate ko.dataFor($0)
    browser.tabs.query({active: true}, function(tab) {
      browser.tabs.sendMessage(tab.id, {}, function(response) {
      });
    });
});

// notify of page refreshes
browser.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(function (msg) {
    if (msg.action === 'register') {
      var respond = function (tabId, changeInfo, tab) {
        if (tabId !== msg.inspectedTabId) {
          return;
        }
        port.postMessage('refresh');
      };

      browser.tabs.onUpdated.addListener(respond);
      port.onDisconnect.addListener(function () {
        browser.tabs.onUpdated.removeListener(respond);
      });
    }
  });
});
