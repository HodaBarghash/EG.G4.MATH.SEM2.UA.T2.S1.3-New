function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5gE1T2Io9aA":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwLvf90x5kfIiMWqskaBjolGEP5vgwlcaXwmPz7RTMZP8-uiE9i7f9DyemR7tIvQpvhSQ/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect"),q2attempts:player.GetVar("q2attempts"),q2answeredcorrect:player.GetVar("q2answeredcorrect"),q3attempts:player.GetVar("q3attempts"),q3answeredcorrect:player.GetVar("q3answeredcorrect")})
	}
	)
}

