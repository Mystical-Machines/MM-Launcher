<p align="center"><img src="https://mysticalmachines.com/wp-content/uploads/2020/01/mysticalmachines-logo.png" height="150px" alt="mysticalmachines logo"></p>

<h1 align="center">Mystical Machines Launcher</h1>

<em><h5 align="center"><a href="https://github.com/dscalzi/HeliosLauncher">Modified from HeliosLauncher</a></h5></em>

<!-- [<p align="center"><img src="https://img.shields.io/travis/dscalzi/HeliosLauncher.svg?style=for-the-badge" alt="travis">](https://travis-ci.org/dscalzi/HeliosLauncher) [<img src="https://img.shields.io/github/downloads/dscalzi/HeliosLauncher/total.svg?style=for-the-badge" alt="downloads">](https://github.com/dscalzi/HeliosLauncher/releases) <img src="https://forthebadge.com/images/badges/winter-is-coming.svg"  height="28px" alt="stark"></p> -->

<p align="center">Join Mystical Machines' servers easily and keep up to date with our packs and fixes!</p>

## Downloads

You can download from [GitHub Releases](/releases)

## Development (Mystical Machines fork)

All Mystical Machines-specific changes (UI, assets, default configuration, etc..) will be in the master branch.

A development branch **mr-features** will be used to work on new additions to the core mechanics of the original project (as below) and will keep up to date with the original project. We may submit features from this branch as a PR to the original project.

#### Latest Release

Coming Soon!

<!-- [![](https://img.shields.io/github/release/dscalzi/HeliosLauncher.svg?style=flat-square)](https://github.com/dscalzi/HeliosLauncher/releases/latest) -->

**Supported Platforms**

If you download from the [Releases](/releases) tab, select the installer for your system.

| Platform    | File                                     |
| ----------- | ---------------------------------------- |
| Windows x64 | `Mystical-Machines-Launcher-Setup-VERSION.exe`       |
| macOS       | `Mystical-Machines-Launcher-VERSION.dmg`             |
| Linux x64   | `Mystical-Machines-Launcher-VERSION.AppImage` |

## Console

To open the console, use the following keybind.

```console
ctrl + shift + i
```

Ensure that you have the console tab selected. Do not paste anything into the console unless you are 100% sure of what it will do. Pasting the wrong thing can expose sensitive information.

#### Export Output to a File

If you want to export the console output, simply right click anywhere on the console and click **Save as..**

![console example](https://i.imgur.com/T5e73jP.png)

## Help

For help regarding this version (Mystical Machines' fork), contact the staff on the discord server below:

[![discord](https://discordapp.com/api/guilds/676145339543060519/embed.png?style=banner2)][discord]

## Original Authors

This project is forked from HeliosLauncher, a project by dscalzi for the server WesterosCraft. Please visit and support their project at the links below!

- [Project Link][original]
- [Original Project Wiki][wiki]
- [Aventium Softworks Discord](https://discord.gg/zNWUXdt)

[discord]: https://discord.mysticalmachines.com "Mystical Machines Discord"
[discord]: https://discord.gg/zNWUXdt "Original Project Discord"
[original]: https://github.com/dscalzi/HeliosLauncher "Original Project GitHub"
[fork]: https://github.com/ModRealms-Network/ModRealmsLauncher "Forked Project from Modrealms"

```console
> git clone https://github.com/dscalzi/HeliosLauncher.git
> cd HeliosLauncher
> npm install
```

---

**Launch Application**

```console
> npm start
```

---

**Build Installers**

To build for your current platform.

```console
> npm run dist
```

Build for a specific platform.

| Platform    | Command              |
| ----------- | -------------------- |
| Windows x64 | `npm run dist:win`   |
| macOS       | `npm run dist:mac`   |
| Linux x64   | `npm run dist:linux` |

Builds for macOS may not work on Windows/Linux and vice-versa.

---

### Visual Studio Code

All development of the launcher should be done using [Visual Studio Code][vscode].

Paste the following into `.vscode/launch.json`

```JSON
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Main Process",
      "type": "node",
      "request": "launch",
      "cwd": "${workspaceFolder}",
      "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
      "windows": {
        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron.cmd"
      },
      "args": ["."],
      "console": "integratedTerminal",
      "protocol": "inspector"
    },
    {
      "name": "Debug Renderer Process",
      "type": "chrome",
      "request": "launch",
      "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron",
      "windows": {
        "runtimeExecutable": "${workspaceFolder}/node_modules/.bin/electron.cmd"
      },
      "runtimeArgs": [
        "${workspaceFolder}/.",
        "--remote-debugging-port=9222"
      ],
      "webRoot": "${workspaceFolder}"
    }
  ]
}
```

This adds two debug configurations.

#### Debug Main Process

This allows you to debug Electron's [main process][mainprocess]. You can debug scripts in the [renderer process][rendererprocess] by opening the DevTools Window.

#### Debug Renderer Process

This allows you to debug Electron's [renderer process][rendererprocess]. This requires you to install the [Debugger for Chrome][chromedebugger] extension.

Note that you **cannot** open the DevTools window while using this debug configuration. Chromium only allows one debugger, opening another will crash the program.

---

### Note on Third-Party Usage

You may use this software in your own project so long as the following conditions are met.

- Credit is expressly given to the original authors (Daniel Scalzi).
  - Include a link to the original source on the launcher's About page.
  - Credit the authors and provide a link to the original source in any publications or download pages.
- The source code remain **public** as a fork of this repository.

We reserve the right to update these conditions at any time, please check back periodically.

---

<!--## Resources-->

<!--- [Wiki][wiki]
- [Nebula (Create Distribution.json)][nebula]
- [v2 Rewrite Branch (WIP)][v2branch]
-->
The best way to contact the developers is on Discord.

[![discord](https://discordapp.com/api/guilds/211524927831015424/embed.png?style=banner3)][discord]

---

### See you ingame.

[nodejs]: https://nodejs.org/en/ "Node.js"
[vscode]: https://code.visualstudio.com/ "Visual Studio Code"
[mainprocess]: https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes "Main Process"
[rendererprocess]: https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes "Renderer Process"
[chromedebugger]: https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome "Debugger for Chrome"
[discord]: https://discord.gg/zNWUXdt "Discord"
[wiki]: https://github.com/dscalzi/HeliosLauncher/wiki "wiki"
