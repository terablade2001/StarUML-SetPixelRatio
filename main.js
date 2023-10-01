function setRatio() {
  app.dialogs.showInputDialog("Set custom pixels ratio:",""+window.devicePixelRatio).then(function ({buttonId, returnValue}) {
    if (buttonId === 'ok') {
      if(!isNaN(Number(returnValue))) {
				window.devicePixelRatio = Number(returnValue) 
				app.toast.info("Pixels ration set to: "+returnValue)
      } else {
				app.toast.error("Value ["+returnValue+"] is not a valid number.")
			}
    } else {
			app.toast.warning("Set of pixels ratio cancelled by the user...")
		}
  })
  return 0;
}

function init () {
  app.commands.register('SetPixelsRatio:setRatio', setRatio)
}

exports.init = init;