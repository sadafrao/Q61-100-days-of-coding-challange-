// Q 61
//make alist of enum for different types of vehicles
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Truck"] = 1] = "Truck";
    VehicleType[VehicleType["Motorcycle"] = 2] = "Motorcycle";
    VehicleType[VehicleType["Bicycle"] = 3] = "Bicycle";
})(VehicleType || (VehicleType = {})); // show one type of vehicles
console.log(VehicleType.Car);
