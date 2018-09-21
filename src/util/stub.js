import jsyaml from 'js-yaml'

// TODO: remove this / replace it with a less verbose thing for testing

export const issues = jsyaml.safeLoad(`- Issue: 122
  Link: https://madmimi.com/p/abd23c
  Tutorials:
    - name: Tilemap Mini-Tutorial
      version: v3
      desc: Learn more about Tilemaps, including tilemap culling and tileset extrusion
      link: https://madmimi.com/p/abd23c

    - name: Modern Web Dev Set-up for Phaser 3
      version: v3
      desc: A guide to setting-up a modern web dev environment for Phaser 3 development.
      link: https://phaser.io/news/2018/05/modern-web-dev-set-up-for-phaser-3
      directlink: https://snowbillr.github.io/blog/2018-04-09-a-modern-web-development-setup-for-phaser-3/

    - name: FB Instant Games in Phaser
      version: v3
      desc: A new tutorial on integrating Phaser with the Facebook Instant Games API.
      link: https://phaser.io/news/2018/05/fb-instant-games-in-phaser
      directlink: http://www.emanueleferonato.com/2018/03/28/how-to-integrate-facebook-instant-games-api-in-your-phaser-game/

    - name: FB Instant Games Tutorial 2
      version: v3
      desc: Learn how to display the players name and profile picture in your game.
      link: https://phaser.io/news/2018/05/fb-instant-games-tutorial-2
      directlink: http://www.emanueleferonato.com/2018/04/05/how-to-integrate-facebook-instant-games-api-in-your-phaser-game-displaying-player-name-and-profile-picture/

    - name: FB Instant Games Tutorial 3
      version: v3
      desc: Learn how to save player data in your Facebook Instant Games.
      link: https://phaser.io/news/2018/05/fb-instant-games-tutorial-3
      directlink: http://www.emanueleferonato.com/2018/04/17/how-to-integrate-facebook-instant-games-api-in-your-phaser-game-saving-game-information/

    - name: Knife Hit Tutorial Part 1
      version: v3
      desc: Re-create the game Knife Hit using only tweens and trigonometry in Phaser 3.
      link: http://phaser.io/news/2018/05/knife-hit-tutorial-part-1
      directlink: http://www.emanueleferonato.com/2018/04/10/build-a-html5-game-like-knife-hit-with-phaser-3-using-only-tweens-and-trigonometry/

    - name: Knife Hit Tutorial Part 2
      version: v3
      desc: Re-create the game Knife Hit in Phaser 3. This time adding in hitting other knives.
      link: http://phaser.io/news/2018/05/knife-hit-tutorial-part-2
      directlink: http://www.emanueleferonato.com/2018/04/18/build-a-html5-game-like-knife-hit-with-phaser-3-using-only-tweens-and-trigonometry-hitting-knives/

    - name: Socket.io Phaser 3 Tutorial
      version: v3
      desc: Creating a basic multiplayer game with Socket.io and Phaser 3.
      link: http://phaser.io/news/2018/05/socket-io-phaser-3-tutorial
      directlink: https://gamedevacademy.org/create-a-basic-multiplayer-game-in-phaser-3-with-socket-io-part-1/?a=13

    - name: Socket.io Phaser 3 Tutorial Part 2
      version: v3
      desc: In part 2 of creating a multiplayer game with Socket.io and Phaser 3 it adds player removal, input and collectibles.
      link: http://phaser.io/news/2018/05/socket-io-phaser-3-tutorial-part-2
      directlink: https://gamedevacademy.org/create-a-basic-multiplayer-game-in-phaser-3-with-socket-io-part-2/?a=13

    - name: Phaser 3 Preloader Tutorial
      version: v3
      desc: How to create a Preloader Scene with progress bar in Phaser 3.
      link: http://phaser.io/news/2018/05/phaser-3-preloader-tutorial
      directlink: https://gamedevacademy.org/creating-a-preloading-screen-in-phaser-3/?a=13

    - name: 2048 Tutorial Part 1
      version: v3
      desc: A new tutorial series on re-creating the game 2048 in Phaser 3.
      link: http://phaser.io/news/2018/05/2048-tutorial-part-1
      directlink: http://www.emanueleferonato.com/2018/03/16/build-a-html5-game-like-2048-using-the-brand-new-phaser-3-2-1/

    - name: 2048 Tutorial Part 2
      version: v3
      desc: The second part of tutorial series on re-creating the game 2048 in Phaser 3 adds swipe controls and sprite sheets.
      link: http://phaser.io/news/2018/05/2048-tutorial-part-2
      directlink: http://www.emanueleferonato.com/2018/03/21/html5-2048-game-made-with-phaser-3-updated-adding-spritesheets-and-swipe-control/

  Updates:
    - Phaser World is back
    - New Phaser releases
    - Facebook Instant Games Plugin for 3.12
    - Scale Manager in 3.12

  Releases:
    - v3.7.0
    - v3.8.0
    - v3.9.0
    - v3.10.0
    - v3.10.1
    - v3.11.0
    - v2.10.6

- Issue: 121
  Link: https://madmimi.com/p/860f1c
  Tutorials:
    - name: Scenes Tutorial pt. 2
      version: v3
      desc: Learn more about Scene List and Scene Rendering
      link: https://madmimi.com/p/860f1c

    - name: Creating native mobile games with Phaser3 and Capacitor
      version: v3
      desc: Build a native mobile app with Typescript, Webpack, and Capacitor
      link: https://phaser.io/news/2018/04/capacitor-and-phaser-tutorial
      directlink: https://www.joshmorony.com/create-native-html5-games-with-phaser-and-capacitor/

    - name: A Sokoban tutorial update
      version: v3
      desc: Build an updated Sokoban game with new features and better efficiency!
      link: https://phaser.io/news/2018/04/sokoban-tutorial-update
      directlink: http://www.emanueleferonato.com/2018/03/08/html5-sokoban-prototype-built-with-phaser-3-updated-to-3-2-0-with-improved-undo-double-tap-control-pixel-art-mode-and-flashing-camera/

  Updates:
    - v3.7.0 development progress
    - Changes coming to Loader Plugin and File Types

- Issue: 120
  Link: https://madmimi.com/p/a2dddb
  Tutorials:
    - name: Platformer Tutorial
      version: v3
      desc: This guide teaches you how to make a mario-style platformer with Phaser3 and Tiled
      link: https://phaser.io/news/2018/04/phaser-3-platformer-tutorial
      directlink: https://gamedevacademy.org/how-to-make-a-mario-style-platformer-with-phaser-3/?a=13

    - name: Matter Physics
      version: v3
      desc: An introduction to the Matter.js physics engine; drop crates on crates!
      link: https://phaser.io/news/2018/04/matter-physics-example
      directlink: http://www.emanueleferonato.com/2018/02/21/your-first-phaser-3-matter-js-physics-example/

    - name: Learn Game Development with Catt Small
      version: v3
      desc: Introduction to Phaser and game development with Catt Small; video lecture
      link: https://phaser.io/news/2018/04/coding-train-tutorial
      directlink: https://blog.codepen.io/2018/04/10/phaser-game-development-with-catt-small/

    - name: Lighting Effects in Phaser3
      version: v3
      desc: Uses normal map texture to provide some depth to your 2D sprites.
      link: https://phaser.io/news/2018/04/light-effects-tutorial
      directlink: https://www.codeandweb.com/texturepacker/tutorials/how-to-create-light-effects-in-phaser3

    - name: Mobile Games with Phaser3 and Cordova
      version: v3
      desc: Get a basic game running on a mobile device with Cordova.
      link: https://phaser.io/news/2018/04/mobile-games-tutorial
      directlink: https://gamedevacademy.org/creating-mobile-games-with-phaser-3-and-cordova/?a=13

    - name: Recreate "Magick"
      version: v2
      desc: Simple game based on navigating a tilemap with an auto-walking player and dynamic obstacle.
      link: https://phaser.io/news/2018/04/magick-prototype-tutorial
      directlink: http://www.emanueleferonato.com/2018/01/29/build-a-html5-game-like-magick-ipad-game-using-phaser-and-arcade-physics-code-updated-and-new-features-added/

  Updates:
    - Containers, and an introduction!
    - Scene Transitions
    - Docs and Typescript

  Releases:
    - v3.6.0

- Issue: 119
  Link: https://madmimi.com/p/a2dddb
  Tutorials:
    - name: Scenes
      version: v3
      desc: Deep dive into how the Scene system works in Phaser 3
      link: https://madmimi.com/p/a2dddb

    - name: How to Create a Game with Phaser 3
      version: v3
      desc: Brief introduction to game and scene lifecycle. Starting from ground zero, comparable to the phaser.io "Making your first Phaser Game" series.
      link: https://phaser.io/news/2018/03/how-to-create-a-game-with-phaser-3
      directlink: https://gamedevacademy.org/phaser-3-tutorial/

    - name: Game distribution APIs
      desc: How to use the GameDistribution.com site to publicize and monetize your work
      link: https://phaser.io/news/2018/03/game-distribution-api-tutorial
      directlink: http://www.emanueleferonato.com/2018/01/23/step-by-step-guide-to-integrate-gamedistribution-api-in-your-html5-game/

    - name: Sprite sheets in Phaser3
      version: v3
      desc: Using TexturePacker to create sprite sheets (texture atlas) and use these in Phaser v3 for display & animation
      link: https://phaser.io/news/2018/03/texturepacker-and-phaser-3-tutorial
      directlink: https://www.codeandweb.com/texturepacker/tutorials/how-to-create-sprite-sheets-for-phaser3

    - name: An A to Z guide to pathfinding with Easystar and Phaser 3
      version: v3
      desc: How to use the Easystar library to handle path finding. Also touches on use of Tiled to assign custom tile properties.
      link: https://phaser.io/news/2018/03/pathfinding-and-phaser-3
      directlink: http://www.dynetisgames.com/2018/03/06/pathfinding-easystar-phaser-3/

  Updates:
    - API Docs
    - Typescript Definitions
    - Containers

  Releases:
    - v3.3.0
    - v2.10.3

- Issue: 118
  Link: https://madmimi.com/p/ff68db
  Tutorials:
    - name: Phaser 3 migration Guide, Part 2
      version: v3
      desc: A continuation of the discussion about the differences between v2 and v3.
      link: https://madmimi.com/p/ff68db

    - name: Animated Tiles from Tiled
      version: v3
      desc: Provides a plugin, and a guide to using it, that adds support for animated tiles as exported from Tiled.
      link: https://phaser.io/news/2018/03/phaser-3-animated-tiles-plugin
      directlink: https://github.com/nkholski/phaser-animated-tiles

    - name: Generating sprite sheets from Photoshop
      version: v2
      desc: Uses TexturePacker and Photoshop's layers to generate a sprite sheet. Contains bare bones demo of how to load the resulting atlas.
      link: https://phaser.io/news/2018/03/psd-parse-and-texturepacker-tutorial
      directlink: https://medium.com/@jeffreyroshan/generate-phaser-spritesheet-from-psd-layers-using-psdparse-texturepacker-6c7a3446a3d3

    - name: Recreating "Ballz" in Phaser, Part 3
      version: v2
      desc: Continuation of a full game prototype involving block-breaking multi-ball action
      link: https://phaser.io/news/2018/03/ballz-prototype-tutorial-part-3
      directlink: http://www.emanueleferonato.com/2018/01/16/build-a-html5-game-like-ballz-using-phaser-and-arcade-physics-adding-multiball/

  Updates:
    - Docs
    - Containers

  Releases:
    - v3.2.1
    - v2.10.1
  `)