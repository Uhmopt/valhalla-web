import "@justinribeiro/lite-youtube";
import React from "react";
import madhatrAttack from "../../../assets/madhatr-attack.jpg";
import madhatrOverview from "../../../assets/madhatr-overview.jpg";
import tacticalCombat from "../../../assets/tactical-combat.jpg";
import Background from "../../../components/Background";
import HomeArticle from "../../../components/HomeArticle";
import LandingContainer from "../../../components/LandingContainer";
import LandingHeader from "../../../components/LandingHeader";
import EnterVideo from "./EnterVideo";

export default function Home() {
  return (
    <div>
      <LandingHeader>
        <Background />
        <EnterVideo />
      </LandingHeader>

      <LandingContainer>
        {[
          {
            title: "Tactical Combat",
            texts: [
              `Valhalla is a turn-based combat game that focuses on testing your tactical abilities. Apart from utilizing your Vera’s magical abilities to damage your opponent, outwitting them on a tactical level is a key component in determining the outcome of a battle.`,
              `Every decision, step and turn counts. So make sure you plan your every move and predict opponent’s actions.`,
            ],
            img: { src: tacticalCombat, alt: "key selling point preview" },
          },
          {
            title: "Gamefi",
            texts: [
              `Valhalla runs on the blockchain, so all battles will be processed on the blockchain. This ensures that all stats and battles remain verifiably fair, and also allows you to actually write Valhalla history on the blockchain with your battles.`,
              `Veras will be unique, upgradeable NFTs due to their graphics, runes, stats and abilities.You can level-up a Vera and unlock even more assets for it, making your Vera NFT even more rare.`,
              `It’s currently free-to-play, as we run on L2 Optimism Kovan Testnet. Just click on the game tab and try out this unique turn-based combat experience on the blockchain.`,
            ],
            img: { src: madhatrOverview, alt: "key selling point preview" },
          },
          {
            title: "Immersive Experience",
            texts: [
              `You will be entering one of the first Metaverses which is actually designed to be a fun game instead of just another virtual representation of the real world.`,
              `Intense music, entertaining gameplay and amazing visuals will allow you to feel part of the magical world of Valhalla. Together, with your unique Vera, you will be able to beat any opponent that comes your way.`,
            ],
            img: { src: madhatrAttack, alt: "key selling point preview" },
          },
        ].map((item, itemIndex) => (
          <HomeArticle
            key={itemIndex}
            title={item.title}
            texts={item.texts}
            img={item.img}
          />
        ))}
      </LandingContainer>
    </div>
  );
}
