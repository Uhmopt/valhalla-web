export const NEWS_DATA = [
  {
    id: 9,
    title: "Patch Notes 0.3.0",
    caption: "Published on 08-10-2022",
    tags: ["Patch Notes"],
    coverUrl: "/news/news-9/cover.png",
    content: `<p>TBD</p>`,
  },
  {
    id: 8,
    title: "Patch Notes 0.2.1",
    caption: "Published on 07-25-2022",
    tags: ["Patch Notes"],
    coverUrl: "/news/news-8/cover.png",
    content: `<p>Well Vikings, ready for part two of this patch? Because now we are getting into the exciting details of the general changes of the game. This part focuses on describing the new features added to the game to make your experience even better. So let’s get started.</p>
<p><strong>Abilities</strong></p>
<ul>
<li>The 4th ability of the Húshroom has been added to the game. Fairy Ring allows you to select any 3 tiles from a 3-tile radius to cast it on. If an enemy is standing on any of these tiles, they will fall asleep for 1 turn after 1 turn.</li>
<li>The time it takes for the Arcane Bomb to move from one tile to the other has been increased to make sure players are able to dodge it.</li>
</ul>
<p><strong>General changes</strong></p>
<ul>
<li>We have added an interactable camera both in the pick phase and combat phase. Using the right-click button of your mouse, you can adjust the camera both in the pick phase and combat phase, allowing you to choose from which angle to watch your Vera fight!</li>
<li>No more forced draw. We have removed the turn limit after the final shrink of the map, allowing the combat to continue until one of the two Veras (or both) reaches 0 health.</li>
<li>We have included a new ‘Mute Sound’ button in the bottom left corner. This will allow you to mute and unmute the sounds of Valhalla at any time. By default, the sounds of the game will be muted, fixing the issue of not having sound in the game if you don’t click on the screen before the game loads.</li>
</ul>
<p><strong>Bug Fixes</strong></p>
<ul>
<li>The damage formula got adjusted so that there is no case where an ability does 1 damage.</li>
<li>The stats synchronization problem where the Vera’s stats change when the page is refreshed has been fixed.</li>
</ul>
<p><strong>Information on combat rules</strong></p>
<p>As the last section of this patch notes, we want to clarify how certain mechanics and gameplay events work.</p>
<ul>
<li>Rules for Vera Collision: the winner of a Vera collision is decided based on the public stats of the Veras. The collision is won by the Vera with the highest stat, checking defense first, then attack, and lastly health. If all stats are the same, then the Vera with the lowest BlockchainID wins the collision.</li>
<li>Rules for Terrain Shift priority: in the case that a Skaerrót is fighting against another Skaerrót and both use Terrain Shift on the same tile(s), the priority of which Vera casts their ability first is determined on their public stats as well. The priority is given to the Vera with the highest public stat, starting with attack, then defense, then health. If all stats are the same, then the Vera with the lowest BlockchainID wins the collision.</li>
</ul>
<p>Well, that’s it for this patch notes. Hope you enjoy the new features in the game and have fun testing all new possibilities with Skaerrót and their interesting abilities!</p>
<p>Please feel free to communicate with us about any other issues or bugs you encounter through our community’s discord: <a href="https://discord.gg/NJXccsQSfg">https://discord.gg/NJXccsQSfg</a></p>
<p>Until next time!</p>
<p>The Valhalla Team</p>
<p style="text-align: center;"><img src="news-8/screenshot.png" alt=""></p>`,
  },
  {
    id: 7,
    title: "Skaerrót Release",
    caption: "Published on 07-25-2022",
    tags: ["Patch Notes"],
    coverUrl: "/news/news-7/cover.png",
    content: `<p>Welcome back Vikings! Excited to have you here for a new patch. 
We will be releasing the patch notes for 0.2.1 in two parts. In part one, we will introduce you to Skaerrót, a brand-new
Vera in Valhalla. You can now take this mischievous fellow into battle and try out all 4 brand-new abilities.</p>
<ul>
<li><strong>Homing Carrot</strong>: Select a tile from a 3-tile radius to throw a small carrot to. The small carrot will move 2 tiles in a straight line towards the opponent every turn for 2 turns. If the small carrot reaches the opponent it will explode and do damage. If the small carrot doesn’t reach the opponent after 2 turns, it will explode on the tile it is on.</li>
<li><strong>Carrot Rain</strong>: In a 2-tile radius, select the center tile of a 7-tile hexagon to cast Carrot Rain on, damaging any enemy Vera standing on the 7-tile hexagon, and snaring any enemy Vera standing on the center tile.</li>
<li><strong>Terrain Shift</strong>: Select 2 tiles to shift positions with each other. Objects placed on the selected tiles will shift their position alongside the tiles. Tiles occupied by Veras cannot be shifted.</li>
<li><strong>Sanctuary</strong>: Select 3 tiles to grow patches of healthy grass on top of. These patches of grass heal all characters and turn them invisible when standing in it; Skaerróts heal more than any other Vera. Tiles can only be selected if they are adjacent to existing Sanctuaries, the tile Skaerróts is on, or tiles already selected for this ability.</li>
</ul>
<p>That concludes part one of this patch notes. Stay tuned for part two!</p>
<p style="text-align: center;"><img src="news-7/screenshot.png" alt=""></p>`,
  },
  {
    id: 6,
    title: "Patch Notes 0.2.0",
    caption: "Published on 05-02-2022",
    tags: ["Patch Notes"],
    coverUrl: "/news/news-6/cover.jpg",
    content: `
    <p>
      Hello again Vikings! We are here this time to give you very exciting
      news. With this new patch we are including new features in the game,
      some big changes to the combat, and fixing some bugs. So, without
      further ado, let’s dive right into it.
    </p>
    <p><strong>Introducing a new Vera!</strong></p>
    <p>
      We are introducing a new Vera into the game. That’s right, from now on
      you have the option to take our dear Húshroom into battle and test the
      first three of their abilities:
    </p>
    <ul>
      <li>
        <strong>Blob Barrage</strong>: Húshroom shoots the Blobs on their
        cap forward in the shape of a cone, dealing damage to any enemy
        standing in the way. This is a medium-range attack and the
        Húshroom’s main form of instant damage.
      </li>
      <li>
        <strong>Spore Bomb</strong>: Húshroom throws a Spore Bomb towards a
        selected tile, creating a Spore Cloud around the tile it hits. This
        Spore Cloud poisons any enemy that stands inside of it, giving the
        Húshroom the possibility to do damage over time.
      </li>
      <li>
        <strong>Home Dig</strong>: Húshroom digs into the ground of the tile
        they are standing on and starts healing themselves every turn they
        are in the ground. They become invulnerable to any damage when they
        are dug in except for underground abilities.
      </li>
    </ul>
    <p>
      To get to know Húshroom better, go check out their description in the
      Vera page of the website.
    </p>
    <p><strong>New Additions to the Combat</strong></p>
    <ul>
      <li>
        <strong>Status effect icons</strong>: now you can see what status
        effects are affecting Vera during the combat with more than just
        visual effects. New icons have been added to the combat UI, and when
        hovering over them you can read more information about what the
        status effect is and what it does.
      </li>
      <li>
        <strong>New damage formula</strong>: we have realized that the way
        damage was calculated in the game was a bit inconsistent and
        unbalanced, mainly when battling Vera of higher levels. We have
        revised the damage formula, made some adjustments, and took into
        account damage from status effects. With this new approach, damages
        should feel more balanced and fair.
      </li>
      <li>
        <strong>Audio snapshots</strong>: to make your experience more
        immersive and enjoyable, the audio team has added some really cool
        features to the game. With audio snapshots, the entire audio of the
        game gets adjusted based on the status of your Vera, so when
        poisoned the game audio gets wavy, when underground the game audio
        gets muffled, and when teleporting the audio fades out and fades in
        again.
      </li>
      <li>
        <strong>Sounds</strong>: we have also added more sounds into the
        game to increase immersion during the game.
      </li>
    </ul>
    <p><strong>General Fixes</strong></p>
    <ul>
      <li>
        <strong>Audio</strong>: fixed audio stuttering when the webpage is
        not focused on the game window.
      </li>
      <li>
        <strong>Snaring the AI</strong>: now it is possible to snare the
        opponent AI with Bjørn’s Bear Trap.
      </li>
      <li>
        <strong>Potion fix</strong>: two quick fixes were made to the
        potions. The first being that you can’t take two portions of the
        same type into combat. The second is that when consuming a health
        potion with full health, the max health of your Vera will not
        increase anymore.
      </li>
      <li>
        <strong>Vera rotation when casting abilities</strong>: now Veras
        face the direction where they are casting their abilities.
      </li>
      <li>
        <strong>UI selection for Arcane Missile and Knock Up</strong>: the
        range of both the Arcane Missile and Knock Up are now highlighted in
        the pick phase.
      </li>
    </ul>
    <p>
      Well, that was a ride. A lot of new things are being added to the game
      and nice fixes were introduced to improve your gaming experience. We
      hope you enjoy these new features in Valhalla and we can’t wait to
      hear your thoughts and feedback.
    </p>
    <p>
      Please feel free to communicate with us any other issues or bugs you
      encounter through our community’s discord:
      <a href="https://discord.gg/NJXccsQSfg"
        >https://discord.gg/NJXccsQSfg</a
      >
    </p>
    <p>Until next time!</p>
    <p>The Valhalla team</p>
    <p style="text-align: center">
      <img src="./Valhalla-news-6_files/capture.jpg" alt="" />
    </p>`,
  },
  {
    id: 5,
    title: "Patch Notes 0.1.3",
    caption: "Published on 03-28-2022",
    tags: ["Patch Notes"],
    coverUrl: "/news/news-5/news_header_advert.png",
    content: `<p>Ver heill ok sæll Vikings, It’s time for some major changes. We thank you all for being patient and helping us find these pesky bugs. We have eradicated quite a few this time, stopping us from unleashing our true potential. </p>
<p>Patch 0.1.3 will be focusing on allowing vikings to do their best and earn what they deserve from winning their battles.</p>
<ul>
<li>Match results are no longer declined if matches are won in less than 60 seconds. Time limit is now 20 seconds from the time a match is found (i.e., when arsenal selection starts).</li>
<li>The “Forgotten” (i.e. AI) Vera are no longer permanently removed from the pool of possible opponents.</li>
<li>Gaining experience and leveling up is now entirely handled on the blockchain. No more XP out-of-sync issues.</li>
<li>Arsenal slots are no longer awarded erroneously on the same level.</li>
<li>Fourth Vera ability is no longer awarded temporarily in certain scenarios.</li>
<li>Fixed issue where ability was awarded without having an arsenal slot available.</li>
<li>Fixed issue where selecting a stat boost wasn’t propagated correctly to the blockchain.</li>
<li>Blockchain calls are more stable due to delegating read calls to Alchemy.</li>
</ul>
<p>This is just the beginning fellow Vikings, expect more changes in the future and as always, feel free to communicate with us about any issues or bugs you encounter through our community’s discord: <a href="https://discord.gg/NJXccsQSfg">https://discord.gg/NJXccsQSfg</a></p>
<p>Until our next patch!</p>
<p>The Valhalla Team</p>
<p style="text-align: center;"><img src="news-5/Taunt.png" alt=""></p>`,
  },
  {
    id: 4,
    title: "Patch Notes 0.1.2",
    caption: "Published on 03-07-2022",
    tags: ["Patch Notes"],
    coverUrl: "/news/news-4/Bear_Arsenal.png",
    content: `<p>Introducing our second patch! Today’s patch consists of minor changes that will have an enormous impact.</p>
<p>Patch 0.1.2 focuses on fixing issues that previously prevented our amazing vikings from further progressing in the game:</p>
<ul>
<li>Fixed an issue that caused in-game levels to run out-of-sync compared to their blockchain equivalent.</li>
<li>Fixed an issue with the reroll button not working.</li>
<li>Improved Metamask RPC call stability.</li>
</ul>
<p>We are excited to see you explore the rest of the content in the game and see how far you can get with your Vera.</p>
<p>As always, feel free to communicate with us any other issues or bugs you encounter through our community’s discord: <a href="https://discord.gg/NJXccsQSfg">https://discord.gg/NJXccsQSfg</a></p>
<p>Until our next patch!</p>
<p>The Valhalla Team</p>
<p style="text-align: center;"><img src="news-4/VeraOverview_Bear.jpg" alt=""></p>`,
  },
  {
    id: 3,
    title: "Patch Notes 0.1.1",
    caption: "Published on 03-03-2022",
    tags: ["Patch Notes"],
    coverUrl: "/news/news-3/Knockup-ability.png",
    content: `<p>After a couple of days of watching Vikings enjoy the release of Valhalla, we believe it’s time to release our first patch.</p>
<p>Patch 0.1.1 will focus on fixing the most important issues and bugs in the game to ensure that every one of you have the best experience possible while playing. The list of changes are the following:</p>
<ul>
<li>Improved error handling and stability on MetaMask RPC calls.</li>
<li>Fixed player control panel animation issue.</li>
<li>Fixed disappearing experience issue.</li>
<li>Fixed first win of the day bonus experience issue.</li>
<li>Fixed inconsistent personality being set for certain Vera issues.</li>
<li>Fixed players being put into overview whilst actually being in combat on (accidental) refresh of the page.</li>
<li>Fixed match forfeit causing the game to no longer progress.</li>
</ul>
<p>This patch will ensure that you have a better experience when playing Valhalla, and allow you to progress further into the game to find out all the other great features we have implemented.</p>
<p>We hope you continue to have an enjoyable time testing our game. Please feel free to communicate with us any other issues or bugs you encounter through our community’s discord: <a href="https://discord.gg/NJXccsQSfg">https://discord.gg/NJXccsQSfg</a></p>
<p>Until our next patch!</p>
<p>Much love,
The Valhalla Team</p>`,
  },
  {
    id: 2,
    title: "Release Notes",
    caption: "Published on 02-28-2022",
    tags: ["Patch Notes"],
    coverUrl: "/news/news-2/Styleframe-BattleArena.png",
    content: `<p>Welcome to Valhalla and thank you for joining us. Our game is slowly but steadily growing and it is finally time to get feedback from our amazing vikings.</p>
<p>Here is what you should expect in the game:</p>
<p><strong>Two Veras: Bjørn and Madhattr</strong></p>
<ul>
<li>Bjørn will be our melee vera that focuses on getting close range.</li>
<li>Madhattr aims to be our ranged Veras having abilities that allows you to stay long range</li>
</ul>
<p><strong>Bjørn Abilities: Roar, Double Claw, Trap, Knock-up</strong></p>
<ul>
<li>Roar: A line attack dealing damage to enemies across 2 tiles.</li>
<li>Double Claw: Choose two out of six adjacent tiles around your Vera to deal heavy damage.</li>
<li>Trap: placed on one of the six adjacent hexagons which isn’t shown to your opponent.</li>
<li>Knock-Up: Bjørn can pull enemies towards him within a range of 4 tiles.</li>
</ul>
<p><strong>Madhattr Abilities: Arcane Missile, Arcane Bomb, Redirect, Teleport</strong></p>
<ul>
<li>Arcane missile: Shoot out a projectile crossing all tiles in a straight line until it reaches a vera or the edge of the map.</li>
<li>Arcane bomb: Throw out a large magical bomb that slowly moves one tile each turn until it reaches a vera or the edge of the map.</li>
<li>Redirect: Change the direction of the arcane bomb.</li>
<li>Teleport: Move your vera to any tile in a four tile radius.</li>
</ul>
<p><strong>Runes: Hail, Nature and Sun; each with a unique ability</strong></p>
<ul>
<li>Hail, Hailstorm: Choose 3 adjacent tiles globally to summon a hailstorm that deals damage to enemy Vera within.</li>
<li>Nature, Earthquake: A two-turn ability that causes damage on the tiles around the Vera on the first turn and damage on the tiles in a ring around that the turn after.</li>
<li>Sun, Sunbeam: Cast beams from the sun to 5 tiles in a line starting from 2 tiles adjacent to the vera.</li>
</ul>
<p><strong>Two potions: Healing and Charge</strong></p>
<ul>
<li>Healing Potion will heal 25% of the player’s total health. </li>
<li>Charge Potion will recharge the player 20 points.</li>
</ul>
<p><strong>Map Shrinking at rounds 10, 15 and 18</strong></p>
<p><strong>Personalities: Shy, Seriousness, and Aggressive</strong></p>
<p><strong>Adaptive Music (Including but not limited to)</strong></p>
<ul>
<li>Men of Asgard</li>
<li>Berserker</li>
<li>Thor’s Hammer</li>
</ul>
<p style="text-align: center;"><img src="news-2/Ingame1.png" alt=""></p>
<hr>
<p>We are still going through the process of making this vision come true and understand that this will be a bumpy road. We are hoping that we could work together and find the bugs and errors. For now, you can expected the following issues in the game:</p>
<ul>
<li>When an ability is played over a tile that is shaking due to Earthquake, the ability’s visual effect will shake with the Earthquake.</li>
<li>Veras don’t always rotate when using abilities.</li>
<li>When two Veras stand on the same hexagon you can see the veras clipping through each other in the smoke.</li>
<li>During the Vera collision, if a close shot camera appears there is a chance for it to spin out of control.</li>
<li>Sometimes blockchain verification will fail causing players to not gain XP after a victory.</li>
<li>Metamask sometimes might not work correctly (VeraGeneration, Rerolling, Find Match).</li>
</ul>
<p>If you find any other bugs, errors, or issues please do not hesitate to inform us. You can join the Valhalla discord server to contact us and stay in contact with the community.</p>
<p><strong>Discord invite:</strong> <a href="https://discord.gg/NJXccsQSfg">https://discord.gg/NJXccsQSfg</a></p>`,
  },
  {
    id: 1,
    title: "The Real Beginning",
    caption: "Published on 02-28-2022",
    tags: ["Article"],
    coverUrl: "/news/news-1/island_town.png",
    content: `<p>Once upon a time, when nothing existed, the universe consisted of an immense and sacred ash tree called Yggdrasil. This sacred tree was surrounded by the vast and endless void, Ginnungagap. In the void, magic, commonly called seiðr, existed and created the first two realms, Niflheim and Muspelheim.  </p>
<p>All realms are unified through the roots of Yggdrasil, including the other realms that were later created with the body of Ymir. The same seiðr that created the first two realms forged a being called Floki Inu, which resided in an undiscovered realm now known as Veraheim. Floki Inu wanted to discover everything about this realm, so for centuries he wandered through all the woods, mountains, seas, and skies until he knew everything like the palm of his hand. They believed that this realm was ready for life, so Floki Inu asked the gods and giants to help him but was quickly rejected by both. Yet, Loki got word of Floki Inu’s plan and became interested, so he decided to teach Floki Inu a way to create life by altering inanimate objects.</p>
<p>For months Floki Inu practised this technique to perfection, creating many sorts of creatures, all unique with different natures and personalities. These creatures were later on named Vera and roam freely all around Veraheim. While Floki Inu was training, the other realms grew tireless and wanted to wage war on the great nine realms however knew this would be impossible without help. They came up with a plan to trick Floki Inu into giving them the Vera as guardians for protection against evil forces. Odin learned of this treachery and immediately retaliated by cutting down the roots connecting these realms to Yggdrasil, releasing them into Ginnungagap. Freya knew about the deception that Floki Inu fell for and stopped Odin from cutting its root completely, saving Veraheim. The damaged root caused the realm to drift further from Yggdrasil and make it nearly impossible for anyone to reach Asgard from Veraheim.</p>
<p style="text-align: center;"><img src="news-1/IntroScreen.jpg" alt=""></p>
<p>Odin only allows the strongest and smartest vikings to enter Veraheim, giving them trusty Vera companions to go through battles and become stronger together. Your goal is to gain as much experience as you can to become the smartest and strongest Viking.</p>
<blockquote>
<p>“I am a Viking! From the moment you join this community you become
part of the Viking Family. We don’t judge or discriminate, we’re
connected by the fact that we are all gamers by heart.”
<em>~Mrbrownwhale</em></p>
</blockquote>
<p>Valhalla is a strategy game that requires continuous thinking and future predictions. It’s a real-time turn based game where your opponent and yourself move at the same time. Before each battle, make sure to choose your Vera and abilities from your arsenal. When you are ready to play you are presented with a hexagonal grid arena. Starting from opposite sides, your opponent and yourself have five actions to choose from every turn: attack with an ability, move to a possible hexagon, use a potion, skip, or surrender. Your aim is to defeat the other Vera by reducing their health to zero. If you win you will gain experience, levelling up your Vera. You will gain rewards depending on level including abilities, animations, sounds, and extra stats allocations.</p>
<p style="text-align: center;"><img src="news-1/ability-showcase2.png" alt=""></p>
<blockquote>
<p>“Our goal is to find a new way for others to earn a living. We wanted
to show that NFT’s aren’t just JPEGs and can be so much more. This is
why we are trying our best to make a successful blockchain game that
will be fun and innovative.” 
<em>~Jackie</em></p>
</blockquote>
<p>Valhalla uses an adaptive music approach to maximise the player experience. Based on the state of the game, the music adapts in a vertical way; adding new musical layers. This interactive way of approach makes every state of the game slightly unique. With the random scattered layers on top of the base loop, it gives an even more interesting texture every time you play. This way, you experience slight differences even when thinking about your next move.</p>
<p>Besides the original battle loop, players can earn new battle songs when progressing through your Vera levels. This way you can choose your favourite song that gets you in the mood for battle.</p>
<p>The music, sound design, abilities and UI sounds have viking-like characteristics. It’s a remarkable mix between real live recordings and digital plugins. The combination of both gives an authentic but modern experience.</p>
<iframe width="80%" height="500" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1221084289%3Fsecret_token%3Ds-JFysIlOj3R9&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true%22%3E"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space:nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/valhalla-the-game" title="Valhalla" target="_blank" style="color: #cccccc; text-decoration: none;">Valhalla</a><a href="https://soundcloud.com/valhalla-the-game/flying-crows/s-JFysIlOj3R9" title="Flying Crows" target="_blank" style="color: #cccccc; text-decoration: none;">Flying Crows</a></div>`,
  },
];

export const DEFAULT_NEWS_DATA = NEWS_DATA[0];
