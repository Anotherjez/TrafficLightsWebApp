import React, { useState, useEffect, Fragment } from "react";
import mqtt from "mqtt";

const Message = () => {

    useEffect(() => {
        var note;
        const client = mqtt.connect('mqtt://192.168.122.75:8083');
        client.subscribe('people');
        const update_mqtt = () => {
            client.on('message', function (topic, message) {
                note = message.toString();
                setMesg(note);
                console.log(note);
                // client.end();
            });
        }
        update_mqtt();
    }, []);

    // Sets default React state 
    const [mesg, setMesg] = useState(<Fragment><em>nothing heard</em></Fragment>);


    return (
        <div className="message">
            <p>The message is: {mesg}</p>
        </div>
    );
};

export default Message;
