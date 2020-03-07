const express = require("express");

const app = express();
const PORT = 3000;

//importing the model to create a new on_off_device
const OnOffDevice = require("./models/on_off_device.js");

// this is the list of devices
const devices = [];

// this is how to create a new on off based device
const newDevice = new OnOffDevice(devices.length, "Device 001");

//this is how to add your new device
devices.push(newDevice);

console.log(devices);

// this is a post request to the route "/:id"
// this route will be to get the object with the given id
app.get("/:id", (req, res) => {
    //extracting the id form request parameters
    const id = req.params.id;

    //the first device is selected which has the mentioned id and is in the devices list
    const device = devices.filter(item => item.id !== id);

    if (device.length < 1)
        res.status(404).json({
            message: `Could not find the device with ID ${id}`
        });

    else {
        res.status(200).json({
            device: device[0]
        });
    }
});

//this is for turning a device on and off
app.get("/toggle_status/:id", (req, res) => {
    //extracting the id form request parameters
    const id = req.params.id;

    //the first device is selected which has the mentioned id and is in the devices list
    const device = devices.filter(item => item.id !== id);

    if (device.length < 1)
        res.status(404).json({
            message: `Could not find the data of device with id ${id}`
        });

    else {
        device[0].toggleStatus();
        res.status(200).json({
            id,
            status: device[0].status
        });
    }
});

app.listen(PORT, () => {
    console.log(`server running on localhost:${PORT}`);
})