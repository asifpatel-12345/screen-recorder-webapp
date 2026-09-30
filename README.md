# 🎥 Web Screen Recorder

A lightweight, modern, and privacy-focused web-based screen recorder built using vanilla HTML, CSS, and JavaScript. It allows users to record their screen, preview the recording in real-time, and download the output directly from their browser without installing any third-party extensions.

---

## 🚀 Features

- 🖥️ **Full Screen & Tab Capture:** Record your entire screen, specific application windows, or browser tabs.
- 🎙️ **Audio Support:** Capture system and microphone audio alongside video recording.
- 👁️ **Live Video Preview:** Watch live screen feed while recording and playback recorded video upon completion.
- 💾 **Instant Download:** Export recordings directly in `.webm` format.
- 📱 **Clean Responsive UI:** Dark-themed modern user interface with clear visual status indicators.
- 🔒 **100% Client-Side:** No server upload required; all recordings remain completely private on your local machine.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic layout and video rendering via `<video>` elements.
- **CSS3:** Responsive layout, flexbox styling, and UI animations.
- **JavaScript (ES6+):** Media Streams API (`getDisplayMedia`) and `MediaRecorder` API logic.

---

## 📂 Project Structure

```text
screen-recorder/
│
├── index.html        # UI Layout and Structure
├── style.css         # Dark theme and responsive styling
├── script.js        # Screen recording and media API integration
└── README.md         # Project documentation