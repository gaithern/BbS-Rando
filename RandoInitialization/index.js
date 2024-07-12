// Initializes variable for all 3 Stories' for character checks later on
const storyModifier = "version_choice({0x0, 0x10F9F800}, game_version)";

// Initializes array for the Orb Battle conditional for Ventus, Terra and Aqua
export const orbsCheck = [
  {
    character: "Ventus",
    value: `if ReadInt(version_choice({0x0, 0x81711F}, game_version)) == 0x20100 and ReadInt(version_choice({0x0, 0x817123}, game_version)) == 0x44004400 and ReadShort(version_choice({0x0, 0x817127}, game_version)) == 0x4400 then --in Orb Battle`,
  },
  {
    character: "Aqua",
    value: `if ReadInt(version_choice({0x0, 0x81711F}, game_version)) == 0x20100 and ReadInt(version_choice({0x0, 0x817123}, game_version)) == 0x4B004B00 and ReadShort(version_choice({0x0, 0x817127}, game_version)) == 0x4B00 then --in Orb Battle`,
  },
  {
    character: "Terra",
    value: `if ReadInt(version_choice({0x0, 0x81711F}, game_version)) == 0x20100 and ReadInt(version_choice({0x0, 0x817123}, game_version)) == 0x3B003B00 and ReadShort(version_choice({0x0, 0x817127}, game_version)) == 0x3B00 then --in Orb Battle`,
  },
];

// Initializes function that write the checks for which character is being used
export function storyCheck(characterDigit) {
  const characterComment = ["Ventus", "Aqua", "Terra"];
  const characterCheck = `if ReadInt(version_choice({0x0, 0x81711F}, game_version)) ~= 0xFFFFFF00 then
if ReadInt(version_choice({0x0, 0x81711F}, game_version)) ~= 0xD0100 then
if ReadInt(version_choice({0x0, 0x81711F}, game_version)) ~= 0x20100 or ReadInt(version_choice({0x0, 0x817123}, game_version)) ~= 0x100 or ReadShort(version_choice({0x0, 0x817127}, game_version)) ~= 0x100 then
if ReadByte(${storyModifier}) == 0x0${
    characterDigit.value
  } then --${characterComment[characterDigit.value]}`;
  return characterCheck;
}
