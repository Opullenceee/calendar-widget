<div align="center">

#  Calendar Widget

*A lightweight, always-on-top desktop calendar widget built with Electron.*

A retro-inspired pixel desktop widget featuring a live clock, calendar, transparent background, and draggable interface.

![Platform](https://img.shields.io/badge/Platform-Windows-0078D6?style=for-the-badge)
![Electron](https://img.shields.io/badge/Electron-v37-47848F?style=for-the-badge\&logo=electron)
![License](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)
![Made With](https://img.shields.io/badge/Made%20With-HTML%20%7C%20CSS%20%7C%20JavaScript-orange?style=for-the-badge)

</div>

---

## Overview

**Calendar Widget** is a minimalist desktop widget designed for Windows. It displays the current time and date inside a beautiful retro pixel-art interface while remaining lightweight, transparent, and always visible on your desktop.

Perfect for users who enjoy aesthetic desktop setups.

---

# ✨ Features

| Feature                   | Description                                            |
| :------------------------ | :----------------------------------------------------- |
|  Live Clock             | Updates every second with the current time.            |
|  Live Calendar          | Displays weekday, date, month, and year automatically. |
|  Pixel Design           | Styled using the **Press Start 2P** pixel font.        |
|  Always on Top          | Stays above all other windows.                         |
|  Frameless Window       | No Windows borders or title bar.                       |
|  Transparent Background | Blends naturally into your desktop.                    |
|  Draggable             | Move the widget anywhere on the screen.                |
|  Lightweight             | Small memory footprint and fast startup.               |

---

# 🛠️ Tech Stack

| Technology       | Purpose                         |
| ---------------- | ------------------------------- |
| Electron         | Desktop application framework   |
| HTML5            | Widget structure                |
| CSS3             | Styling and animations          |
| JavaScript       | Clock logic and interactions    |
| electron-builder | Windows packaging and installer |

---

# 📁 Project Structure

```text
pixel-calendar/
│
├── assets/
│   ├── preview.png
│   └── icons/
│
├── index.html
├── styles.css
├── renderer.js
├── preload.js
├── main.js
├── package.json
├── package-lock.json
└── README.md
```

---

#  Getting Started

## Prerequisites

Before running the project, install:

* Node.js **18+**
* npm

---

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/calendar-widget.git
```

Go into the project folder:

```bash
cd calendar-widget
```

Install dependencies:

```bash
npm install
```

---

# ▶️ Running the App

Development mode:

```bash
npm start
```

or

```bash
npm run dev
```

Electron will automatically launch the desktop widget.

---

# 📦 Build

Create a Windows installer:

```bash
npm run build
```

The generated installer will be located inside:

```text
dist/
```

Packaging is handled by **electron-builder**.

---

#  Usage

| Action       | How                                      |
| ------------ | ---------------------------------------- |
| Move Widget  | Drag the title bar                       |
| Close Widget | Click the **✕** button                   |
| Keep Visible | Enabled automatically with Always-on-Top |
| View Time    | Updates every second                     |

---

# ⚙️ Configuration

The widget can be customized from the following files:

| File           | Purpose                     |
| -------------- | --------------------------- |
| `main.js`      | BrowserWindow configuration |
| `renderer.js`  | Clock & calendar updates    |
| `styles.css`   | Widget appearance           |
| `package.json` | Build configuration         |

---

# 🔒 Security

The project follows Electron security best practices.

| Feature                   | Status |
| ------------------------- | :----: |
| Context Isolation         |    ✅   |
| Node Integration Disabled |    ✅   |
| Secure IPC Bridge         |    ✅   |
| Context Bridge API        |    ✅   |

---

# 🗺️ Roadmap

* [x] Live clock
* [x] Live calendar
* [x] Transparent window
* [x] Always-on-top support
* [x] Draggable widget

---

# Contributing

Contributions are welcome!

If you would like to improve the project:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Push to your fork.
5. Open a Pull Request.

---

# 📄 License

This project is licensed under the **MIT License**.

See the **LICENSE** file for more information.

---

# Author

**Izza**
