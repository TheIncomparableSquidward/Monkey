var resources = "abcde"
var costs = "fghijklmno"
var bools = "pqrstuv"


function save()
{
	saveloop(rsrc, resources)
	saveloop(cost, costs)
	saveloop(bool, bools)
	localStorage.setItem("names", nameList)
}

function load()
{
	
	loadbools(bool, bools)
	
	if (!bool[evid])
	{
		save()
	}
	
	loadints(rsrc, resources)
	loadints(cost, costs)
	nameList = localStorage.getItem("names")
	check()
}

function saveloop(values, names)
{
	for (var i = 0; i < values.length; i++)
	{
		localStorage.setItem(names[i], values[i])
	}
}

function loadints(values, names)
{
	for (var i = 0; i < values.length; i++)
	{
		values[i] = parseInt(localStorage.getItem(names[i]))
	}
}

function loadbools(values, names)
{
	for (var i = 0; i < values.length; i++)
	{
		values[i] = (localStorage.getItem(names[i]) == 'true')
	}
}

function check()
{
	set("suspicion", rsrc[susp] + "% Suspicion")
	
	if (bool[evid])
	{
		addgath()
		
		if (bool[sprd])
		{
			addsprd()
			
			if (bool[empl])
			{
				adddtcv()
				
				if (bool[goss2])
				{
					addgoss2()
					
					cont()
				}
				else if (bool[goss1])
				{
					addgoss1()
					
					cont()
				}
				
				
			}
		}
	}
}

function cont()
{
	if(bool[find])
	{
		addprof()
		
		if (bool[acus])
		{
			addacc()
			set("accuse", nameList)
		}
	}
}

function addgath()
{
	bool[gthr] = true
	addButton("gather", "Gather Evidence", "evidence")
	set("notes", "After much consideration, you begin to <br/>think you can start gathering evidence of what you suspect...")
	set("evidence", rsrc[evid] + " Evidence")
}

function addsprd()
{
	bool[sprd] = true
	addButton("spread", "Spread the Word", "spread")
	set("notes", "It seems like you have enough evidence <br/> to convince others of your findings.")
	set("spread", rsrc[info] + " Informees")
}

function adddtcv()
{
	bool[empl] = true
	addButton("employ", "Employ Detectives", "detectives")
	set("notes", "Word reaches some local detectives who would be <br/>willing to investigate. They're probably better at it than you.")
	set("detectives", rsrc[dtcv] + " Detectives")
}

function addgoss1()
{
	document.getElementById("right").innerHTML += "<p id='goss'>Gossip: 1000 Evidence</p> <button type='button' onclick='enableGoss()'>UNLOCK</button>"
	bool[goss1] = true
}

function addgoss2()
{
	document.getElementById("right").innerHTML = "<p id='gossTog'>ACTIVE</p> <button type='button' onclick='gossTog()'>Gossip</button>"
	bool[goss2] = true
}

function addprof()
{
	bool[find] = true
	addButton("prove", "Find Proof", "proof")
	set("notes", "This mere suspicion seems to be turning</br>into some rock-solid proof.")
	set("proof", rsrc[prof] + " Proof")
}

function addacc()
{
	bool[acus] = true
	document.getElementById("right").innerHTML += "<button type='button' style='display: block;' id='accuse' onclick='accuse()'>Accuse Your Neighbor</button>"
	set("notes", "Your hard work has paid off. The pieces are falling</br>into place. Now complete your mission and accuse this man.")
}

