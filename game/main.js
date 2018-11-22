
var data = [
		{src:'game/fix.js'},
		{src:'game/Game.js'},
		{src:'game/GameObject.js'},
		{name:'ts', src:'game/img/ts.png'},
	];

// load
wu.Loader.load({data: data, progress: onprogress, completed: start});

function onprogress(e){
	document.title = e.loaded+'+'+e.error+'=>'+e.tatal;
}
function start(e){
	var game = new Game;
	console.log(e.result.ts, e);
	var ts = new GameObject(e.result.ts);
	game.addChild(ts);
	game.run();

	addEventListener('keydown', function(e){
		var key = e.keyCode;
		switch(key){
			case 37: ts.x-=3; break;
			case 39: ts.x+=3; break;
			case 38: ts.y-=3; break;
			case 40: ts.y+=3; break;
		}
	})
}
