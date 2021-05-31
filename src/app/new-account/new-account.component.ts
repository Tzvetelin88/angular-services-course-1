import { Component } from "@angular/core";
import { AccountService } from "../accounts.service";
import { LoggingService } from "../logging.service";

@Component({
  selector: "app-new-account",
  templateUrl: "./new-account.component.html",
  styleUrls: ["./new-account.component.css"],
  // passing Service to providers here, will make NEW instance as parent one, if we want the SAME instance, remove it only from providers, not the constructor!
  // providers: [LoggingService, AccountService],
})
export class NewAccountComponent {
  constructor(
    // private loggingService: LoggingService,
    private accountService: AccountService
  ) {
    this.accountService.statusUpdated.subscribe((status: string) =>
      alert(`New Status ${status}`)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // We moved loggingService to account.service
    // this.loggingService.logStatusChange(accountStatus);
  }
}
