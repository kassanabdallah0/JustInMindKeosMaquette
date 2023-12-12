jQuery("#simulation")
  .on("click", ".s-fb0c3370-a8b9-49d1-9135-0e68ab9f6f14 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/63151f2d-1ee8-4e7a-a45d-c78eeb2efb98",
                    "transition": {
                      "type": "fade",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/63151f2d-1ee8-4e7a-a45d-c78eeb2efb98",
                    "transition": {
                      "type": "fade",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-fb0c3370-a8b9-49d1-9135-0e68ab9f6f14 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fb0c3370-a8b9-49d1-9135-0e68ab9f6f14 #s-Button_1" ],
                    "attributes": {
                      "border-left-width": "4px",
                      "border-bottom-width": "4px",
                      "border-right-width": "4px",
                      "border-top-width": "4px"
                    }
                  },{
                    "target": [ "#s-fb0c3370-a8b9-49d1-9135-0e68ab9f6f14 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-fb0c3370-a8b9-49d1-9135-0e68ab9f6f14 #s-Button_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#999999",
                      "border-right-color": "#999999",
                      "border-bottom-color": "#999999",
                      "border-left-color": "#999999"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fb0c3370-a8b9-49d1-9135-0e68ab9f6f14 #s-Button_2" ],
                    "attributes": {
                      "border-left-width": "4px",
                      "border-bottom-width": "4px",
                      "border-right-width": "4px",
                      "border-top-width": "4px"
                    }
                  },{
                    "target": [ "#s-fb0c3370-a8b9-49d1-9135-0e68ab9f6f14 #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-fb0c3370-a8b9-49d1-9135-0e68ab9f6f14 #s-Button_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#999999",
                      "border-right-color": "#999999",
                      "border-bottom-color": "#999999",
                      "border-left-color": "#999999"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-fb0c3370-a8b9-49d1-9135-0e68ab9f6f14 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_2")) {
      jEvent.undoCases(jFirer);
    }
  });