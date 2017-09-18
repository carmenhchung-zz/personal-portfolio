jQuery("#simulation")
  .on("windowresize", ".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .windowresize", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-d12245cc-1680-458d-89dd-4f0d7fb22724")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLess",
                "parameter": [ {
                  "action": "jimWindowWidth"
                },"900" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/237d2074-94c7-47c6-a764-4c01c53072c5"
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