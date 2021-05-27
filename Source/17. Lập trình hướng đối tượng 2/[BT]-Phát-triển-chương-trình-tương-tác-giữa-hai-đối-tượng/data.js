class SwitchButton {
  SwitchButton(status, lamp) {
    this.status = status;
    this.lamp = lamp;
  }
  connectToLamp(ElectricLamp) {
    this.ElectricLamp = ElectricLamp;
  }
  switchOff() {
    this.status = false;
    this.lamp.turnOff();
    
  }
  switchOn() {
    this.status = true;
    this.lamp.turnOn();
    
  }
}

class ElectricLamp {
  ElectricLamp(status) {
    this.status = status;
  }
  turnOff() {
    this.status = false;
    document.write("No Lighting <br>");
  }
  turnOn() {
    this.status = true;
    document.write("Lighting <br>");
  }
}

let electric = new ElectricLamp();
electric.ElectricLamp(true);
let sw = new SwitchButton();
sw.SwitchButton(true,electric)
sw.connectToLamp(electric);
for (i = 0; i < 10; i++) {
        sw.switchOff();
        
        sw.switchOn();
        
    
}

