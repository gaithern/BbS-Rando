// Initializes variables for currently held weapon (All characters)
const currentWeapon = "version_choice({0x0, 0x10F9DE65}, game_version)"
const currentWeaponInMenu = "version_choice({0x0, 0x10FA51DE}, game_version)"
const stockWeapon = "version_choice({0x0, 0x10FA2AAA}, game_version)"

// Initializes function that randomizes the starting Weapon and removes it from the pool
export function randomStartingWeapon(startingWeapon, keyblades, weaponCheck) {
  const randomWeapon = Math.floor(Math.random() * startingWeapon.length);
  const removedWeaponMenu = keyblades.splice(randomWeapon, 1)[0];
  const removedWeapon = startingWeapon.splice(randomWeapon, 1)[0];
  const randomstartingWeapon = `${weaponCheck.value}\nWriteByte(${currentWeapon}, 0x${removedWeapon.digit})\nWriteShort(${currentWeaponInMenu}, 0x${removedWeaponMenu.digit})\nWriteShort(${stockWeapon}, 0x${removedWeaponMenu.digit})\nend`;
  return randomstartingWeapon;
}
