
var replacements = {
	"Witnesses":"These dudes I know",
	"Allegedly":"Kinda probably",
	"New study":"Tumblr post",
	"Rebuild":"Avenge",
	"Space":"Spaaace",
	"Google Glass":"Virtual Boy",
	"Smartphone":"Pokedex",
	"Electric":"Atomic",
	"Senator":"Elf-lord",
	"Car":"Cat",
	"Election":"Eating contest",
	"Congressional leaders":"River spirits",
	"Homeland security":"Homestar Runner",
	"Could not be reached for comment":"Is guilty and everyone knows it"
}



walk(document.body)

function walk(node)
{
	var child, next

	switch (node.nodeType)
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild
			while (child)
			{
				next = child.nextSibling
				walk(child)
				child = next
			}
			break
		case 3: // Text node
			handleText(node)
			break
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue

	v = v.replace(/\bWitnesses\b/g, "These dudes I know")
	v = v.replace(/\bwitnesses\b/g, "these dudes I know")
	v = v.replace(/\bAllegedly\b/g, "Kinda probably")
	v = v.replace(/\ballegedly\b/g, "kinda probably")
	v = v.replace(/\bNew study\b/g, "Tumblr post")
	v = v.replace(/\bnew study\b/g, "tumblr post")
	v = v.replace(/\bRebuild\b/g, "Avenge")
	v = v.replace(/\brebuild\b/g, "avenge")
	v = v.replace(/\bSpace\b/g, "Spaaace")
	v = v.replace(/\bspace\b/g, "spaaace")
	v = v.replace(/\bGoogle Glass\b/g, "Virtual Boy")
	v = v.replace(/\bSmartphone\b/g, "Pokedex")
	v = v.replace(/\bsmartphone\b/g, "pokedex")
	v = v.replace(/\bElectric\b/g, "Atomic")
	v = v.replace(/\belectric\b/g, "atomic")
	v = v.replace(/\bSenator\b/g, "Elf-lord")
	v = v.replace(/\bsenator\b/g, "elf-lord")
	v = v.replace(/\bCar\b/g, "Cat")
	v = v.replace(/\bcar\b/g, "cat")
	v = v.replace(/\bElection\b/g, "Eating contest")
	v = v.replace(/\belection\b/g, "eating contest")
	v = v.replace(/\bCongressional leaders\b/g, "River spirits")
	v = v.replace(/\bcongressional leaders\b/g, "river spirits")
	v = v.replace(/\bHomeland Security\b/g, "Homestar Runner")
	v = v.replace(/\bCould not be reached for comment\b/g, "Is guilty and everyone knows it")
	v = v.replace(/\bcould not be reached for comment\b/g, "is guilty and everyone knows it")

	textNode.nodeValue = v
}


// for (var key in replacements)
// {
// 	var obj = replacements[key]
// 	for (var prop in obj)
// 	{
// 		if(obj.hasOwnProperty(prop))
// 		{
// 			var regex = new RegExp("\b"+prop+"\b/g", "g")
// 			v = v.replace(regex, obj[prop])
// 		}
// 	}
// }
