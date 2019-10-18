import search from './search';
import jsyaml from 'js-yaml';

describe('search', () => {
  it('should run', () => {
    const testStr = 'Environment';
    const version = 'v3';
    const results = search(testStr, testData, version);
    const issues = Object.keys(results);

    let str = `Searching for ${testStr}; version ${version}\n\n`;
    issues.forEach(k => {
      str += `${k}:\n`;
      str += '  Tutorials:\n';
      results[k].tutorials.forEach(u => {
        str += `    ${u.name} (${u.version})\n`;
      });
      str += '  Updates:\n';
      results[k].updates.forEach(u => (str += `    ${u}\n`));
    });

    console.log(str);
  });
});

const testData = jsyaml.safeLoad(`
- Issue: 122
  Link: https://madmimi.com/p/abd23c
  Tutorials:
    - name: Minimap tutorial
      version: v3
      desc: Learn about some minimaps! Using Cameras and stuff!
      link: https://madmimi.com/p/abd23c

    - name: Modern tools!
      version: v3
      desc: A guide to setting-up a modern web dev environment for Phaser 3 development.
      link: https://phaser.io/news/2018/05/modern-web-dev-set-up-for-phaser-3
      directlink: https://snowbillr.github.io/blog/2018-04-09-a-modern-web-development-setup-for-phaser-3/

    - name: FB Instant Games in Phaser
      version: v3
      desc: A new tutorial on integrating Phaser with the Facebook Instant Games API.
      link: https://phaser.io/news/2018/05/fb-instant-games-in-phaser
      directlink: http://www.emanueleferonato.com/2018/03/28/how-to-integrate-facebook-instant-games-api-in-your-phaser-game/

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
`);
