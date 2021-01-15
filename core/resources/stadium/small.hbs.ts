export var stadiumText: string = `
{
	"name" : "Small",
	
	"width" : 420,
	"height" : 200,
	
	"spawnDistance" : 130,
	
	"bg" : { "type" : "grass", "width" : 320, "height" : 130, "kickOffRadius" : 70, "cornerRadius" : 0 },

	"vertexes" : [
		{ "x" : -320, "y" : 130,  "trait" : "ballArea" },
		{ "x" : -320, "y" : 55,   "trait" : "ballArea" },
		{ "x" : -320, "y" : -55,  "trait" : "ballArea" },
		{ "x" : -320, "y" : -130, "trait" : "ballArea" },
		
		{ "x" : 320, "y" : 130,  "trait" : "ballArea" },
		{ "x" : 320, "y" : 55,   "trait" : "ballArea" },
		{ "x" : 320, "y" : -55,  "trait" : "ballArea" },
		{ "x" : 320, "y" : -130, "trait" : "ballArea" },
		
		{ "x" : 0, "y" :  200, "trait" : "kickOffBarrier" },
		{ "x" : 0, "y" :   70, "trait" : "kickOffBarrier" },
		{ "x" : 0, "y" :  -70, "trait" : "kickOffBarrier" },
		{ "x" : 0, "y" : -200, "trait" : "kickOffBarrier" },
		
		{ "x" : -330, "y" : -55, "trait" : "goalNet" },
		{ "x" : -350, "y" : -35, "trait" : "goalNet" },
		{ "x" : -350, "y" :  35, "trait" : "goalNet" },
		{ "x" : -330, "y" :  55, "trait" : "goalNet" },
		
		{ "x" : 330, "y" : -55, "trait" : "goalNet" },
		{ "x" : 350, "y" : -35, "trait" : "goalNet" },
		{ "x" : 350, "y" :  35, "trait" : "goalNet" },
		{ "x" : 330, "y" :  55, "trait" : "goalNet" }
	],
	
	"segments" : [
		{ "v0" : 0, "v1" : 1, "trait" : "ballArea" },
		{ "v0" : 2, "v1" : 3, "trait" : "ballArea" },
		{ "v0" : 4, "v1" : 5, "trait" : "ballArea" },
		{ "v0" : 6, "v1" : 7, "trait" : "ballArea" },
		
		{ "v0" : 12, "v1" : 13, "trait" : "goalNet", "curve" : -90 },
		{ "v0" : 13, "v1" : 14, "trait" : "goalNet" },
		{ "v0" : 14, "v1" : 15, "trait" : "goalNet", "curve" : -90 },
		
		{ "v0" : 16, "v1" : 17, "trait" : "goalNet", "curve" : 90 },
		{ "v0" : 17, "v1" : 18, "trait" : "goalNet" },
		{ "v0" : 18, "v1" : 19, "trait" : "goalNet", "curve" : 90 },
		
		{ "v0" : 8, "v1" : 9, "trait" : "kickOffBarrier" },
		{ "v0" : 9, "v1" : 10, "trait" : "kickOffBarrier", "curve" : 180, "cGroup" : ["blueKO"] },
		{ "v0" : 9, "v1" : 10, "trait" : "kickOffBarrier", "curve" : -180, "cGroup" : ["redKO"] },
		{ "v0" : 10, "v1" : 11, "trait" : "kickOffBarrier" }
	],
	
	"goals" : [
		{ "p0" : [-320, 55], "p1" : [-320,-55], "team" : "red" },
		{ "p0" : [320, 55], "p1" : [320,-55], "team" : "blue" }
	],
	
	"discs" : [
		{ "pos" : [-320,  55], "trait" : "goalPost", "color" : "FFCCCC" },
		{ "pos" : [-320, -55], "trait" : "goalPost", "color" : "FFCCCC" },
		{ "pos" : [ 320,  55], "trait" : "goalPost", "color" : "CCCCFF" },
		{ "pos" : [ 320, -55], "trait" : "goalPost", "color" : "CCCCFF" }
	],
	
	"planes" : [
		{ "normal" : [0, 1], "dist" : -130, "trait" : "ballArea" },
		{ "normal" : [0,-1], "dist" : -130, "trait" : "ballArea" },
		{ "normal" : [ 0, 1], "dist" : -200, "bCoef" : 0.1 },
		{ "normal" : [ 0,-1], "dist" : -200, "bCoef" : 0.1 },
		{ "normal" : [ 1, 0], "dist" : -420, "bCoef" : 0.1 },
		{ "normal" : [-1, 0], "dist" : -420, "bCoef" : 0.1 }
	],
	
	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball"] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball"] }, 
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO", "blueKO"], "cMask" : ["red", "blue"] }
	}
}
`
