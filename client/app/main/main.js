'use strict';

var hotFluidOptions =
	[
	"Aqueous Vapours",
	"Dowtherm",
	"Flue Gases",
	"Gases",
	"Gases (P = 200 bar)",
	"Gases (P = atm)",
	"Heavy Oils",
	"Light Oils",
	"Organic Solvents",
	"Organic Vapours",
	"Organics (some non-condensables)",
	"Reduced Crude",
	"Refinery Hydrocarbons",
	"Regenerated DEA",
	"Steam",
	"Water"
	];

var coldFluidOptions =
	["Aqueous Solution",
	"Brine",
	"Flashed Crude",
	"Foul DEA",
	"Gases",
	"Gases (P = 200 bar)",
	"Gases (P = atm)",
	"Heavy Oils",
	"Heavy Organics",
	"Hydrocarbon Vapours",
	"Light Oils",
	"Light Organics",
	"Organic Solvents",
	"Refinery Hydrocarbons",
	"Steam",
	"Water"];

var sideOptions =
	["Tube Side",
	"Shell Side"];

var typicalUValues = 
	[{hf: "Water",
	 cf: "Water",
	 low: "800",
	 high: "1500"},
	{hf: "Organic Solvents",
	 cf: "Organic Solvents",
	 low: "100",
	 high: "300"},
	{hf: "Light Oils",
	 cf: "Light oils",
	 low: "100",
	 high: "400"},
	{hf: "Heavy Oils",
	 cf: "Heavy oils",
	 low: "50",
	 high: "300"},
	{hf: "Reduced Crude",
	 cf: "Flashed crude",
	 low: "35",
	 high: "150"},
	{hf: "Regenerated DEA",
	 cf: "Foul DEA",
	 low: "450",
	 high: "650"},
	{hf: "Gases (P = atm)",
	 cf: "Gases (P = atm)",
	 low: "5",
	 high: "35"},
	{hf: "Gases (P = 200 bar)",
	 cf: "Gases (P = 200 bar)",
	 low: "100",
	 high: "300"},
	{hf: "Organic Solvents",
	 cf: "Water",
	 low: "250",
	 high: "750"},
	{hf: "Light Oils",
	 cf: "Water",
	 low: "350",
	 high: "700"},
	{hf: "Heavy Oils",
	 cf: "Water",
	 low: "60",
	 high: "300"},
	{hf: "Reduced Crude",
	 cf: "Water",
	 low: "75",
	 high: "200"},
	{hf: "Gases (P = atm)",
	 cf: "Water",
	 low: "5",
	 high: "35"},
	{hf: "Gases (P = 200 bar)",
	 cf: "Water",
	 low: "150",
	 high: "400"},
	{hf: "Gases",
	 cf: "Water",
	 low: "20",
	 high: "300"},
	{hf: "Organic Solvents",
	 cf: "Brine",
	 low: "150",
	 high: "500"},
	{hf: "Water",
	 cf: "Brine",
	 low: "600",
	 high: "1200"},
	{hf: "Gases",
	 cf: "Brine",
	 low: "15",
	 high: "250"},
	{hf: "Steam",
	 cf: "Water",
	 low: "1500",
	 high: "4000"},
	{hf: "Steam",
	 cf: "Organic Solvents",
	 low: "500",
	 high: "1000"},
	{hf: "Steam",
	 cf: "Light Oils",
	 low: "300",
	 high: "900"},
	{hf: "Steam",
	 cf: "Heavy Oils",
	 low: "60",
	 high: "450"},
	{hf: "Steam",
	 cf: "Gases",
	 low: "30",
	 high: "300"},
	{hf: "Dowtherm",
	 cf: "Heavy Oils",
	 low: "50",
	 high: "300"},
	{hf: "Dowtherm",
	 cf: "Gases",
	 low: "20",
	 high: "200"},
	{hf: "Flue Gases",
	 cf: "Steam",
	 low: "30",
	 high: "100"},
	{hf: "Flue Gases",
	 cf: "Hydrocarbon Vapours",
	 low: "30",
	 high: "100"},
	{hf: "Aqueous Vapours",
	 cf: "Water",
	 low: "1000",
	 high: "1500"},
	{hf: "Organic Vapours",
	 cf: "Water",
	 low: "700",
	 high: "1000"},
	{hf: "Refinery Hydrocarbons",
	 cf: "Water",
	 low: "400",
	 high: "550"},
	{hf: "Organics (some non-condensables)",
	 cf: "Water",
	 low: "500",
	 high: "700"},
	{hf: "Vacuum Condensors",
	 cf: "Water",
	 low: "200",
	 high: "500"},
	{hf: "Steam",
	 cf: "Aqueous Solution",
	 low: "1000",
	 high: "1500"},
	{hf: "Steam",
	 cf: "Light organics",
	 low: "900",
	 high: "1200"},
	{hf: "Steam",
	 cf: "Heavy Organics",
	 low: "600",
	 high: "900"},
	{hf: "Dowtherm",
	 cf: "Refinery Hydrocarbons",
	 low: "250",
	 high: "550"}];

var lengthOptions = 
	["m",
	"cm",
	"mm",
	"ft",
	"in"];

var tempOptions = 
	["K",
	"C",
	"F"];

var densityOptions = 
	["kg/m3",
	"g/L",
	"g/cm3",
	"lb/ft3",
	"lb/in3"];

var viscosityOptions = 
	["kg/ms",
	"P",
	"cP"];

var conductivityOptions = 
	["W/m K",
	"J/s m K",
	"BTU/hr ft F"];

var specificHeatOptions = 
	["J/kg K",
	"KJ/kg K",
	"cal/g C",
	"BTU/lb F"];

var foulingFactorOptions = 
	["m2K / W",
	"s m2C / cal",
	"h m2C / kcal",
	"hr ft2F / BTU"];

var heatTransferCoefficientOptions = 
	["W/m2K",
	"cal/s m2C",
	"kcal/h m2C",
	"BTU/hr ft2F"]

var massFlowOptions = 
	[{
		unit: "kg/s", 
		value:	1.00000000E+00
	},
	{
		unit: "kg/min", 
		value:	1.66666667E-02
	},
	{
		unit: "kg/h", 
		value:	2.77777778E-04
	},
	{
		unit: "kg/day", 
		value:	1.15740741E-05
	},
	{
		unit: "tonne/h", 
		value:	2.77777778E-01
	},
	{
		unit: "tonne/day", 
		value:	1.15740741E-02
	},
	{
		unit: "tonne/yr", 
		value:	3.17097921E-05
	},
	{
		unit: "g/s", 
		value:	1.00000000E-03
	},
	{
		unit: "g/min", 
		value:	1.66666667E-05
	},
	{
		unit: "g/h", 
		value:	2.77777778E-07
	},
	{
		unit: "g/day", 
		value:	1.15740741E-08
	},
	{
		unit: "lb/s", 
		value:	4.53592370E-01
	},
	{
		unit: "lb/min", 
		value:	7.55987283E-03
	},
	{
		unit: "lb/h", 
		value:	1.25997881E-04
	},
	{
		unit: "Mlb/h", 
		value:	1.25997881E-01
	},
	{
		unit: "lb/day", 
		value:	5.24991169E-06
	},
	{
		unit: "M lb/day", 
		value:	5.24991169E-03
	},
	{
		unit: "MM lb/day", 
		value:	5.24991169E+00
	},
	{
		unit: "tn(short)/s", 
		value:	9.07184740E+02
	},
	{
		unit: "tn(short)/min", 
		value:	1.51197457E+01
	},
	{
		unit: "tn(short)/h", 
		value:	2.51995761E-01
	},
	{
		unit: "tn(short)/day", 
		value:	1.04998234E-02
	},
	{
		unit: "tn(long)/s", 
		value:	1.01604691E+03
	},
	{
		unit: "tn(long)/min", 
		value:	1.69341152E+01
	},
	{
		unit: "tn(long)/h", 
		value:	2.82235253E-01
	},
	{
		unit: "tn(long)/day", 
		value:	1.17598022E-02
	}]

var volumeFlowOptions = 
	[{ 
		unit: "m3/sec", 
		value:	1.00000000E+00
	},
	{ 
		unit: "m3/min", 
		value:	1.66700000E-02
	},
	{ 
		unit: "m3/h", 
		value:	2.77800000E-04
	},
	{ 
		unit: "m3/day", 
		value:	1.15700000E-05
	},
	{ 
		unit: "L/sec", 
		value:	1.00000000E-03
	},
	{ 
		unit: "L/min", 
		value:	1.66700000E-05
	},
	{ 
		unit: "L/h", 
		value:	2.77800000E-07
	},
	{ 
		unit: "L/day", 
		value:	1.15700000E-08
	},
	{ 
		unit: "barrel/s", 
		value:	1.58987295E-01
	},
	{ 
		unit: "barrel/min", 
		value:	2.64960000E-03
	},
	{ 
		unit: "barrel/h", 
		value:	4.41600000E-05
	},
	{ 
		unit: "barrel/day", 
		value:	1.84000000E-06
	},
	{ 
		unit: "gallon/s [US]", 
		value:	3.78541200E-03
	},
	{ 
		unit: "gallon/min [US]", 
		value:	6.30900000E-05
	},
	{ 
		unit: "gallon/h [US]", 
		value:	1.05200000E-06
	},
	{ 
		unit: "gallon/day [US]", 
		value:	4.38333333E-08
	},
	{ 
		unit: "MGPD", 
		value:	4.38100000E-05
	},
	{ 
		unit: "MMGPD", 
		value:	4.38100000E-02
	},
	{ 
		unit: "gallon/s [UK]", 
		value:	4.54609000E-03
	},
	{ 
		unit: "gallon/min [UK]", 
		value:	7.57681667E-05
	},
	{ 
		unit: "gallon/h [UK]", 
		value:	1.26280278E-06
	},
	{ 
		unit: "gallon/day [UK]", 
		value:	5.26167824E-08
	}]

var gaugeOptions = 
	["BWG",
	"SWG",
	"AWG"];

var gaugeRangeOptions = 
	["(7/0)",
	"(6/0)",
	"(5/0)",
	"(4/0)",
	"(3/0)",
	"(2/0)",
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"10",
	"11",
	"12",
	"13",
	"14",
	"15",
	"16",
	"17",
	"18",
	"19",
	"20",
	"21",
	"22",
	"23",
	"24",
	"25",
	"26",
	"27",
	"28",
	"29",
	"30",
	"31",
	"32",
	"33",
	"34",
	"35",
	"36",
	"37",
	"38",
	"39",
	"40",
	"41",
	"42",
	"43",
	"44",
	"45",
	"46",
	"47",
	"48",
	"49",
	"50"];

var BWGValues = 
	[{	key: "(5/0)",
		value: 0.0127,
	},
	{	key: "(4/0)",
		value: 0.0115316,
	},
	{	key: "(3/0)",
		value: 0.010795,
	},
	{	key: "(2/0)",
		value: 0.009652,
	},
	{	key: "0",
		value: 0.008636,
	},
	{	key: "1",
		value: 0.00762,
	},
	{	key: "2",
		value: 0.0072136,
	},
	{	key: "3",
		value: 0.0065786,
	},
	{	key: "4",
		value: 0.0060452,
	},
	{	key: "5",
		value: 0.005588,
	},
	{	key: "6",
		value: 0.0051562,
	},
	{	key: "7",
		value: 0.004572,
	},
	{	key: "8",
		value: 0.004191,
	},
	{	key: "9",
		value: 0.0037592,
	},
	{	key: "10",
		value: 0.0034036,
	},
	{	key: "11",
		value: 0.003048,
	},
	{	key: "12",
		value: 0.0027686,
	},
	{	key: "13",
		value: 0.002413,
	},
	{	key: "14",
		value: 0.0021082,
	},
	{	key: "15",
		value: 0.0018288,
	},
	{	key: "16",
		value: 0.001651,
	},
	{	key: "17",
		value: 0.0014732,
	},
	{	key: "18",
		value: 0.0012446,
	},
	{	key: "19",
		value: 0.0010668,
	},
	{	key: "20",
		value: 0.000889,
	},
	{	key: "21",
		value: 0.0008128,
	},
	{	key: "22",
		value: 0.0007112,
	},
	{	key: "23",
		value: 0.000635,
	},
	{	key: "24",
		value: 0.0005588,
	},
	{	key: "25",
		value: 0.000508,
	},
	{	key: "26",
		value: 0.0004572,
	},
	{	key: "27",
		value: 0.0004064,
	},
	{	key: "28",
		value: 0.0003556,
	},
	{	key: "29",
		value: 0.0003302,
	},
	{	key: "30",
		value: 0.0003048,
	},
	{	key: "31",
		value: 0.000254,
	},
	{	key: "32",
		value: 0.0002286,
	},
	{	key: "33",
		value: 0.0002032,
	},
	{	key: "34",
		value: 0.0001778,
	},
	{	key: "35",
		value: 0.000127,
	},
	{	key: "36",
		value: 0.0001016,
	}];

var SWGValues = 
	[{
		key: "(7/0)", 
		value: 0.0127, 
	},
	{
		key: "(6/0)", 
		value: 0.0117856, 
	},
	{
		key: "(5/0)", 
		value: 0.0109728, 
	},
	{
		key: "(4/0)", 
		value: 0.01016, 
	},
	{
		key: "(3/0)", 
		value: 0.0094488, 
	},
	{
		key: "(2/0)", 
		value: 0.0088392, 
	},
	{
		key: "0", 
		value: 0.0082296, 
	},
	{
		key: "1", 
		value: 0.00762, 
	},
	{
		key: "2", 
		value: 0.0070104, 
	},
	{
		key: "3", 
		value: 0.0064008, 
	},
	{
		key: "4", 
		value: 0.0058928, 
	},
	{
		key: "5", 
		value: 0.0053848, 
	},
	{
		key: "6", 
		value: 0.0048768, 
	},
	{
		key: "7", 
		value: 0.0044704, 
	},
	{
		key: "8", 
		value: 0.004064, 
	},
	{
		key: "9", 
		value: 0.0036576, 
	},
	{
		key: "10", 
		value: 0.0032512, 
	},
	{
		key: "11", 
		value: 0.0029464, 
	},
	{
		key: "12", 
		value: 0.0026416, 
	},
	{
		key: "13", 
		value: 0.0023368, 
	},
	{
		key: "14", 
		value: 0.002032, 
	},
	{
		key: "15", 
		value: 0.0018288, 
	},
	{
		key: "16", 
		value: 0.0016256, 
	},
	{
		key: "17", 
		value: 0.0014224, 
	},
	{
		key: "18", 
		value: 0.0012192, 
	},
	{
		key: "19", 
		value: 0.001016, 
	},
	{
		key: "20", 
		value: 0.0009144, 
	},
	{
		key: "21", 
		value: 0.0008128, 
	},
	{
		key: "22", 
		value: 0.0007112, 
	},
	{
		key: "23", 
		value: 0.0006096, 
	},
	{
		key: "24", 
		value: 0.0005588, 
	},
	{
		key: "25", 
		value: 0.000508, 
	},
	{
		key: "26", 
		value: 0.0004572, 
	},
	{
		key: "27", 
		value: 0.00041656, 
	},
	{
		key: "28", 
		value: 0.00037592, 
	},
	{
		key: "29", 
		value: 0.00034544, 
	},
	{
		key: "30", 
		value: 0.00031496, 
	},
	{
		key: "31", 
		value: 0.00029464, 
	},
	{
		key: "32", 
		value: 0.00027432, 
	},
	{
		key: "33", 
		value: 0.000254, 
	},
	{
		key: "34", 
		value: 0.00023368, 
	},
	{
		key: "35", 
		value: 0.00021336, 
	},
	{
		key: "36", 
		value: 0.00019304, 
	},
	{
		key: "37", 
		value: 0.00017272, 
	},
	{
		key: "38", 
		value: 0.0001524, 
	},
	{
		key: "39", 
		value: 0.00013208, 
	},
	{
		key: "40", 
		value: 0.00012192, 
	},
	{
		key: "41", 
		value: 0.00011176, 
	},
	{
		key: "42", 
		value: 0.0001016, 
	},
	{
		key: "43", 
		value: 0.00009144, 
	},
	{
		key: "44", 
		value: 0.00008128, 
	},
	{
		key: "45", 
		value: 0.00007112, 
	},
	{
		key: "46", 
		value: 0.00006096, 
	},
	{
		key: "47", 
		value: 0.0000508, 
	},
	{
		key: "48", 
		value: 0.00004064, 
	},
	{
		key: "49", 
		value: 0.00003048, 
	},
	{
		key: "50", 
		value: 0.0000254, 
	}];

var AWGValues = 
	[{
		key: "(4/0)",
		value: 0.011684, 
	},
	{
		key: "(3/0)",
		value: 0.01040384, 
	},
	{
		key: "(2/0)",
		value: 0.00926592, 
	},
	{
		key: "0",
		value: 0.00825246, 
	},
	{
		key: "1",
		value: 0.00734822, 
	},
	{
		key: "2",
		value: 0.00654304, 
	},
	{
		key: "3",
		value: 0.00582676, 
	},
	{
		key: "4",
		value: 0.00518922, 
	},
	{
		key: "5",
		value: 0.00462026, 
	},
	{
		key: "6",
		value: 0.0041148, 
	},
	{
		key: "7",
		value: 0.00366522, 
	},
	{
		key: "8",
		value: 0.0032639, 
	},
	{
		key: "9",
		value: 0.00290576, 
	},
	{
		key: "10",
		value: 0.00258826, 
	},
	{
		key: "11",
		value: 0.00230378, 
	},
	{
		key: "12",
		value: 0.00205232, 
	},
	{
		key: "13",
		value: 0.0018288, 
	},
	{
		key: "14",
		value: 0.00162814, 
	},
	{
		key: "15",
		value: 0.00145034, 
	},
	{
		key: "16",
		value: 0.00129032, 
	},
	{
		key: "17",
		value: 0.00115062, 
	},
	{
		key: "18",
		value: 0.00102362, 
	},
	{
		key: "19",
		value: 0.00091186, 
	},
	{
		key: "20",
		value: 0.0008128, 
	},
	{
		key: "21",
		value: 0.0007239, 
	},
	{
		key: "22",
		value: 0.00064262, 
	},
	{
		key: "23",
		value: 0.00057404, 
	},
	{
		key: "24",
		value: 0.00051054, 
	},
	{
		key: "25",
		value: 0.00045466, 
	},
	{
		key: "26",
		value: 0.00040386, 
	},
	{
		key: "27",
		value: 0.00036068, 
	},
	{
		key: "28",
		value: 0.00032004, 
	},
	{
		key: "29",
		value: 0.00028702, 
	},
	{
		key: "30",
		value: 0.000254, 
	},
	{
		key: "31",
		value: 0.000226822, 
	},
	{
		key: "32",
		value: 0.00020193, 
	},
	{
		key: "33",
		value: 0.000179832, 
	},
	{
		key: "34",
		value: 0.00016002, 
	},
	{
		key: "35",
		value: 0.000142494, 
	},
	{
		key: "36",
		value: 0.000127, 
	},
	{
		key: "37",
		value: 0.00011303, 
	},
	{
		key: "38",
		value: 0.000100838, 
	},
	{
		key: "39",
		value: 0.000089662, 
	},
	{
		key: "40",
		value: 0.000079756, 
	}];

var passesOptions = 
	["1",
	"2",
	"4",
	"6",
	"8",
	"10",]
	
angular.module('hxApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });