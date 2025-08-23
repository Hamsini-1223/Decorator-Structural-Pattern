// main.ts - Interactive Console Demo
import * as readline from "readline";
import { BasicPerson } from "./BasicPerson";
import { Sweater } from "./Sweater";
import { Jacket } from "./Jacket";
import { Hat } from "./Hat";
import { Person } from "./Person";

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let currentPerson: Person;

// Helper function to show current status
function showStatus() {
  console.log(`\n👤 Current Status: ${currentPerson.getDescription()}`);
  console.log(`🌡️  Warmth Level: ${currentPerson.getWarmth()}`);

  // Give warmth feedback
  const warmth = currentPerson.getWarmth();
  if (warmth === 0) {
    console.log("🥶 You're freezing! You need some clothes!");
  } else if (warmth <= 20) {
    console.log("❄️  Still pretty cold. Maybe add more layers?");
  } else if (warmth <= 40) {
    console.log("😊 Getting warmer! You're comfortable.");
  } else if (warmth <= 60) {
    console.log("🔥 Nice and warm! Perfect for cold weather.");
  } else {
    console.log("🌋 You're really hot! Maybe too many layers?");
  }
}

// Main menu
function showMenu() {
  console.log("\n=== What would you like to do? ===");
  console.log("1. Put on a Sweater (+20 warmth)");
  console.log("2. Put on a Jacket (+30 warmth)");
  console.log("3. Put on a Hat (+10 warmth)");
  console.log("4. Check current status");
  console.log("5. Start over with a new person");
  console.log("6. Exit");
  console.log("=====================================");
}

// Handle user choice
function handleChoice(choice: string) {
  switch (choice.trim()) {
    case "1":
      currentPerson = new Sweater(currentPerson);
      console.log("\n🧥 You put on a sweater!");
      showStatus();
      break;
    case "2":
      currentPerson = new Jacket(currentPerson);
      console.log("\n🧥 You put on a jacket!");
      showStatus();
      break;
    case "3":
      currentPerson = new Hat(currentPerson);
      console.log("\n🎩 You put on a hat!");
      showStatus();
      break;
    case "4":
      showStatus();
      break;
    case "5":
      startNewPerson();
      return;
    case "6":
      console.log("\n👋 Thanks for trying the Decorator Pattern! Goodbye!");
      rl.close();
      return;
    default:
      console.log("\n❌ Invalid choice. Please enter 1-6.");
  }

  // Show menu again
  showMenu();
  askForChoice();
}

// Ask for user's choice
function askForChoice() {
  rl.question("\nEnter your choice (1-6): ", handleChoice);
}

// Start with a new person
function startNewPerson() {
  rl.question("\nWhat's your name? ", (name: string) => {
    if (name.trim() === "") {
      name = "Anonymous";
    }

    currentPerson = new BasicPerson(name.trim());
    console.log(`\n🎉 Hello ${name}! You're starting with no clothes.`);
    showStatus();
    showMenu();
    askForChoice();
  });
}

// Welcome message and start
function start() {
  console.log("👕🧥🎩 INTERACTIVE DECORATOR PATTERN DEMO 🎩🧥👕");
  console.log("================================================");
  console.log("Welcome to the Clothing Decorator Pattern!");
  console.log("You can put on different clothes to stay warm.");
  console.log("Each piece of clothing 'decorates' you with extra warmth!");

  startNewPerson();
}

// Start the interactive demo
start();
