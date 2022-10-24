export const NEWS_DATA = [
  {
    id: 9,
    title: "Patch Notes 0.3.0",
    caption: "Published on 08-10-2022",
    tags: ["Patch Notes"],
    coverUrl: "/news/news-9/cover.png",
    content: ``,
  },
  {
    id: 8,
    title: "Patch Notes 0.2.1",
    caption: "Published on 07-25-2022",
    tags: ["Patch Notes"],
    coverUrl: "/news/news-8/cover.png",
    content: ``,
  },
  {
    id: 7,
    title: "Skaerrót Release",
    caption: "Published on 07-25-2022",
    tags: ["Patch Notes"],
    coverUrl: "/news/news-7/cover.png",
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
  },
  {
    id: 4,
    title: "Patch Notes 0.1.2",
    caption: "Published on 03-07-2022",
    tags: ["Patch Notes"],
    coverUrl: "/news/news-4/Bear_Arsenal.png",
  },
  {
    id: 3,
    title: "Patch Notes 0.1.1",
    caption: "Published on 03-03-2022",
    tags: ["Patch Notes"],
    coverUrl: "/news/news-3/Knockup-ability.png",
  },
  {
    id: 2,
    title: "Release Notes",
    caption: "Published on 02-28-2022",
    tags: ["Patch Notes"],
    coverUrl: "/news/news-2/Styleframe-BattleArena.png",
  },
  {
    id: 1,
    title: "The Real Beginning",
    caption: "Published on 02-28-2022",
    tags: ["Article"],
    coverUrl: "/news/news-1/island_town.png",
  },
];

export const DEFAULT_NEWS_DATA = NEWS_DATA[0];
