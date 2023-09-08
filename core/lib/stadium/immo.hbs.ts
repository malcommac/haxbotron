export var stadiumText: string = `
{

	"name" : "Immo's",

	"width" : 1024,

	"height" : 477,

	"spawnDistance" : 200,

	"bg" : { "type" : "none", "width" : 950, "height" : 443, "kickOffRadius" : 80, "cornerRadius" : 0, "color" : "2b6482"  },

	"vertexes" : [
		/* 0 */ { "x" : -949, "y" : 443, "trait" : "ballArea", "bCoef" : 1 },
		/* 1 */ { "x" : -914, "y" : 101, "trait" : "ballArea" },
		/* 2 */ { "x" : -915, "y" : -106, "trait" : "ballArea" },
		/* 3 */ { "x" : -951, "y" : -443, "trait" : "ballArea" },
		/* 4 */ { "x" : 952, "y" : 444, "trait" : "ballArea", "color" : "ffffff", "vis" : true },
		/* 5 */ { "x" : 916, "y" : 94, "trait" : "ballArea", "color" : "ffffff", "vis" : true },
		/* 6 */ { "x" : 916, "y" : -106, "trait" : "ballArea", "vis" : true, "color" : "ffffff" },
		
        // Barriera calcio d'inizo
		/* 7 */ { "x" : 0, "y" : 442, "trait" : "kickOffBarrier", "vis" : true, "color" : "ffffff" },
		/* 8 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "vis" : true, "color" : "ffffff" },
		/* 9 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "vis" : true, "color" : "ffffff" },
		/* 10 */ { "x" : 0, "y" : -442, "trait" : "kickOffBarrier", "vis" : true, "color" : "ffffff" },
		
		/* 11 */ { "x" : -918, "y" : -100, "trait" : "goalNet" },
		/* 12 */ { "x" : -945, "y" : -106, "trait" : "goalNet" },
		/* 13 */ { "x" : -944, "y" : 105, "trait" : "goalNet" },
		/* 14 */ { "x" : -917, "y" : 100, "trait" : "goalNet" },
		/* 15 */ { "x" : 913, "y" : -105, "trait" : "goalNet" },
		/* 16 */ { "x" : 946, "y" : -113, "trait" : "goalNet" },
		/* 17 */ { "x" : 946, "y" : 103, "trait" : "goalNet" },
		/* 18 */ { "x" : 913, "y" : 93, "trait" : "goalNet" },
		
		/* 19 */ { "x" : -950, "y" : 319, "cMask" : ["wall" ], "cGroup" : ["all" ], "curve" : 90, "color" : "ffffff" },
		/* 20 */ { "x" : -949, "y" : -323, "cMask" : ["wall" ], "cGroup" : ["all" ], "curve" : 90, "color" : "ffffff" },
		/* 21 */ { "x" : 950, "y" : -320, "cMask" : ["wall" ], "cGroup" : ["all" ], "curve" : -90, "color" : "ffffff" },
		/* 22 */ { "x" : 949, "y" : 319, "cMask" : ["wall" ], "cGroup" : ["all" ], "curve" : -90, "color" : "ffffff" },
		
		/* 23 */ { "x" : -915, "y" : -101.50943396226415, "trait" : "ballArea", "cMask" : ["ball" ], "vis" : true, "color" : "ffffff" },
		/* 24 */ { "x" : -950, "y" : -443.0188679245283, "trait" : "ballArea", "cMask" : ["ball" ], "vis" : true, "color" : "ffffff" },
		/* 25 */ { "x" : -914.5503044481799, "y" : 97.49704000095647, "trait" : "ballArea", "cMask" : ["ball" ] },
		/* 26 */ { "x" : -949, "y" : 443.49056603773585, "trait" : "ballArea", "cMask" : ["ball" ], "vis" : true, "color" : "ffffff" },
		/* 27 */ { "x" : -915, "y" : 100.98113207547169, "trait" : "ballArea", "cMask" : ["ball" ], "vis" : true, "color" : "ffffff" },
		/* 28 */ { "x" : 950, "y" : -443, "trait" : "ballArea", "color" : "ffffff", "vis" : true },
		/* 29 */ { "x" : -951, "y" : -443.50943396226415, "trait" : "ballArea", "cMask" : ["ball" ], "vis" : true, "color" : "ffffff" },
		/* 30 */ { "x" : 952, "y" : 444, "trait" : "ballArea", "color" : "ffffff", "vis" : true },
		/* 31 */ { "x" : 916, "y" : 94, "trait" : "ballArea", "color" : "ffffff", "vis" : true },
		/* 32 */ { "x" : 916, "y" : -106, "trait" : "ballArea", "vis" : true, "color" : "ffffff" },
		/* 33 */ { "x" : -915, "y" : -101.50943396226415, "trait" : "ballArea", "cMask" : ["ball" ], "vis" : true, "color" : "ffffff" },
		/* 34 */ { "x" : -950, "y" : -443.0188679245283, "trait" : "ballArea", "cMask" : ["ball" ], "vis" : true, "color" : "ffffff" },
		/* 35 */ { "x" : -949, "y" : 443.49056603773585, "trait" : "ballArea", "cMask" : ["ball" ], "vis" : true, "color" : "ffffff" },
		/* 36 */ { "x" : -915, "y" : 100.98113207547169, "trait" : "ballArea", "cMask" : ["ball" ], "vis" : true, "color" : "ffffff" },
		/* 37 */ { "x" : -951, "y" : -443.50943396226415, "trait" : "ballArea", "cMask" : ["ball" ], "vis" : true, "color" : "ffffff" },
		/* 38 */ { "x" : 952, "y" : 444, "trait" : "ballArea", "color" : "ffffff", "vis" : true },
		/* 39 */ { "x" : 916, "y" : 94, "trait" : "ballArea", "color" : "ffffff", "vis" : true },
		/* 40 */ { "x" : 916, "y" : -106, "trait" : "ballArea", "vis" : true, "color" : "ffffff" },
		/* 41 */ { "x" : -915, "y" : -101.50943396226415, "trait" : "ballArea", "cMask" : ["ball" ], "vis" : true, "color" : "ffffff" },
		/* 42 */ { "x" : -950, "y" : -443.0188679245283, "trait" : "ballArea", "cMask" : ["ball" ], "vis" : true, "color" : "ffffff" },
		/* 43 */ { "x" : -949, "y" : 443.49056603773585, "trait" : "ballArea", "cMask" : ["ball" ], "vis" : true, "color" : "ffffff" },
		/* 44 */ { "x" : -915, "y" : 100.98113207547169, "trait" : "ballArea", "cMask" : ["ball" ], "vis" : true, "color" : "ffffff" },
		/* 45 */ { "x" : -951, "y" : -443.50943396226415, "trait" : "ballArea", "cMask" : ["ball" ], "vis" : true, "color" : "ffffff" },
		/* 46 */ { "x" : 952, "y" : 444, "trait" : "ballArea", "color" : "ffffff", "vis" : true },
		/* 47 */ { "x" : 916, "y" : 94, "trait" : "ballArea", "color" : "ffffff", "vis" : true },
		/* 48 */ { "x" : 916, "y" : -106, "trait" : "ballArea", "vis" : true, "color" : "ffffff" },
		/* 49 */ { "x" : -915, "y" : -101.50943396226415, "trait" : "ballArea", "cMask" : ["ball" ], "vis" : true, "color" : "ffffff" },
		/* 50 */ { "x" : -950, "y" : -443.0188679245283, "trait" : "ballArea", "cMask" : ["ball" ], "vis" : true, "color" : "ffffff" },
		/* 51 */ { "x" : -949, "y" : 443.49056603773585, "trait" : "ballArea", "cMask" : ["ball" ], "vis" : true, "color" : "ffffff" },
		/* 52 */ { "x" : -915, "y" : 100.98113207547169, "trait" : "ballArea", "cMask" : ["ball" ], "vis" : true, "color" : "ffffff" },
		/* 53 */ { "x" : -951, "y" : -443.50943396226415, "trait" : "ballArea", "cMask" : ["ball" ], "vis" : true, "color" : "ffffff" },
		/* 54 */ { "x" : 952, "y" : 444.49056603773585, "trait" : "ballArea", "cMask" : ["ball" ], "vis" : true, "color" : "ffffff" },
		/* 55 */ { "x" : 950, "y" : -442.50943396226415, "trait" : "ballArea", "cMask" : ["ball" ], "vis" : true, "color" : "ffffff" },
		
		/* 56 */ { "x" : 914, "y" : -104, "curve" : 0 },
		/* 57 */ { "x" : 915, "y" : 91, "curve" : 0 },
		/* 58 */ { "x" : -916, "y" : 101, "cMask" : ["wall" ], "cGroup" : ["all" ], "curve" : 0, "color" : "ffffff" },
		/* 59 */ { "x" : -916, "y" : -99, "cMask" : ["wall" ], "cGroup" : ["all" ], "curve" : 0, "color" : "ffffff" },
		/* 60 */ { "x" : 915, "y" : 101, "cMask" : ["wall" ], "cGroup" : ["all" ], "curve" : 0, "color" : "ffffff", "_selected" : true },
		/* 61 */ { "x" : 915, "y" : -99, "cMask" : ["wall" ], "cGroup" : ["all" ], "curve" : 0, "color" : "ffffff", "_selected" : true },

		/* 62 */ { "x" : 0, "y" : -60, "color" : "ffffff", "cMask": ["c0"] },
		/* 63 */ { "x" : -60, "y" : 0, "color" : "ffffff", "cMask": ["c0"] },
		/* 64 */ { "x" : 0, "y" : -60, "color" : "ffffff", "cMask": ["c0"] },
		/* 65 */ { "x" : 60, "y" : 0, "color" : "ffffff", "cMask": ["c0"] },
		/* 66 */ { "x" : -30, "y" : 0, "color" : "ffffff", "cMask": ["c0"] },
		/* 67 */ { "x" : 30, "y" : 0, "color" : "ffffff", "cMask": ["c0"]},
		/* 68 */ { "x" : -25, "y" : 60, "color" : "ffffff", "cMask": ["c0"] },
		/* 69 */ { "x" : 25, "y" : 60, "color" : "ffffff", "cMask": ["c0"] },
		/* 70 */ { "x" : -10, "y" : 60, "color" : "ffffff", "cMask": ["c0"] },
		/* 71 */ { "x" : 10, "y" : 60, "color" : "ffffff", "cMask": ["c0"] },
		/* 72 */ { "x" : -10, "y" : 13, "color" : "ffffff", "cMask": ["c0"] },
		/* 73 */ { "x" : -10, "y" : 13, "color" : "ffffff", "cMask": ["c0"] },
		/* 74 */ { "x" : 10, "y" : 60, "color" : "ffffff", "cMask": ["c0"] },
		/* 75 */ { "x" : 10, "y" : 13, "color" : "ffffff", "cMask": ["c0"] }

	],

	"segments" : [
		{ "v0" : 11, "v1" : 12, "curve" : -90, "trait" : "goalNet" },
		{ "v0" : 12, "v1" : 13, "trait" : "goalNet" },
		{ "v0" : 13, "v1" : 14, "curve" : -90, "trait" : "goalNet" },
		{ "v0" : 15, "v1" : 16, "curve" : 90, "trait" : "goalNet" },
		{ "v0" : 16, "v1" : 17, "trait" : "goalNet" },
		{ "v0" : 17, "v1" : 18, "curve" : 90, "trait" : "goalNet" },

        // Barriera calcio d'inizio
		{ "v0" : 7, "v1" : 8, "trait" : "kickOffBarrier", "vis" : true, "color" : "ffffff" },
		{ "v0" : 8, "v1" : 9, "curve" : 180, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "ffffff" },
		{ "v0" : 8, "v1" : 9, "curve" : -180, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "ffffff" },
		{ "v0" : 9, "v1" : 10, "trait" : "kickOffBarrier", "vis" : true, "color" : "ffffff" },
		
		{ "v0" : 20, "v1" : 19, "curve" : 145.07775679345488, "vis" : true, "color" : "ffffff", "cMask" : ["wall" ], "cGroup" : ["all" ] },
		{ "v0" : 21, "v1" : 22, "curve" : -144.83021705048634, "vis" : true, "color" : "ffffff", "cMask" : ["wall" ], "cGroup" : ["all" ] },
		
		{ "vis" : true, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "v0" : 26, "v1" : 4, "color" : "ffffff" },
		{ "vis" : true, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "v0" : 29, "v1" : 28, "color" : "ffffff" },
		{ "vis" : true, "v0" : 51, "v1" : 53, "color" : "ffffff", "cMask" : ["ball" ], "trait" : "ballArea" },
		{ "vis" : true, "v0" : 54, "v1" : 55, "color" : "ffffff", "trait" : "ballArea" },
		
		{ "v0" : 59, "v1" : 58, "curve" : 0, "vis" : true, "color" : "ffffff", "cMask" : ["wall" ], "cGroup" : ["all" ] },
		{ "v0" : 61, "v1" : 60, "curve" : 0, "vis" : true, "color" : "ffffff", "cMask" : ["wall" ], "cGroup" : ["all" ], "_selected" : true, "x" : 915 },

		{ "v0" : 62, "v1" : 63, "color" : "ffffff", "cMask": ["c0"] },
		{ "v0" : 64, "v1" : 65, "color" : "ffffff", "cMask": ["c0"] },
		{ "v0" : 63, "v1" : 66, "color" : "ffffff", "cMask": ["c0"] },
		{ "v0" : 65, "v1" : 67, "color" : "ffffff", "cMask": ["c0"] },
		{ "v0" : 66, "v1" : 68, "color" : "ffffff", "cMask": ["c0"] },
		{ "v0" : 67, "v1" : 69, "color" : "ffffff", "cMask": ["c0"] },
		{ "v0" : 68, "v1" : 70, "color" : "ffffff", "cMask": ["c0"] },
		{ "v0" : 69, "v1" : 71, "color" : "ffffff", "cMask": ["c0"] },
		{ "v0" : 70, "v1" : 72, "color" : "ffffff", "cMask": ["c0"] },
		{ "v0" : 71, "v1" : 75, "color" : "ffffff", "cMask": ["c0"] },
		{ "v0" : 72, "v1" : 75, "color" : "ffffff", "cMask": ["c0"] }

	],

	"goals" : [
		{ "p0" : [-915,-101 ], "p1" : [-915,99 ], "team" : "red", "vis" : true },
		{ "p0" : [915,94 ], "p1" : [915,-106 ], "team" : "blue" }

	],

	"discs" : [
		{ "pos" : [-915,100 ], "color" : "E56E56", "trait" : "goalPost" },
		{ "pos" : [-915,-100 ], "color" : "E56E56", "trait" : "goalPost" },
		{ "pos" : [916,94 ], "color" : "5689E5", "trait" : "goalPost" },
		{ "pos" : [916,-106 ], "color" : "5689E5", "trait" : "goalPost" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -443, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -478, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -476, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -1022, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -1021, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -1025, "bCoef" : 0.1 },
		
		{ "bCoef" : 0.5, "cMask" : ["ball" ], "trait" : "ballArea", "dist" : -444, "normal" : [0,1 ] },
		{ "bCoef" : 0.5, "cMask" : ["ball" ], "trait" : "ballArea", "dist" : -950, "normal" : [1,0 ] },
		{ "bCoef" : 0.5, "cMask" : ["ball" ], "trait" : "ballArea", "dist" : -950, "normal" : [-1,0 ] },
		{ "bCoef" : 0.5, "cMask" : ["ball" ], "trait" : "ballArea", "dist" : -444, "normal" : [0,-1 ] },
		
		{ "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "dist" : -1017, "normal" : [1,0 ] },
		{ "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "dist" : -1019, "normal" : [-1,0 ] },
		{ "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "dist" : -475, "normal" : [0,1 ] },
		{ "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "goalNet", "dist" : -473, "normal" : [0,-1 ] }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"playerPhysics" : {
		"bCoef" : 0.5,
		"invMass" : 0.5,
		"damping" : 0.96,
		"acceleration" : 0.15,
		"kickingAcceleration" : 0.1,
		"kickingDamping" : 0.96,
		"kickStrength" : 7

	},

	"ballPhysics" : {
		"radius" : 8,
		"bCoef" : 0.6,
		"invMass" : 1,
		"damping" : 0.99,
		"color" : "E1F56E"

	}
}
`;