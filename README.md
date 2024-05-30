# 🤖 Chatbots Academic Exam

Live demo https://pexilo.github.io/chatbots/

## ⚡ About the Project

This project involves creating three interactive bots capable of responding to various commands. Each bot has specific functionalities:

1. **Vacations Bot**: Provides information on holidays in France.
2. **Player Stats Bot**: Offers game statistics for platforms like Steam, Minecraft, and Xbox.
3. **YesNo Bot**: Answers questions with "yes" or "no".

> Note that this project and its features are written in French 🥖

#### 📋 Requirements to Validate
https://docs.google.com/document/d/1heTQDwTp74eNlSB4l0NSd57VYKOk4R0BBSaOII8tj8k
 
## 🛠 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Pexilo/chatbots.git
   cd chatbots
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## 🔧 Usage

Run the application:
```bash
npm run dev
```

### ✨ Available Commands

#### 🏖️ Vacations Bot
- **hello**: Bot introduction.
- **help**: List of available commands.
- **next**: Upcoming holidays.
- **past**: Past holidays.
- **all**: All holidays.

#### 🎮 Player Stats Bot
- **hello**: Bot introduction.
- **help**: List of available commands.
- **steam 'playerId'**: Steam player statistics.
- **minecraft 'playerId'**: Minecraft player statistics.
- **xbox 'playerId'**: Xbox player statistics.

#### ✅❌ YesNo Bot
- **hello**: Bot introduction.
- **help**: List of available commands.
- **ask 'your phrase'**: Answers a question with "yes" or "no".
- **random**: Random "yes" or "no" answer.
- **guess 'yes'/'no'**: Guess if the answer is "yes" or "no".

## 🧑‍💻 APIs

Fetches holidays from the [Nager.Date](https://date.nager.at) API.  
Fetches player statistics from [PlayerDB](https://playerdb.co).  
Answers "yes" or "no" from the [YesNo](https://yesno.wtf) API.  

## 🦾 Powered by

<div align="center" style="display:flex;">
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img alt="Javascript" src="https://github.com/Pexilo/Template-DJS14-Sheweny/assets/67436391/e3cabd2c-137b-4d53-bf04-970b234a1528" height=100 />
    </a>
    <a href="https://vitejs.dev/" target="_blank">
        <img alt="Vite" src="https://github.com/Pexilo/Template-DJS14-Sheweny/assets/67436391/bd05bf91-1ff8-4e2b-b11f-adf25be0a549" height=100 />
    </a>
    <a href="https://getbootstrap.com/" target="_blank">
        <img alt="Bootstrap" src="https://github.com/Pexilo/Template-DJS14-Sheweny/assets/67436391/c5e1c9ee-25b2-437d-9236-56088f903bc6" height=100 />
    </a>
</div>

---

Made with ❤️ by Pexilo
