import { Context, storage, logging } from "near-sdk-as";

export class Greeting {
  getGreeting(accountId: string): string | null {
    logging.log("Greeting for " + accountId);

    return storage.get<string>(accountId, "Greeting not available");
  }

  setGreeting(greeting: string): void {
    logging.log("Setting Greeting for " + Context.sender);
    storage.set(Context.sender, greeting);
  }
}
