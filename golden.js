const {Num} = require("decimalsystem");

if(!window.bundle) window.bundle = {};

window.bundle.golden = () => {
    $(() => {
        window.geo = Desmos.Geometry(document.getElementById("geometry"));

        window.geo.setState(state);

        const goldenConst = (1 + Math.sqrt(5)) / 2;

        setInterval(() => {
            const newState = window.geo.getState();

            //This gets the side that is a multiple of the golden ratio.
            const golden = Math.hypot(Math.abs(newState.objects["62"].x - newState.objects["63"].x), Math.abs(newState.objects["62"].y - newState.objects["63"].y)) / 1.2356979405;
            //This gets the side that is one when golden is the golden ratio.
            const one = golden / goldenConst;
            //This gets the side that is the one multiple - the multiple of the golden ratio.
            const oneminus = golden - one;
            //This gets the diagonal between a square made by the multiple of the golden ratio.
            const diagonal = Math.sqrt(2 * Math.pow(golden, 2));

            //This needs to be cleaned up a bit into a helper method.
            newState.objects["165"].label = new Num(oneminus).toBase(goldenConst).toString(3);
            newState.objects["200"].label = new Num(oneminus).toBase(goldenConst).toString(3);
            newState.objects["275"].label = new Num(golden).toBase(goldenConst).toString(3);
            newState.objects["200"].label = new Num(oneminus).toBase(goldenConst).toString(3);
            newState.objects["384"].label = new Num(diagonal).toBase(goldenConst).toString(3);
            newState.objects["122"].label = new Num(one).toBase(goldenConst).toString(3);
            newState.objects["115"].label = new Num(one).toBase(goldenConst).toString(3);

            window.geo.setState(newState);
        }, 100);
    });
}

const state = {
    "version": "4",
    "objects": {
        "61": {
            "id": "61",
            "type": "segment",
            "hidden": true,
            "parents": {
                "point1": "62",
                "point2": "63"
            },
            "color": "#2d70b3"
        },
        "62": {
            "hidden": false,
            "type": "point",
            "x": -1.6238823454714244,
            "y": 1.0454797368786466,
            "parents": {},
            "id": "62",
            "color": "#6042a6",
            "label": "A",
            "showLabel": true
        },
        "63": {
            "hidden": true,
            "type": "point",
            "id": "63",
            "parents": {},
            "x": 2.379641362712296,
            "y": 1.0172481379851026,
            "color": "#6042a6",
            "label": "C",
            "showLabel": true
        },
        "66": {
            "id": "66",
            "type": "circle",
            "hidden": true,
            "parents": {
                "point1": "63",
                "point2": "68"
            },
            "color": "#388c46"
        },
        "68": {
            "hidden": true,
            "type": "glider",
            "t": 0.2930398517019122,
            "parents": {
                "host": "61"
            },
            "id": "68",
            "color": "#6042a6",
            "label": "D",
            "showLabel": true
        },
        "69": {
            "id": "69",
            "type": "circle",
            "hidden": true,
            "parents": {
                "point1": "62",
                "point2": "71"
            },
            "color": "#388c46"
        },
        "71": {
            "hidden": true,
            "type": "glider",
            "t": 0.7069827185524342,
            "parents": {
                "host": "61"
            },
            "id": "71",
            "color": "#6042a6"
        },
        "74": {
            "id": "74",
            "type": "segment",
            "hidden": true,
            "parents": {
                "point1": "62",
                "point2": "76"
            },
            "color": "#2d70b3"
        },
        "76": {
            "hidden": false,
            "type": "intersection",
            "negRoot": true,
            "parents": {
                "host1": "69",
                "host2": "66"
            },
            "id": "76",
            "color": "#6042a6"
        },
        "79": {
            "id": "79",
            "type": "midpoint",
            "hidden": false,
            "parents": {
                "straight": "61"
            },
            "color": "#6042a6",
            "label": "B",
            "showLabel": true
        },
        "81": {
            "id": "81",
            "type": "segment",
            "hidden": false,
            "parents": {
                "point1": "76",
                "point2": "79"
            },
            "color": "#2d70b3"
        },
        "86": {
            "type": "segment",
            "id": "86",
            "hidden": true,
            "parents": {
                "point1": "79",
                "point2": "62"
            },
            "color": "#2d70b3"
        },
        "89": {
            "id": "89",
            "type": "polygon",
            "hidden": true,
            "parents": {
                "points": [
                    "79",
                    "62",
                    "76"
                ]
            },
            "color": "#2d70b3"
        },
        "100": {
            "id": "100",
            "type": "angle",
            "hidden": true,
            "showLabel": true,
            "label": "{angle}",
            "parents": {
                "point1": "76",
                "point2": "79",
                "point3": "62"
            },
            "color": "#000000"
        },
        "104": {
            "id": "104",
            "type": "angle",
            "hidden": true,
            "showLabel": true,
            "label": "{angle}",
            "parents": {
                "point1": "76",
                "point2": "62",
                "point3": "79"
            },
            "color": "#000000"
        },
        "110": {
            "id": "110",
            "type": "perpendicular",
            "hidden": true,
            "parents": {
                "straight": "81",
                "point": "76"
            },
            "color": "#2d70b3"
        },
        "112": {
            "id": "112",
            "type": "perpendicular",
            "hidden": true,
            "parents": {
                "straight": "86",
                "point": "62"
            },
            "color": "#2d70b3"
        },
        "115": {
            "type": "segment",
            "id": "115",
            "hidden": false,
            "parents": {
                "point1": "119",
                "point2": "62"
            },
            "color": "#2d70b3",
            "label": "{length}",
            "showLabel": true
        },
        "118": {
            "id": "118",
            "type": "polygon",
            "hidden": true,
            "parents": {
                "points": [
                    "119",
                    "62",
                    "79",
                    "76"
                ]
            },
            "color": "#2d70b3"
        },
        "119": {
            "hidden": false,
            "type": "intersection",
            "negRoot": false,
            "parents": {
                "host1": "112",
                "host2": "110"
            },
            "id": "119",
            "color": "#6042a6"
        },
        "122": {
            "type": "segment",
            "id": "122",
            "hidden": false,
            "parents": {
                "point1": "76",
                "point2": "119"
            },
            "color": "#2d70b3",
            "label": "{length}",
            "showLabel": true
        },
        "147": {
            "id": "147",
            "type": "midpoint",
            "hidden": true,
            "parents": {
                "straight": "86"
            },
            "color": "#6042a6"
        },
        "151": {
            "id": "151",
            "type": "circle",
            "hidden": true,
            "parents": {
                "point1": "147",
                "point2": "76"
            },
            "color": "#388c46"
        },
        "156": {
            "id": "156",
            "type": "perpendicular",
            "hidden": true,
            "parents": {
                "straight": "61",
                "point": "157"
            },
            "color": "#2d70b3"
        },
        "157": {
            "hidden": false,
            "type": "intersection",
            "negRoot": false,
            "parents": {
                "host1": "61",
                "host2": "151"
            },
            "id": "157",
            "color": "#6042a6"
        },
        "158": {
            "id": "158",
            "type": "perpendicular",
            "hidden": true,
            "parents": {
                "straight": "156",
                "point": "76"
            },
            "color": "#2d70b3"
        },
        "165": {
            "id": "165",
            "type": "segment",
            "hidden": false,
            "parents": {
                "point1": "76",
                "point2": "167"
            },
            "color": "#2d70b3",
            "label": "{length}",
            "showLabel": true
        },
        "167": {
            "hidden": false,
            "type": "intersection",
            "negRoot": false,
            "parents": {
                "host1": "158",
                "host2": "156"
            },
            "id": "167",
            "color": "#6042a6"
        },
        "170": {
            "id": "170",
            "type": "circle",
            "hidden": true,
            "parents": {
                "point1": "167",
                "point2": "76"
            },
            "color": "#388c46"
        },
        "184": {
            "hidden": false,
            "type": "intersection",
            "negRoot": false,
            "parents": {
                "host1": "156",
                "host2": "170"
            },
            "id": "184",
            "color": "#6042a6"
        },
        "191": {
            "id": "191",
            "type": "circle",
            "hidden": true,
            "parents": {
                "point1": "76",
                "point2": "167"
            },
            "color": "#388c46"
        },
        "196": {
            "hidden": false,
            "type": "intersection",
            "negRoot": false,
            "parents": {
                "host1": "81",
                "host2": "191"
            },
            "id": "196",
            "color": "#6042a6"
        },
        "198": {
            "type": "segment",
            "id": "198",
            "hidden": false,
            "parents": {
                "point1": "76",
                "point2": "196"
            },
            "color": "#2d70b3"
        },
        "199": {
            "type": "segment",
            "id": "199",
            "hidden": false,
            "parents": {
                "point1": "196",
                "point2": "184"
            },
            "color": "#2d70b3"
        },
        "200": {
            "type": "segment",
            "id": "200",
            "hidden": false,
            "parents": {
                "point1": "184",
                "point2": "167"
            },
            "color": "#2d70b3",
            "label": "{length}",
            "showLabel": true
        },
        "201": {
            "id": "201",
            "type": "polygon",
            "hidden": true,
            "parents": {
                "points": [
                    "76",
                    "196",
                    "184",
                    "167"
                ]
            },
            "color": "#2d70b3"
        },
        "214": {
            "id": "214",
            "type": "segment",
            "hidden": true,
            "parents": {
                "point1": "76",
                "point2": "184"
            },
            "color": "#2d70b3",
            "label": "{length}",
            "showLabel": true
        },
        "220": {
            "type": "segment",
            "id": "220",
            "hidden": false,
            "parents": {
                "point1": "79",
                "point2": "157"
            },
            "color": "#2d70b3"
        },
        "221": {
            "type": "segment",
            "id": "221",
            "hidden": false,
            "parents": {
                "point1": "157",
                "point2": "167"
            },
            "color": "#2d70b3"
        },
        "222": {
            "id": "222",
            "type": "polygon",
            "hidden": true,
            "parents": {
                "points": [
                    "76",
                    "79",
                    "157",
                    "167"
                ]
            },
            "color": "#2d70b3"
        },
        "247": {
            "id": "247",
            "type": "angle",
            "hidden": true,
            "showLabel": true,
            "label": "{angle}",
            "parents": {
                "point1": "62",
                "point2": "76",
                "point3": "79"
            },
            "color": "#000000"
        },
        "251": {
            "id": "251",
            "type": "angle",
            "hidden": true,
            "showLabel": true,
            "label": "{angle}",
            "parents": {
                "point1": "76",
                "point2": "196",
                "point3": "184"
            },
            "color": "#000000"
        },
        "255": {
            "id": "255",
            "type": "angle",
            "hidden": true,
            "showLabel": true,
            "label": "{angle}",
            "parents": {
                "point1": "76",
                "point2": "184",
                "point3": "196"
            },
            "color": "#000000"
        },
        "259": {
            "id": "259",
            "type": "angle",
            "hidden": true,
            "showLabel": true,
            "label": "{angle}",
            "parents": {
                "point1": "196",
                "point2": "76",
                "point3": "184"
            },
            "color": "#000000"
        },
        "265": {
            "id": "265",
            "type": "segment",
            "hidden": false,
            "parents": {
                "point1": "184",
                "point2": "157"
            },
            "color": "#2d70b3"
        },
        "270": {
            "id": "270",
            "type": "segment",
            "hidden": false,
            "parents": {
                "point1": "184",
                "point2": "167"
            },
            "color": "#2d70b3"
        },
        "275": {
            "id": "275",
            "type": "segment",
            "hidden": false,
            "parents": {
                "point1": "62",
                "point2": "157"
            },
            "color": "#2d70b3",
            "label": "{length}",
            "showLabel": true
        },
        "282": {
            "hidden": true,
            "type": "point",
            "x": -3.9631517052136425,
            "y": 1.7816542532340263,
            "parents": {},
            "id": "282",
            "color": "#6042a6"
        },
        "288": {
            "hidden": true,
            "type": "point",
            "x": 0.14112112896903106,
            "y": 2.052136417091337,
            "parents": {},
            "id": "288",
            "color": "#6042a6"
        },
        "296": {
            "id": "296",
            "type": "midpoint",
            "hidden": false,
            "parents": {
                "straight": "165"
            },
            "color": "#6042a6"
        },
        "348": {
            "id": "348",
            "type": "circle",
            "hidden": true,
            "parents": {
                "point1": "62",
                "point2": "157"
            },
            "color": "#388c46"
        },
        "358": {
            "id": "358",
            "type": "line",
            "hidden": true,
            "parents": {
                "point1": "62",
                "point2": "119"
            },
            "color": "#2d70b3"
        },
        "363": {
            "id": "363",
            "type": "perpendicular",
            "hidden": true,
            "parents": {
                "straight": "358",
                "point": "364"
            },
            "color": "#2d70b3"
        },
        "364": {
            "hidden": false,
            "type": "intersection",
            "negRoot": true,
            "parents": {
                "host1": "358",
                "host2": "348"
            },
            "id": "364",
            "color": "#6042a6"
        },
        "365": {
            "id": "365",
            "type": "perpendicular",
            "hidden": true,
            "parents": {
                "straight": "363",
                "point": "157"
            },
            "color": "#2d70b3"
        },
        "368": {
            "type": "segment",
            "id": "368",
            "hidden": false,
            "parents": {
                "point1": "62",
                "point2": "364"
            },
            "color": "#2d70b3"
        },
        "369": {
            "type": "segment",
            "id": "369",
            "hidden": false,
            "parents": {
                "point1": "364",
                "point2": "374"
            },
            "color": "#2d70b3"
        },
        "370": {
            "type": "segment",
            "id": "370",
            "hidden": false,
            "parents": {
                "point1": "374",
                "point2": "157"
            },
            "color": "#2d70b3"
        },
        "371": {
            "id": "371",
            "type": "polygon",
            "hidden": false,
            "parents": {
                "points": [
                    "62",
                    "364",
                    "374",
                    "157"
                ]
            },
            "color": "#2d70b3"
        },
        "374": {
            "hidden": false,
            "type": "intersection",
            "negRoot": false,
            "parents": {
                "host1": "365",
                "host2": "363"
            },
            "id": "374",
            "color": "#6042a6"
        },
        "384": {
            "id": "384",
            "type": "segment",
            "hidden": false,
            "parents": {
                "point1": "364",
                "point2": "157"
            },
            "color": "#2d70b3",
            "label": "{length}",
            "showLabel": true
        },
        "389": {
            "id": "389",
            "type": "angle",
            "hidden": false,
            "showLabel": true,
            "label": "{angle}",
            "parents": {
                "point1": "157",
                "point2": "62",
                "point3": "364"
            },
            "color": "#000000"
        },
        "393": {
            "id": "393",
            "type": "angle",
            "hidden": false,
            "showLabel": true,
            "label": "{angle}",
            "parents": {
                "point1": "62",
                "point2": "364",
                "point3": "157"
            },
            "color": "#000000"
        },
        "403": {
            "id": "403",
            "type": "angle",
            "hidden": false,
            "showLabel": true,
            "label": "{angle}",
            "parents": {
                "point1": "62",
                "point2": "157",
                "point3": "364"
            },
            "color": "#000000"
        },
        "407": {
            "id": "407",
            "type": "angle",
            "hidden": false,
            "showLabel": true,
            "label": "{angle}",
            "parents": {
                "point1": "364",
                "point2": "374",
                "point3": "157"
            },
            "color": "#000000"
        },
        "416": {
            "id": "416",
            "type": "angle",
            "hidden": false,
            "showLabel": true,
            "label": "{angle}",
            "parents": {
                "point1": "374",
                "point2": "157",
                "point3": "364"
            },
            "color": "#000000"
        },
        "420": {
            "id": "420",
            "type": "angle",
            "hidden": false,
            "showLabel": true,
            "label": "{angle}",
            "parents": {
                "point1": "157",
                "point2": "364",
                "point3": "374"
            },
            "color": "#000000"
        },
        "426": {
            "id": "426",
            "type": "segment",
            "hidden": true,
            "parents": {
                "point1": "62",
                "point2": "63"
            },
            "color": "#2d70b3",
            "label": "{length}",
            "showLabel": true
        }
    },
    "viewport": {
        "centerX": 0,
        "centerY": 0,
        "size": 15
    },
    "customTools": {},
    "graphSettings": {
        "showGrid": false,
        "showAxes": false,
        "showAxisNumbers": false
    }
};