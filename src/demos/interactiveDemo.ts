import * as readline from "readline";
import { BasicPerson } from "../models/basicPerson";
import { Sweater } from "../models/sweater";
import { Jacket } from "../models/jacket";
import { Hat } from "../models/hat";
import { Person } from "../models/person";
import { handleError } from "../utils/errorHandler";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let currentPerson: Person;

function showStatus(): void {
  try {
    console.log(`\nCurrent Status: ${currentPerson.getDescription()}`);
    console.log(`Warmth Level: ${currentPerson.getWarmth()}`);

    const warmth = currentPerson.getWarmth();
    if (warmth === 0) {
      console.log("You're freezing! You need some clothes!");
    } else if (warmth <= 20) {
      console.log("Still pretty cold. Maybe add more layers?");
    } else if (warmth <= 40) {
      console.log("Getting warmer! You're comfortable.");
    } else if (warmth <= 60) {
      console.log("Nice and warm! Perfect for cold weather.");
    } else {
      console.log("You're really hot! Maybe too many layers?");
    }
  } catch (error) {
    handleError(error, "Status Display");
  }
}

function showMenu(): void {
  console.log("\n=== What would you like to do? ===");
  console.log("1. Put on a Sweater (+20 warmth)");
  console.log("2. Put on a Jacket (+30 warmth)");
  console.log("3. Put on a Hat (+10 warmth)");
  console.log("4. Check current status");
  console.log("5. Start over with a new person");
  console.log("6. Exit");
  console.log("=====================================");
}

function handleChoice(choice: string): void {
  try {
    switch (choice.trim()) {
      case "1":
        currentPerson = new Sweater(currentPerson);
        console.log("\nYou put on a sweater!");
        showStatus();
        break;
      case "2":
        currentPerson = new Jacket(currentPerson);
        console.log("\nYou put on a jacket!");
        showStatus();
        break;
      case "3":
        currentPerson = new Hat(currentPerson);
        console.log("\nYou put on a hat!");
        showStatus();
        break;
      case "4":
        showStatus();
        break;
      case "5":
        startNewPerson();
        return;
      case "6":
        console.log("\nThanks for trying the Decorator Pattern! Goodbye!");
        rl.close();
        return;
      default:
        console.log("\nInvalid choice. Please enter 1-6.");
    }

    showMenu();
    askForChoice();
  } catch (error) {
    handleError(error, "Menu Choice Handling");
    showMenu();
    askForChoice();
  }
}

function askForChoice(): void {
  rl.question("\nEnter your choice (1-6): ", handleChoice);
}

function startNewPerson(): void {
  rl.question("\nWhat's your name? ", (name: string) => {
    try {
      const personName = name.trim() || "Anonymous";
      currentPerson = new BasicPerson(personName);
      console.log(`\nHello ${personName}! You're starting with no clothes.`);
      showStatus();
      showMenu();
      askForChoice();
    } catch (error) {
      handleError(error, "Person Creation");
      console.log("Using default name 'Anonymous'");
      currentPerson = new BasicPerson("Anonymous");
      showStatus();
      showMenu();
      askForChoice();
    }
  });
}

function start(): void {
  console.log("INTERACTIVE DECORATOR PATTERN DEMO");
  console.log("==================================");
  console.log("Welcome to the Clothing Decorator Pattern!");
  console.log("You can put on different clothes to stay warm.");
  console.log("Each piece of clothing 'decorates' you with extra warmth!");

  startNewPerson();
}

start();
