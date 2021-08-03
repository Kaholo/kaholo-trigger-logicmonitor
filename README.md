# kaholo-trigger-logicmonitor
Kaholo integration with LogicMonitor Webhooks.

## How to use:
After installing the trigger on Kaholo, follow the steps described [here](https://www.logicmonitor.com/support/alerts/integrations/custom-http-delivery) to add the integration with this trigger.
Also you can see more on connecting alert rules to integrations in [here](https://www.logicmonitor.com/support/alerts/integrations/what-does-logicmonitor-integrate-with).
**Don't forget to also make sure you have the webhook configured to be your alert escalation destination!**

## LogicMonitor Alert
This triggers whenever there is a logicmonitor alert.

### Webhook URL:
**{KAHOLO_URL}/webhook/logicmonitor/alert**

### Parameters
1. Alert Status (Options) **Optional** - If specified accept only alert with the status specified. Possible values: Any | Active | Acknowledged | Cleared | Updated
2. Alert Type (Options) **Optional** - If specified, only trigger when the alert matches the event type provided. Possible values: Any | Alert | Event Alert | Batch Job Alert | Host Cluster Alert | Website Alert | Agent Down Alert | Agent Failover Alert | Agent FailBack Alert | Alert Throttled Alert
3. Assigned User (String) **Optional** - If specified, only trigger when the alert is assigned to the specified user.
4. Alert ID Pattern (String) **Optional** - The alert ID or it's [micromatch pattern](https://github.com/micromatch/micromatch#micromatch----).
5. Host Pattern (String) **Optional** - The host device name or it's [micromatch pattern](https://github.com/micromatch/micromatch#micromatch----).
6. Group Pattern (String) **Optional** - The device group of the device that sent the alert or it's [micromatch pattern](https://github.com/micromatch/micromatch#micromatch----).
7. Level Pattern (String) **Optional** - The alert level or it's [micromatch pattern](https://github.com/micromatch/micromatch#micromatch----).
On default the possible levels are warning|error|critical, but can be customised from logicmonitor.