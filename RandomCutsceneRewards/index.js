// Imports random number function to create a random element
import { grabRandom } from "../RandoGeneralFunctions/index.js";

// Imports Cutscene Reward variables necessary for Terra
import { cutsceneRewardChecksTerra } from "../CutsceneRewards/CutsceneRewardChecks/cutsceneRewardChecksTerra.js";
import { singleRewardsTerra } from "../CutsceneRewards/CutsceneRewardsTerra/singleRewardsTerra.js";
import { singleDuplicateRewardsTerra } from "../CutsceneRewards/CutsceneRewardsTerra/singleDuplicateRewardsTerra.js";
import { doubleRewardsTerra } from "../CutsceneRewards/CutsceneRewardsTerra/doubleRewardsTerra.js";
import { doubleDuplicateRewardsTerra } from "../CutsceneRewards/CutsceneRewardsTerra/doubleDuplicateRewardsTerra.js";

// Initializes variables for Cutscene Reward randomization
let reward1 = "version_choice({0x0, 0x10F9F498}, game_version)"
let reward2 = "version_choice({0x0, 0x10F9F480}, game_version)"
let reward3 = "version_choice({0x0, 0x10F9F468}, game_version)"
let reward4 = "version_choice({0x0, 0x10F9F4A8}, game_version)"

// Initializes function that randomizes Cutscene Rewards
export function randomCutsceneRewards(
  characterDigit,
  cutsceneRewardChecks,
  singleRewards,
  doubleRewards,
  cutsceneRewardPool
) {
  const luascript = [];
  // Distributes items that can be obtained as Cutscene Rewards for Ventus and Aqua (Single -> Double -> Triple)
  if (characterDigit.value != 2) {
    for (let i = 0; i < cutsceneRewardChecks.value.length; i++) {
      // Distributes items for single Cutscene Reward locations
      if (i < singleRewards.value.length) {
        let { element1 } = grabRandom(cutsceneRewardPool, 1);
        // Checks if drafted object is an item (Category 0) or a command (Category 1) and writes the lua accordingly
        if (element1.category == "00") {
          luascript.push(
            `${cutsceneRewardChecks.value[i]}WriteInt(${reward1}, 0x2800${element1.digit})\nWriteInt(${reward2}, 0x2800${element1.digit})\nWriteInt(${reward3}, 0x2800${element1.digit})\nend\n`
          );
        } else {
          luascript.push(
            `${cutsceneRewardChecks.value[i]}WriteInt(${reward1}, 0x0000${element1.digit})\nWriteInt(${reward2}, 0x0000${element1.digit})\nWriteInt(${reward3}, 0x0000${element1.digit})\nend\n`
          );
        }
      }
      // Distributes items for double Cutscene Reward locations
      else if (
        i <
        singleRewards.value.length + doubleRewards.value.length / 2
      ) {
        let { element1, element2 } = grabRandom(cutsceneRewardPool, 2);
        // Checks if first drafted object is an item (Category 0) or a command (Category 1) and writes the lua accordingly
        if (element1.category == "00") {
          luascript.push(
            `${cutsceneRewardChecks.value[i]}WriteInt(${reward1}, 0x2800${element1.digit})\nWriteInt(${reward3}, 0x2800${element1.digit})\n`
          );
        } else {
          luascript.push(
            `${cutsceneRewardChecks.value[i]}WriteInt(${reward1}, 0x0000${element1.digit})\nWriteInt(${reward3}, 0x0000${element1.digit})\n`
          );
        }
        // Checks if second drafted object is an item (Category 0) or a command (Category 1) and writes the lua accordingly
        if (element2.category == "00") {
          luascript.push(
            `WriteInt(${reward2}, 0x2800${element2.digit})\nend\n`
          );
        } else {
          luascript.push(
            `WriteInt(${reward2}, 0x0000${element2.digit})\nend\n`
          );
        }
      } else {
        let { element1, element2, element3 } = grabRandom(
          cutsceneRewardPool,
          3
        );
        // Checks if first drafted object is an item (Category 0) or a command (Category 1) and writes the lua accordingly
        if (element1.category == "00") {
          luascript.push(
            `${cutsceneRewardChecks.value[i]}WriteInt(${reward1}, 0x2800${element1.digit})\n`
          );
        } else {
          luascript.push(
            `${cutsceneRewardChecks.value[i]}WriteInt(${reward1}, 0x0000${element1.digit})\n`
          );
        }
        // Checks if second drafted object is an item (Category 0) or a command (Category 1) and writes the lua accordingly
        if (element2.category == "00") {
          luascript.push(`WriteInt(${reward2}, 0x2800${element2.digit})\n`);
        } else {
          luascript.push(`WriteInt(${reward2}, 0x0000${element2.digit})\n`);
        }
        // Checks if third drafted object is an item (Category 0) or a command (Category 1) and writes the lua accordingly
        if (element3.category == "00") {
          luascript.push(
            `WriteInt(${reward3}, 0x2800${element3.digit})\nend\n`
          );
        } else {
          luascript.push(
            `WriteInt(${reward3}, 0x0000${element3.digit})\nend\n`
          );
        }
      }
    }
  }
  //Distributes items that can be obtained as Cutscene Rewards for Terra
  else {
    for (
      let i = 0;
      i <
      cutsceneRewardChecksTerra.length -
        singleDuplicateRewardsTerra.length / 2 -
        doubleDuplicateRewardsTerra.length / 4;
      i++
    ) {
      // Distributes items for single Cutscene Reward locations
      if (i < singleRewardsTerra.length) {
        let { element1 } = grabRandom(cutsceneRewardPool, 1);
        // Checks if drafted object is an item (Category 0) or a command (Category 1) and writes the lua accordingly
        if (element1.category == "00") {
          luascript.push(
            `${cutsceneRewardChecksTerra[i]}WriteInt(${reward1}, 0x2800${element1.digit})\nWriteInt(${reward2}, 0x2800${element1.digit})\nWriteInt(${reward3}, 0x2800${element1.digit})\nend\n`
          );
        } else {
          luascript.push(
            `${cutsceneRewardChecksTerra[i]}WriteInt(${reward1}, 0x0000${element1.digit})\nWriteInt(${reward2}, 0x0000${element1.digit})\nWriteInt(${reward3}, 0x0000${element1.digit})\nend\n`
          );
        }
      }
      // Distributes items for single duped Cutscene Reward locations
      else if (
        i <
        singleRewardsTerra.length + singleDuplicateRewardsTerra.length / 2
      ) {
        let { element1 } = grabRandom(cutsceneRewardPool, 1);
        // Checks if first drafted object is an item (Category 0) or a command (Category 1) and writes the lua accordingly
        if (element1.category == "00") {
          luascript.push(
            `${cutsceneRewardChecksTerra[i]}WriteInt(${reward1}, 0x2800${
              element1.digit
            })\nWriteInt(${reward2}, 0x2800${
              element1.digit
            })\nWriteInt(${reward3}, 0x2800${element1.digit})\nend\n${
              cutsceneRewardChecksTerra[i + 1]
            }WriteInt(${reward1}, 0x2800${
              element1.digit
            })\nWriteInt(${reward2}, 0x2800${
              element1.digit
            })\nWriteInt(${reward3}, 0x2800${element1.digit})\nend\n`
          );
        } else {
          luascript.push(
            `${cutsceneRewardChecksTerra[i]}WriteInt(${reward1}, 0x0000${
              element1.digit
            })\nWriteInt(${reward2}, 0x0000${
              element1.digit
            })\nWriteInt(${reward3}, 0x0000${element1.digit})\nend\n${
              cutsceneRewardChecksTerra[i + 1]
            }WriteInt(${reward1}, 0x0000${
              element1.digit
            })\nWriteInt(${reward2}, 0x0000${
              element1.digit
            })\nWriteInt(${reward3}, 0x0000${element1.digit})\nend\n`
          );
        }
      }
      // Distributes items for double Cutscene Reward locations
      else if (
        i <
        singleRewardsTerra.length +
          singleDuplicateRewardsTerra.length / 2 +
          doubleRewardsTerra.length / 2
      ) {
        let j = i + singleDuplicateRewardsTerra.length / 2;
        let { element1, element2 } = grabRandom(cutsceneRewardPool, 2);
        // Checks if first drafted object is an item (Category 0) or a command (Category 1) and writes the lua accordingly
        if (element1.category == "00") {
          luascript.push(
            `${cutsceneRewardChecksTerra[j]}WriteInt(${reward1}, 0x2800${element1.digit})\nWriteInt(${reward3}, 0x2800${element1.digit})\n`
          );
        } else {
          luascript.push(
            `${cutsceneRewardChecksTerra[j]}WriteInt(${reward1}, 0x0000${element1.digit})\nWriteInt(${reward3}, 0x0000${element1.digit})\n`
          );
        }
        // Checks if second drafted object is an item (Category 0) or a command (Category 1) and writes the lua accordingly
        if (element2.category == "00") {
          luascript.push(
            `WriteInt(${reward2}, 0x2800${element2.digit})\nend\n`
          );
        } else {
          luascript.push(
            `WriteInt(${reward2}, 0x0000${element2.digit})\nend\n`
          );
        }
      }
      // Distributes items for double duped Cutscene Reward locations
      else {
        let j = i + singleDuplicateRewardsTerra.length / 2;
        let { element1, element2 } = grabRandom(cutsceneRewardPool, 2);
        // Checks if first drafted object is an item (Category 0) or a command (Category 1) and writes the lua accordingly
        if (element1.category == "00") {
          luascript.push(
            `${cutsceneRewardChecksTerra[j]}WriteInt(${reward1}, 0x2800${element1.digit})\nWriteInt(${reward3}, 0x2800${element1.digit})\n`
          );
          // Checks if second drafted object is an item (Category 0) or a command (Category 1) and writes the lua accordingly
          if (element2.category == "00") {
            luascript.push(
              `WriteInt(${reward2}, 0x2800${element2.digit})\nend\n${
                cutsceneRewardChecksTerra[j + 1]
              }WriteInt(${reward1}, 0x2800${
                element1.digit
              })\nWriteInt(${reward3}, 0x2800${
                element1.digit
              })\nWriteInt(${reward2}, 0x2800${element2.digit})\nend`
            );
          } else {
            luascript.push(
              `WriteInt(${reward2}, 0x0000${element2.digit})\nend\n${
                cutsceneRewardChecksTerra[j + 1]
              }WriteInt(${reward1}, 0x2800${
                element1.digit
              })\nWriteInt(${reward3}, 0x2800${
                element1.digit
              })\nWriteInt(${reward2}, 0x0000${element2.digit})\nend`
            );
          }
        } else {
          luascript.push(
            `${cutsceneRewardChecksTerra[j]}WriteInt(${reward1}, 0x0000${element1.digit})\nWriteInt(${reward3}, 0x0000${element1.digit})\n`
          );
          // Checks if second drafted object is an item (Category 0) or a command (Category 1) and writes the lua accordingly
          if (element2.category == "00") {
            luascript.push(
              `WriteInt(${reward2}, 0x2800${element2.digit})\nend\n${
                cutsceneRewardChecksTerra[j + 1]
              }WriteInt(${reward1}, 0x0000${
                element1.digit
              })\nWriteInt(${reward3}, 0x0000${
                element1.digit
              })\nWriteInt(${reward2}, 0x2800${element2.digit})\nend`
            );
          } else {
            luascript.push(
              `WriteInt(${reward2}, 0x0000${element2.digit})\nend\n${
                cutsceneRewardChecksTerra[j + 1]
              }WriteInt(${reward1}, 0x0000${
                element1.digit
              })\nWriteInt(${reward3}, 0x0000${
                element1.digit
              })\nWriteInt(${reward2}, 0x0000${element2.digit})\nend`
            );
          }
        }
      }
    }
  }
  return luascript.join("");
}
