//this is the defination of an object which will represent an IoT Device which can trun on and off
class OnOffdDevice {
    //here is a list of all the possible fields for an IoT device
    device_id = 0;
    device_name = "default";
    //false means off true means on
    device_status = false;
    constructor(id, device_name) {
        this.device_id = id;
        this.device_name = device_name;
    }
    toggleStatus = () => {
        this.device_status = !this.device_status;
    }
}

//this is just for exporting the class
module.exports = OnOffdDevice;