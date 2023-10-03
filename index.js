total = 0;

function additioner() {
  let fruit = document.getElementById("fruit").value;

  
 switch (fruit) {
    case "Pomme":
      total += 10;
      alert(
        "Vous avez choisi des pommes et le prix des pommes est : " +
          total +
          " us"
      );
      break;

    case "Ananas":
      total += 20;
      alert(
        "Vous avez choisi des ananas et le prix des ananas est : " +
          total +
          " us"
      );
      break;

    case "Mangue":
      total += 5;
      alert(
        "Vous avez choisi des mangues et le prix des mangues est : " +
          total +
          " us"
      );
      break;

    case "Fraise":
      total += 30;
      alert(
        "Vous avez choisi des fraises et le prix des fraises est : " +
          total +
          " us"
      );
      break;

    default:
      
      alert("Vous davez choisir un fruit.");
      break;
  }
}

function finaliser(){

    alert("Le prix total des achats est : " + total + " us")

}
