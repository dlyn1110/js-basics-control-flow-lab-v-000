// Write your code in this file!
function scuberGreetingForFeet(feet){
    let response;
    if (feet < 400) {
      response = `This one is on me!`;
    } else if (feet > 2000 && feet <= 2500) {
      response = `I will gladly take your thirty bucks.`;
    } else if (feet > 2500) {
      response = `No can do.`;
    }
    return response;
  }

  function ternaryCheckCity(city) {
    return city == 'NYC' ? 'Ok, sounds good.' : 'No go.';
  }

  fucntion switchOnCharmFromTip(tip){  
    let response;
    swith(tip) {
      case 'generous':
      response = 'Thank you so much.';
      break;
      case 'not as genrous':
      response = 'Thank you.';
      breka;
      default:
      response = 'Bye.';
    }
    return response
  }
