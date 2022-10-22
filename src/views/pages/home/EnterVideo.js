import "@justinribeiro/lite-youtube";
import React from "react";
import Link from "../../../components/Link";

export default function EnterVideo() {
  return (
    <div className="jumbotron float-right col-lg-6 col-md-12">
      <p>Enter</p>
      <h1>Valhalla</h1>
      <lite-youtube
        class="video"
        videoid="tFYttbMnPn8"
        title="Play: Video"
      ></lite-youtube>
      <div className="play-button">
        <Link href="https://valhalla.game/game.html">
          <div className="skewed-btn-bg"></div>
        </Link>
        <p>Play</p>
      </div>
    </div>
  );
}
