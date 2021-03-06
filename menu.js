
// get the best times

const showBestTimes = () => {
	// find max number of ppl available at any given point in time
	var maxNumPpl = AvailableAtSlot.reduce(function (currentMax, slot) {
		return max(currentMax, slot.length);
	}, 0);

	// find times where that number of ppl are available
	var bestTimes = AvailableAtSlot.filter(function (slot) {
		return slot.length == maxNumPpl;
	}).map(function (slotIDs, slotIndex) {
		return slotIndex;
	});

	// change the highlight around these times
	console.log("best times " + bestTimes)
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
