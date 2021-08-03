const { isMatch } = require("micromatch");

async function alertWebhook(req, res, settings, triggerControllers) {
  try {
    const body = req.body;
    const { alertType, alertId, alertStatus, admin, host, level, group } = body;
    triggerControllers.forEach((trigger) => {
      const { status: trigAlertStatus, alertType: trigAlertType, admin: trigAdmin, idPat,
        hostPat, groupPat, levelPat } = trigger.params;
      if (trigAlertStatus && trigAlertStatus !== "any" && trigAlertStatus !== alertStatus) return;
      if (trigAlertType && trigAlertType !== "any" && trigAlertType !== alertType) return;
      if (trigAdmin && trigAdmin !== admin) return;
      if (idPat && !isMatch(alertId, idPat)) return;
      if (hostPat && !isMatch(host, hostPat)) return;
      if (groupPat && !isMatch(group, groupPat)) return;
      if (levelPat && !isMatch(level, levelPat)) return;
      trigger.execute(`LogicMonitor ${alertType} ${alertId} ${level} ${alertStatus} - ${host}`, body);
     });
     res.status(200).send("OK");
  }
  catch (err){
    res.status(422).send(err.message || JSON.stringify(err));
  }
}

module.exports = { 
  alertWebhook
};