import Light from "./Light.jsx";
import React, { useState, useEffect } from "react";
import mqtt from "mqtt";

const lightDurations = [20, 30, 6];
var listenerAdded = false;
const client = mqtt.connect('mqtt://192.168.122.75:8083');
// client.setMaxListeners(3);
client.subscribe('people', {qos: 1});

function pubTrafficLight(index){    
    var light = "red";
    if (index === 0) {
        light = "red";
    } else if (index === 1) {
        light = "green";
    } else {
        light = "yellow";
    }
    client.publish('traffic-lights', light, {qos: 1, retain: false});
    console.log('traffic light changing to ' + light + ', index: ' + index);
}

pubTrafficLight(0);

const TrafficLight = ({ initialValue }) => {
    const [colorIndex, setColorIndex] = useState(initialValue);
    const [seconds, setSeconds] = useState(lightDurations[initialValue]);
    const [waiting, setWaiting] = useState(false);

    const update_mqtt = () => {
        if(!listenerAdded){
            var msg;    
            listenerAdded = true;
            client.on('message', function (topic, message) {
                msg = message.toString();
                if (msg === "waiting" && !waiting) {
                    console.log("People waiting...");
                    setWaiting(true);
                }
                // client.end();            
            });
        }
    }

    
    useEffect(() => {
        update_mqtt();

        const timer = setInterval(() => {

            if (seconds > 10) {
                if (waiting && colorIndex === 1) {
                    var num = seconds;
                    if (num % 2 !== 0) {
                        num = num - 1
                    }
                    setSeconds(num / 2);
                    setWaiting(false);
                    console.log(seconds);
                } else {
                    setSeconds(seconds - 1);
                    console.log(seconds);
                }
            }
            if (seconds > 0 && seconds <= 10) {
                setSeconds(seconds - 1);
                console.log(seconds);
            }
            if (seconds === 0) {
                setWaiting(false);
                pubTrafficLight((colorIndex + 1) % 3);
                setSeconds(lightDurations[(colorIndex + 1) % 3]);
                setColorIndex((colorIndex + 1) % 3);
                clearInterval(timer);
            }
        }, 1000);

        return () => {            
            clearInterval(timer);
        };
    });

    return (
        <div className="traffic-light">
            <Light color="#f00" active={colorIndex === 0} />
            <Light color="#ff0" active={colorIndex === 2} />
            <Light color="#0c0" active={colorIndex === 1} />
        </div>
    );
};

export default TrafficLight;
