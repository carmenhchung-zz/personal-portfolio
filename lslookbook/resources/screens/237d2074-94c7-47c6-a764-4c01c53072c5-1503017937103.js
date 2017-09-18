jQuery("#simulation")
  .on("mouseenter dragenter", ".s-237d2074-94c7-47c6-a764-4c01c53072c5 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_2": {
                      "attributes": {
                        "font-size": "13.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_2 span": {
                      "attributes": {
                        "color": "#6E7270",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "13.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
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
    } else if(jFirer.is("#s-Label_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_3": {
                      "attributes": {
                        "font-size": "13.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_3 span": {
                      "attributes": {
                        "color": "#6E7270",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "13.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
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
    } else if(jFirer.is("#s-Label_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_4": {
                      "attributes": {
                        "font-size": "13.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_4 span": {
                      "attributes": {
                        "color": "#6E7270",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "13.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
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
    } else if(jFirer.is("#s-Label_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_5": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_5 span": {
                      "attributes": {
                        "color": "#6E7270",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
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
    } else if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_6": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_6 span": {
                      "attributes": {
                        "color": "#6E7270",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
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
    } else if(jFirer.is("#s-Label_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_7": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_7 span": {
                      "attributes": {
                        "color": "#6E7270",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
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
    } else if(jFirer.is("#s-Label_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_2": {
                      "attributes": {
                        "font-size": "13.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_2 span": {
                      "attributes": {
                        "color": "#6E7270",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "13.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
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
    } else if(jFirer.is("#s-Label_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_3": {
                      "attributes": {
                        "font-size": "13.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_3 span": {
                      "attributes": {
                        "color": "#6E7270",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "13.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
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
    } else if(jFirer.is("#s-Label_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_4": {
                      "attributes": {
                        "font-size": "13.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_4 span": {
                      "attributes": {
                        "color": "#6E7270",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "13.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
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
    } else if(jFirer.is("#s-Label_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_5": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_5 span": {
                      "attributes": {
                        "color": "#6E7270",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
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
    } else if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_6": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_6 span": {
                      "attributes": {
                        "color": "#6E7270",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
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
    } else if(jFirer.is("#s-Label_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_7": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_7 span": {
                      "attributes": {
                        "color": "#6E7270",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
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
    } else if(jFirer.is("#s-Label_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_2": {
                      "attributes": {
                        "font-size": "13.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_2 span": {
                      "attributes": {
                        "color": "#6E7270",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "13.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
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
    } else if(jFirer.is("#s-Label_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_3": {
                      "attributes": {
                        "font-size": "13.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_3 span": {
                      "attributes": {
                        "color": "#6E7270",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "13.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
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
    } else if(jFirer.is("#s-Label_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_4": {
                      "attributes": {
                        "font-size": "13.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_4 span": {
                      "attributes": {
                        "color": "#6E7270",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "13.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
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
    } else if(jFirer.is("#s-Label_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_5": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_5 span": {
                      "attributes": {
                        "color": "#6E7270",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
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
    } else if(jFirer.is("#s-Label_6") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_6": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_6 span": {
                      "attributes": {
                        "color": "#6E7270",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
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
    } else if(jFirer.is("#s-Label_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_7": {
                      "attributes": {
                        "font-size": "11.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_7 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_7 span": {
                      "attributes": {
                        "color": "#6E7270",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'Arial',Arial",
                        "font-size": "11.0pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
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
    } else if(jFirer.is("#s-Label_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_9": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_9": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
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
    } else if(jFirer.is("#s-Label_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_10": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_10": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
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
    } else if(jFirer.is("#s-Label_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_11": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_11": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
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
    } else if(jFirer.is("#s-Label_12") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_12": {
                      "attributes": {
                        "background-color": "#EEEEEE",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_12": {
                      "attributes-ie": {
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      }
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
    } else if(jFirer.is("#s-Label_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_14": {
                      "attributes": {
                        "font-size": "13.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_14 span": {
                      "attributes": {
                        "color": "#024E69",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Arial',Arial",
                        "font-size": "13.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
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
    } else if(jFirer.is("#s-Label_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_14": {
                      "attributes": {
                        "font-size": "13.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_14 span": {
                      "attributes": {
                        "color": "#024E69",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Arial',Arial",
                        "font-size": "13.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
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
    } else if(jFirer.is("#s-Label_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_14": {
                      "attributes": {
                        "font-size": "13.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_14 span": {
                      "attributes": {
                        "color": "#024E69",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Arial',Arial",
                        "font-size": "13.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
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
    } else if(jFirer.is("#s-Label_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_14": {
                      "attributes": {
                        "font-size": "13.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_14 span": {
                      "attributes": {
                        "color": "#024E69",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Arial',Arial",
                        "font-size": "13.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
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
    } else if(jFirer.is("#s-Label_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_14": {
                      "attributes": {
                        "font-size": "13.0pt",
                        "font-family": "'Arial',Arial"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "left"
                      }
                    }
                  },{
                    "#s-237d2074-94c7-47c6-a764-4c01c53072c5 #s-Label_14 span": {
                      "attributes": {
                        "color": "#024E69",
                        "text-align": "left",
                        "text-decoration": "underline",
                        "font-family": "'Arial',Arial",
                        "font-size": "13.0pt",
                        "font-style": "normal",
                        "font-weight": "700"
                      }
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
  .on("mouseleave dragleave", ".s-237d2074-94c7-47c6-a764-4c01c53072c5 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Label_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_2")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_9")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_10")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_14")) {
      jEvent.undoCases(jFirer);
    }
  })
  .on("windowresize", ".s-237d2074-94c7-47c6-a764-4c01c53072c5 .windowresize", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-237d2074-94c7-47c6-a764-4c01c53072c5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreaterOrEquals",
                "parameter": [ {
                  "action": "jimWindowWidth"
                },"900" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "action": "jimWindowWidth"
                },"480" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/80c3cedb-4e48-4602-bd61-96aa60736d9b"
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
    } else if(jFirer.is("#s-Cell_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Table_1" ],
                    "width": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimWindowWidth"
                      }
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Cell_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Table_1" ],
                    "width": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimWindowWidth"
                      }
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Label_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Label_17" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "53"
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
    } else if(jFirer.is("#s-Label_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Label_9" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "60"
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
    } else if(jFirer.is("#s-Label_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Label_10" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "60"
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
    } else if(jFirer.is("#s-Label_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Label_11" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "60"
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
    } else if(jFirer.is("#s-Label_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Label_12" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "60"
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
    } else if(jFirer.is("#s-Label_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Label_13" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Rich_text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Rich_text_5" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Label_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Label_14" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Label_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Label_13" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Rich_text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Rich_text_5" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Label_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Label_14" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Label_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Label_13" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Rich_text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Rich_text_5" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Label_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Label_14" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Label_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Label_13" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Rich_text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Rich_text_5" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Label_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Label_14" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Label_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Label_13" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Rich_text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Rich_text_5" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Label_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Label_14" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Label_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Label_15" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Rich_text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Rich_text_4" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Image_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimWindowWidth"
                        },"72" ]
                      }
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "action": "jimMinus",
                          "parameter": [ {
                            "action": "jimWindowWidth"
                          },"72" ]
                        },"0.62" ]
                      }
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
    } else if(jFirer.is("#s-Rich_text_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Rich_text_6" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Label_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Label_15" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Rich_text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Rich_text_4" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Image_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimWindowWidth"
                        },"72" ]
                      }
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "action": "jimMinus",
                          "parameter": [ {
                            "action": "jimWindowWidth"
                          },"72" ]
                        },"0.62" ]
                      }
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
    } else if(jFirer.is("#s-Rich_text_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Rich_text_6" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Label_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Label_15" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Rich_text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Rich_text_4" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Image_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimWindowWidth"
                        },"72" ]
                      }
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "action": "jimMinus",
                          "parameter": [ {
                            "action": "jimWindowWidth"
                          },"72" ]
                        },"0.62" ]
                      }
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
    } else if(jFirer.is("#s-Rich_text_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Rich_text_6" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Label_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Label_15" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Rich_text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Rich_text_4" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Image_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimWindowWidth"
                        },"72" ]
                      }
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "action": "jimMinus",
                          "parameter": [ {
                            "action": "jimWindowWidth"
                          },"72" ]
                        },"0.62" ]
                      }
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
    } else if(jFirer.is("#s-Rich_text_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Rich_text_6" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Label_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Label_15" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Rich_text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Rich_text_4" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Image_2" ],
                    "width": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimWindowWidth"
                        },"72" ]
                      }
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": {
                        "action": "jimMultiply",
                        "parameter": [ {
                          "action": "jimMinus",
                          "parameter": [ {
                            "action": "jimWindowWidth"
                          },"72" ]
                        },"0.62" ]
                      }
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
    } else if(jFirer.is("#s-Rich_text_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Rich_text_6" ],
                    "width": {
                      "type": "parentrelative",
                      "value": "100"
                    },
                    "height": {
                      "type": "noresize"
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
  });