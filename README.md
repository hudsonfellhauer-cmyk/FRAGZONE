# FRAGZONE

Browser arena frag shooter built with three.js. Runs entirely in the browser against bots. No login, no backend.

## Files
- `public/index.html` is the whole game (HTML, CSS and JS in one file). Everything is drawn in code, so there are no image or model files.
- `server.js` is an optional tiny local server (no dependencies).
- `vercel.json`, `netlify.toml` are deploy configs.

## Run locally
Needs Node 18+: `npm start`, then open http://localhost:3000.
(Or just open `public/index.html`, or run `python3 -m http.server -d public`.)

## Saving
- **Automatic:** rank points, credits, owned skins, scope and skin choices, challenge progress and the sound setting are saved in your browser (local storage). They stay on that browser on that device until you clear site data.
- **Save file:** on the main menu, **EXPORT SAVE** downloads `fragzone-save.json`. **IMPORT SAVE** loads it. Use this to back up your progress or move it to another browser or device.

## Store
Matches pay credits (50 + 5 per frag + 100 for a win). The STORE button on the main menu sells weapon camo skins (300, 500 or 800 credits each); equip them in LOADOUT. New saves start with 500 credits. There is no real-money payment.

## Deploy online (free, static)
Publish the `public` folder:
- **GitHub Pages:** rename `public` to `docs`, push, then Settings > Pages > choose the `docs` folder.
- **Netlify:** drag `public` onto app.netlify.com/drop.
- **Vercel / Cloudflare Pages:** publish `public`.

Because saves live in the browser, each player's progress is on their own device. There are no accounts or shared leaderboards.

## Optional: self-host three.js
The page loads three.js from cdnjs. To remove that dependency: `npm install` then `npm run vendor-three`.

## New: stats, domination, training range
- **Career stats** (main menu): matches, win rate, K/D, headshots, accuracy, damage, streaks, favorite operator, time played. Saved and included in the export file. Ranking up plays a full-screen rank-up animation.
- **Domination:** the 3v3 / 5v5 button on the menu cycles Team Deathmatch and Domination. Hold the A, B and C points to score 1 per point per second. Casual ends at 150, ranked plays the full 5:00.
- **Training range:** targets at 11m, 20m and 30m plus two moving ones. Abilities have a 5s cooldown. Press , and . to switch operator.
- **Bots** now use all 10 operators, including Echolocation (pinged targets are easier to hit and, from your teammates, are outlined for you).
- **Surge:** a SURGE button on mobile switches STUN/JAM. Mamba's snake turns black in darkness, yellow when stunned or jammed, and slithers faster when stung.

## Bots
Bots use their operator abilities on any enemy, not just you: they ping, lock, stun, jam, sting and blind enemy bots (and your teammates) too.

Bots pick targets by distance, line of sight and recent gunfights: anyone who just shot them (or whom they just shot) gets priority, and a bot that gets hit re-evaluates immediately.

## Med stations and ranked
Each med station holds 150 points of healing per match and goes dark when it runs out (the ring dims as it drains). Ranked has no kill cap: every ranked match runs the full 5:00 and the higher score wins. Casual still ends at the kill cap.

## Surge
STUN mode (2 uses) freezes an enemy for 2s. JAMMER mode (2 uses, press X to switch) shocks an enemy and adds 10s to their ability cooldown; a Buzzkill also loses 2 stings. Bots with Surge can jam you the same way.

## Ability animations
Every operator ability has its own effect (sonar rings, lock-in bracket, shield deploy, rush trail, shockwave and dome, scythe trail, hive overlay, poison aura, canister burst, stun arcs), plus a cooldown bar with a ready flash.

## Not built yet
Multiplayer, game modes other than Team Deathmatch and Domination, killcam, and spectator.

## Touch controls are easier
On mobile, bots play one rank (1 level) weaker than the same rank on keyboard, so a mobile match is always about one rank easier. A light aim assist also pulls your crosshair toward enemies you are already aiming near. Keyboard and mouse play is unchanged.

## Operator colors
Rebound blue, Focus red, Knockback green, Bronco orange, Force purple, Wraith cyan, Buzzkill yellow, Mamba green, Midnight blue, Surge pink. The icons, ability effects, cooldown bar and ability HUD use these colors, and bots wear their operator color on the head and shoulder pads (the torso still shows team color).

Bots also wear operator details: Rebound's helmet and chest shield, Focus's hood, Knockback's riot shield, Bronco's hat and scarf, Force's helmet and floating shard, Wraith's hood and bandolier, Buzzkill's goggles and headphones, Mamba's snake helmet, Midnight's long coat, Surge's horned helmet and glowing lines.

## Operators screen, skins and crates
- The OPERATORS screen shows a rotating 3D preview of each operator with their ability description (hover or tap to preview) and lets you equip owned operator skins.
- **Operator skins:** every operator has a Default, a Common alt skin (Stealth, Urban, Desert, Outlaw, Whiteout, Shadow, Ranger, Viper, Shroud, Volt) and two Rare skins (for example Neon and Frostbite for Rebound). Bots wear them at random.
- **Prices:** Common 5,000 CR, Rare 10,000, Epic 25,000, Legendary 50,000 (weapon skins have all four tiers; operator skins are Common and Rare for now).
- **Crate:** 500 CR for a random skin. Odds: Common 60%, Rare 28%, Epic 9%, Legendary 3%. Epic or better is guaranteed every 10 crates and Legendary every 50. Common drops can be weapon or operator skins. Duplicates refund 200 / 400 / 1,000 / 2,000 CR by rarity. Pity progress and crates opened are saved and included in the export file. There is no real-money payment.

## Scroll wheel
On PC, scroll the mouse wheel to swap between your primary and secondary weapon.
