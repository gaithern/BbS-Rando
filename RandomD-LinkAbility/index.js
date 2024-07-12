import { grabRandom } from "../RandoGeneralFunctions/index.js";
import { orbsCheck } from "../RandoInitialization/index.js";

export function randomDlinkAbility(itemPool, addressPool, characterDigit) {
  let luascript = [orbsCheck[characterDigit.value].value];
  for (let i = 0; i < addressPool.length; i++) {
    let { element1 } = grabRandom(itemPool, 1);
    let address = addressPool[i].address;
    luascript.push(`WriteShort(${address}, 0x${element1.digit})`);
  }
  luascript.push(`end`);
  return luascript.join("\n");
}
