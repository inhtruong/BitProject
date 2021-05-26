let Stars = [
    "Polaris",
    "Aldebaran",
    "Deneb",
    "Vega",
    "Altair",
    "Dubhe",
    "Regulus",
  ];
  let Constellations = [
    "Ursa Minor",
    "Tarurus",
    "Cygnus",
    "Lyra",
    "Aquila",
    "Ursa Major",
    "Leo",
  ];
  function findConstellations(str) {
    let result = false;
    let i=0;
    for ( i = 0; i < Stars.length; i++) {
      if (str == Stars[i]) {
        result = true;
        break;
      }
    }
    if (result) {
      result = alert(
        `The constellation of stars at ${i} is: ${Constellations[i]}`
      );
    }else {
        result = alert(`No matching constellations`);
    }

    return result;
  }
  let nameStar = prompt("Enter the name of Star");
  findConstellations(nameStar);