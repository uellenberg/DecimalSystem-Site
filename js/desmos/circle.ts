import {updateDesmosLabels} from "./util";

const {Num} = require("decimalsystem");

declare var Desmos: any;

$(() => {
    window.geo = Desmos.Geometry(document.getElementById("geometry"));

    window.geo.setState(state);

    setInterval(() => {
        const newState = window.geo.getState();

        //The radius is calculated from two points of the circle, and the diameter and circumference are calculated from it.
        const radius = Math.hypot(Math.abs(newState.objects["1"].x - newState.objects["2"].x), Math.abs(newState.objects["1"].y - newState.objects["2"].y));
        const diameter = radius * 2;
        const circumference = diameter * Math.PI;

        //The circumference and diameter's base PI length is put on their labels.
        updateDesmosLabels(["2"], new Num(circumference).toBase(Math.PI).toString(3), newState);
        updateDesmosLabels(["29"], new Num(diameter).toBase(Math.PI).toString(4), newState);

        window.geo.setState(newState);
    }, 100);
});

const state = {
    "version": "4",
    "objects": {
        "0": {
            "id": "0",
            "type": "circle",
            "hidden": false,
            "parents": {
                "point1": "1",
                "point2": "2"
            },
            "color": "#388c46"
        },
        "1": {
            "hidden": false,
            "type": "point",
            "x": 0.04100606379758487,
            "y": -0.0779060802801137,
            "parents": {},
            "id": "1",
            "color": "#6042a6"
        },
        "2": {
            "hidden": false,
            "type": "point",
            "x": 3.1222531198415155,
            "y": -0.06374801885928516,
            "parents": {},
            "id": "2",
            "color": "#6042a6",
            "label": "A",
            "showLabel": true
        },
        "3": {
            "id": "3",
            "type": "circle",
            "hidden": true,
            "parents": {
                "point1": "2",
                "point2": "1"
            },
            "color": "#388c46"
        },
        "6": {
            "id": "6",
            "type": "circle",
            "hidden": true,
            "parents": {
                "point1": "7",
                "point2": "1"
            },
            "color": "#388c46"
        },
        "7": {
            "hidden": true,
            "type": "intersection",
            "negRoot": false,
            "parents": {
                "host1": "3",
                "host2": "0"
            },
            "id": "7",
            "color": "#6042a6"
        },
        "9": {
            "id": "9",
            "type": "circle",
            "hidden": true,
            "parents": {
                "point1": "10",
                "point2": "1"
            },
            "color": "#388c46"
        },
        "10": {
            "hidden": true,
            "type": "intersection",
            "negRoot": false,
            "parents": {
                "host1": "6",
                "host2": "0"
            },
            "id": "10",
            "color": "#6042a6"
        },
        "12": {
            "id": "12",
            "type": "circle",
            "hidden": true,
            "parents": {
                "point1": "13",
                "point2": "1"
            },
            "color": "#388c46"
        },
        "13": {
            "hidden": true,
            "type": "intersection",
            "negRoot": false,
            "parents": {
                "host1": "9",
                "host2": "0"
            },
            "id": "13",
            "color": "#6042a6"
        },
        "17": {
            "id": "17",
            "type": "circle",
            "hidden": true,
            "parents": {
                "point1": "18",
                "point2": "1"
            },
            "color": "#388c46"
        },
        "18": {
            "hidden": true,
            "type": "intersection",
            "negRoot": false,
            "parents": {
                "host1": "12",
                "host2": "0"
            },
            "id": "18",
            "color": "#6042a6"
        },
        "20": {
            "id": "20",
            "type": "circle",
            "hidden": true,
            "parents": {
                "point1": "21",
                "point2": "1"
            },
            "color": "#388c46"
        },
        "21": {
            "hidden": true,
            "type": "intersection",
            "negRoot": true,
            "parents": {
                "host1": "3",
                "host2": "17"
            },
            "id": "21",
            "color": "#6042a6"
        },
        "29": {
            "id": "29",
            "type": "segment",
            "hidden": false,
            "parents": {
                "point1": "18",
                "point2": "7"
            },
            "color": "#2d70b3",
            "label": "A",
            "showLabel": true
        },
        "32": {
            "id": "32",
            "type": "segment",
            "hidden": false,
            "parents": {
                "point1": "1",
                "point2": "2"
            },
            "color": "#2d70b3",
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