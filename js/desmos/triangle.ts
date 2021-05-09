import {updateDesmosLabels} from "./util";
import {isBrowser} from "../util";

const {Num} = require("decimalsystem");

declare var Desmos: any;

if(isBrowser()){
    const cos45 = Math.cos(45 * Math.PI/180);
    const sin45 = Math.sin(45 * Math.PI/180);

    $(() => {
        window.geo = Desmos.Geometry(document.getElementById("geometry"), {sidebarCollapsed: true});

        window.geo.setState(state);

        setInterval(() => {
            const newState = window.geo.getState();

            //The first leg of the triangle is based on two points, the distance of is calculated below.
            //The rest just use trig based on that leg and a 45 degree angle.
            const l1 = Math.hypot(Math.abs(newState.objects["923"].x - newState.objects["924"].x), Math.abs(newState.objects["923"].y - newState.objects["924"].y)) / 2;
            const h = l1/cos45;
            const l2 = sin45*h;

            //The numbers are converted to base SQRT2 and put in their respective labels.
            updateDesmosLabels(["948"], new Num(l1).toBase(Math.SQRT2).toNumber(0).toLocaleString(), newState);
            updateDesmosLabels(["949"], new Num(l2).toBase(Math.SQRT2).toNumber(0).toLocaleString(), newState);
            updateDesmosLabels(["940"], new Num(h).toBase(Math.SQRT2).toNumber(0).toLocaleString(), newState);

            window.geo.setState(newState);
        }, 100);
    });
}

const state = {
    "version": "4",
    "objects": {
        "922": {
            "id": "922",
            "type": "segment",
            "hidden": true,
            "parents": {
                "point1": "923",
                "point2": "924"
            },
            "color": "#2d70b3"
        },
        "923": {
            "hidden": false,
            "type": "point",
            "x": -4.464597902097905,
            "y": 0.019667832167829857,
            "parents": {},
            "id": "923",
            "color": "#6042a6",
            "label": "B",
            "showLabel": true
        },
        "924": {
            "hidden": true,
            "type": "point",
            "x": 1.7373251748251732,
            "y": -0.05900349650349934,
            "parents": {},
            "id": "924",
            "color": "#6042a6",
            "label": "A",
            "showLabel": true
        },
        "927": {
            "id": "927",
            "type": "circle",
            "hidden": true,
            "parents": {
                "point1": "923",
                "point2": "929"
            },
            "color": "#388c46"
        },
        "929": {
            "hidden": true,
            "type": "glider",
            "t": 0.7039013115156058,
            "parents": {
                "host": "922"
            },
            "id": "929",
            "color": "#6042a6"
        },
        "932": {
            "id": "932",
            "type": "segment",
            "hidden": true,
            "parents": {
                "point1": "923",
                "point2": "929"
            },
            "color": "#2d70b3"
        },
        "937": {
            "id": "937",
            "type": "compass",
            "hidden": true,
            "parents": {
                "straight": "932",
                "center": "924"
            },
            "color": "#388c46"
        },
        "940": {
            "id": "940",
            "type": "segment",
            "hidden": false,
            "parents": {
                "point1": "923",
                "point2": "942"
            },
            "color": "#2d70b3",
            "label": "H",
            "showLabel": true
        },
        "942": {
            "hidden": false,
            "type": "intersection",
            "negRoot": false,
            "parents": {
                "host1": "937",
                "host2": "927"
            },
            "id": "942",
            "color": "#6042a6"
        },
        "945": {
            "id": "945",
            "type": "perpendicular",
            "hidden": true,
            "parents": {
                "straight": "932",
                "point": "942"
            },
            "color": "#2d70b3"
        },
        "948": {
            "type": "segment",
            "id": "948",
            "hidden": false,
            "parents": {
                "point1": "923",
                "point2": "953"
            },
            "color": "#2d70b3",
            "label": "L1",
            "showLabel": true
        },
        "949": {
            "type": "segment",
            "id": "949",
            "hidden": false,
            "parents": {
                "point1": "953",
                "point2": "942"
            },
            "color": "#2d70b3",
            "label": "L2",
            "showLabel": true
        },
        "951": {
            "id": "951",
            "type": "polygon",
            "hidden": false,
            "parents": {
                "points": [
                    "923",
                    "953",
                    "942"
                ]
            },
            "color": "#2d70b3"
        },
        "953": {
            "hidden": false,
            "type": "intersection",
            "negRoot": false,
            "parents": {
                "host1": "945",
                "host2": "932"
            },
            "id": "953",
            "color": "#6042a6"
        },
        "962": {
            "id": "962",
            "type": "segment",
            "hidden": false,
            "parents": {
                "point1": "953",
                "point2": "942"
            },
            "color": "#2d70b3"
        },
        "967": {
            "id": "967",
            "type": "angle",
            "hidden": false,
            "showLabel": true,
            "label": "{angle}",
            "parents": {
                "point1": "942",
                "point2": "953",
                "point3": "923"
            },
            "color": "#000000"
        },
        "971": {
            "id": "971",
            "type": "angle",
            "hidden": false,
            "showLabel": true,
            "label": "{angle}",
            "parents": {
                "point1": "942",
                "point2": "923",
                "point3": "953"
            },
            "color": "#000000"
        },
        "975": {
            "id": "975",
            "type": "angle",
            "hidden": false,
            "showLabel": true,
            "label": "{angle}",
            "parents": {
                "point1": "923",
                "point2": "942",
                "point3": "953"
            },
            "color": "#000000"
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