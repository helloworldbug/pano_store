function FloorStruct(sFloorId,defaultHallId,sAllHallIds){
    this.floorId=sFloorId;
    this.curHallId=defaultHallId;
    this.allHallIds = sAllHallIds;
    this.changeCurHall=function(newHallId){
         this.curHallId=newHallId;
    }
    this.getCurHallId=function(){
        return this.curHallId;
    }
    this.getFloorId=function(){
        return this.floorId;
    }
    this.getAllHallIds = function () {
        return this.allHallIds;
    }
}







function BuildingStruct(curFloorObj,allFloorsObj) {
    this.curFloor = curFloorObj;
    this.allFloors = allFloorsObj;
    this.getCurFloor = function () {
        return this.curFloor;
    }
    this.getAllFloors = function () {
        return this.allFloors;
    }
    this.changeFloor = function (newFloorId) {

        for (var i = 0; i < this.allFloors.length; i++) {
            if (newFloorId == this.allFloors[i].getFloorId()) {
                this.curFloor = this.allFloors[i];
                break;
            }
        }
    }
}


var floor_0 = new FloorStruct("0", "0_zl", ["0_b2", "0_zl", "0_15", "0_16", "0_17", "0_18", "0_21", "0_22", "0_23", "0_24"]);
var floor_5 = new FloorStruct("5", "5_zl", ["5_zl", "5_25", "5_26", "5_27"]);
var floor_33 = new FloorStruct("33", "33_zl", ["33_zl", "33_11", "33_11-1", "33_12", "33_13", ]);
var floor_41 = new FloorStruct("41", "41_zl", ["41_zl", "41_7", "41_7-1", "41_8", "41_9"]);
var floor_49 = new FloorStruct("49", "49_zl", ["49_zl", "49_1", "49_2", "49_3", "49_4", "49_5", "49_5plus", "49_6", "49_6-1", ]);
var floors = [
floor_0,
floor_5,
floor_33,
floor_41,
floor_49
];

var allBuildingStruct = new BuildingStruct(floor_0,floors);