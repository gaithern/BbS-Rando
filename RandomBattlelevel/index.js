import { orbsCheck } from "../RandoInitialization/index.js";

// Initializes variable for the Battle Level
const battleLevel = "version_choice({0x0, 0x10FA2005}, game_version)";

// Initializes function to get a specific battle Level adress
export function battleLevelAddress(counter) {
  let level = `${battleLevel} + ${counter}`;
  return level;
}

// Initializes function to get a random Battle level
export function randomBattleLevelGenerator(min, max) {
  let random = Math.ceil(Math.random() * (max - min - 1)) + min;
  random = random.toString(16).toUpperCase();
  return random;
}

// Initializes function to write Battle Level randomization (Hardcore)
export function randomBattleLevel(characterDigit) {
  let luascript = [orbsCheck[characterDigit.value].value];
  for (let i = 1; i < 12; i++) {
    let random = randomBattleLevelGenerator(3, 1);
    let level = battleLevelAddress(i);
    luascript.push(`WriteByte(${level}, 0x${random})`);
  }
  let random = randomBattleLevelGenerator(10, 8);
  let level = battleLevelAddress(12);
  luascript.push(`WriteByte(${level}, 0x${random})`);
  luascript.push(`end`);
  return luascript.join("\n");
}
