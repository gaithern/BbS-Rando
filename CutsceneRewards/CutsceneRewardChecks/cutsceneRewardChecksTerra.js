export const cutsceneRewardChecksTerra = [
  // Checks for original Single Rewards
  "if ReadShort(version_choice({0x0, 0x817120}, game_version)) == 0xF04 and ReadShort(version_choice({0x0, 0x817128}, game_version)) == 0x1 then\n",
  "if ReadShort(version_choice({0x0, 0x817120}, game_version)) == 0x904 and ReadShort(version_choice({0x0, 0x817128}, game_version)) == 0x2 then\n",
  "if ReadShort(version_choice({0x0, 0x817120}, game_version)) == 0x606 and ReadShort(version_choice({0x0, 0x817128}, game_version)) == 0x36 then\n",
  "if ReadShort(version_choice({0x0, 0x817120}, game_version)) == 0xD0B and ReadShort(version_choice({0x0, 0x817128}, game_version)) == 0x36 then\n",
  "if ReadShort(version_choice({0x0, 0x817120}, game_version)) == 0xD0B and ReadShort(version_choice({0x0, 0x817128}, game_version)) == 0x4 then\n",
  "if ReadShort(version_choice({0x0, 0x817120}, game_version)) == 0x20A and ReadShort(version_choice({0x0, 0x817128}, game_version)) == 0x33 then\n",
  "if ReadShort(version_choice({0x0, 0x817120}, game_version)) == 0x10D and ReadShort(version_choice({0x0, 0x817128}, game_version)) == 0x37 then\n",

  // Checks for original Single Duplicate Rewards
  "if ReadShort(version_choice({0x0, 0x817120}, game_version)) == 0x402 and ReadShort(version_choice({0x0, 0x817128}, game_version)) == 0x3 then\n",
  "if ReadShort(version_choice({0x0, 0x817120}, game_version)) == 0x602 and ReadShort(version_choice({0x0, 0x817128}, game_version)) == 0x1 then\n",

  // Checks for original Double Rewards
  "if ReadShort(version_choice({0x0, 0x817120}, game_version)) == 0x101 and ReadShort(version_choice({0x0, 0x817128}, game_version)) == 0x40 then\n",
  "if ReadShort(version_choice({0x0, 0x817120}, game_version)) == 0xB06 and ReadShort(version_choice({0x0, 0x817128}, game_version)) == 0x37 then\n",
  "if ReadShort(version_choice({0x0, 0x817120}, game_version)) == 0x408 and ReadShort(version_choice({0x0, 0x817128}, game_version)) == 0x3E then\n",
  "if ReadShort(version_choice({0x0, 0x817120}, game_version)) == 0x609 and ReadShort(version_choice({0x0, 0x817128}, game_version)) == 0x2 then\n",
  "if ReadShort(version_choice({0x0, 0x817120}, game_version)) == 0x801 and ReadShort(version_choice({0x0, 0x817128}, game_version)) == 0x1 then\n",

  // Checks for original Double Duplicate Rewards
  "if ReadShort(version_choice({0x0, 0x817120}, game_version)) == 0xA03 and ReadShort(version_choice({0x0, 0x817128}, game_version)) == 0x1 then\n",
  "if ReadShort(version_choice({0x0, 0x817120}, game_version)) == 0xA03 and ReadShort(version_choice({0x0, 0x817128}, game_version)) == 0x2 then\n",
];
