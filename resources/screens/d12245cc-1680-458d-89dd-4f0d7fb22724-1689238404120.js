jQuery("#simulation")
  .on("click", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_2",
                    "property": "jimGetValue"
                  },"utilisateur" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_3",
                    "property": "jimGetValue"
                  },"123" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e5f83860-46d5-420f-a817-86e92c285689",
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_2",
                    "property": "jimGetValue"
                  },"admin" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_3",
                    "property": "jimGetValue"
                  },"123" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/129e74d5-0b66-40aa-b7ac-a1727aa6f022",
                    "transition": {
                      "type": "fade",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_9" ],
                    "top": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMinus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Rectangle_2",
                          "property": "jimGetHeight"
                        },"270" ]
                      }
                    },
                    "left": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Rectangle_2",
                          "property": "jimGetWidth"
                        },"50" ]
                      }
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_10" ],
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/890f41e5-0e6e-4d84-b989-52e9bc5d4596",
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
  .on("keydown.jim", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .keydown", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false) && {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_2",
                    "property": "jimGetValue"
                  },"utilisateur" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_3",
                    "property": "jimGetValue"
                  },"123" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e5f83860-46d5-420f-a817-86e92c285689",
                    "transition": {
                      "type": "fade",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false) && {
                "action": "jimAnd",
                "parameter": [ {
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_2",
                    "property": "jimGetValue"
                  },"admin" ]
                },{
                  "action": "jimEquals",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_3",
                    "property": "jimGetValue"
                  },"123" ]
                } ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/129e74d5-0b66-40aa-b7ac-a1727aa6f022",
                    "transition": {
                      "type": "fade",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_10" ],
                    "top": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMinus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Rectangle_2",
                          "property": "jimGetHeight"
                        },"270" ]
                      }
                    },
                    "left": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimPlus",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Rectangle_2",
                          "property": "jimGetWidth"
                        },"50" ]
                      }
                    },
                    "containment": false
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_10" ],
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
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
      if(!jimUtil.isAndroidDevice() || data.which != 229)
      	jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    }
  })
  .on("mouseenter dragenter", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseenter", function(event, data) {
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
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_1" ],
                    "attributes": {
                      "border-left-width": "4px",
                      "border-bottom-width": "4px",
                      "border-right-width": "4px",
                      "border-top-width": "4px"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#999999"
                    }
                  },{
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Button_1 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Paragraph_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-d12245cc-1680-458d-89dd-4f0d7fb22724 #s-Paragraph_1 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'OpenSans-Bold_wgt700',Arial",
                      "font-size": "13.5pt",
                      "font-weight": "700",
                      "font-stretch": "normal"
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
  .on("mouseleave dragleave", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Button_1")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_1")) {
      jEvent.undoCases(jFirer);
    }
  });