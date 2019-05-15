# Kumas Royale [RU TERA] Exploit

This Tera-Toolbox module allows you to:
- Hide Kumas Boss under textures and make it unapproachable.
- Transfer to the baby Kumas afterwards and kill the enemy boss Kumas.

## How to get?:
- To get the module, ask me in the discord: PenguinRei#6371

## Proxy compatibility:
- Tested on Tera-Toolbox proxy only.
- Opcodes provided for:
  - **RU** (patch **81.03**, [protocol version 347375](https://github.com/PinguinRei/Kumas-Royale-RU-TERA/blob/master/opcodes/protocol.347375.map))
  
## Setup:
- Copy/paste all .def files from the [protocol folder](https://github.com/PinguinRei/Kumas-Royale-RU-TERA/tree/master/defs) to `<path to proxy>\node_modules\tera-data\protocol\`.
- Copy/paste the opcodes (as appropriate to your region) from the map folder into the corresponding .map file within `<path to proxy>\node_modules\tera-data\map\`.

## Commands
**Need to be used in _Proxy Channel_ (/proxy) or (/8)**
```
- /8 kuma -2000 - Hide the character for 2000 units under the ground (use for Boss Kumas)
- /8 kuma 0 - restore the original height of the character above the ground (user for Baby Kumas after Boss Kumas)
```
## Module Preview (proof of work)

[![Watch the video](https://img.youtube.com/vi/qvJh9tatggc/maxresdefault.jpg)](https://youtu.be/qvJh9tatggc)
