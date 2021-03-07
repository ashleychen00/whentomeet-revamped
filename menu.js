
// get the best times

const showBestTimes = () => {
	// find max number of ppl available at any given point in time
	var maxNumPpl = 0;
	for (var i = 0; i < AvailableAtSlot.length; i++) {
		if (AvailableAtSlot[i].length > maxNumPpl) {
			maxNumPpl = AvailableAtSlot[i].length;
		}
	}

	console.log("max num: ", maxNumPpl)

	// find times where that number of ppl are available
	var bestTimes = new Array();
	for (var j = 0; j < AvailableAtSlot.length; j++) {
		if (AvailableAtSlot[j].length == maxNumPpl) {
			bestTimes.push(j);
		}
	}

	// change the highlight around these times
	console.log("best times ", bestTimes)
}

// add UI components to main body of site

const runExtension = () => {
	const mainBody = document.getElementById('MainBody')
	const menu = document.createElement('div')
	menu.style.padding = '1em'

	const button = document.createElement('button')
	button.innerText = "Show Best Times"
	button.onclick = () => showBestTimes()
	menu.appendChild(button)
	mainBody.appendChild(menu)
}

runExtension();
