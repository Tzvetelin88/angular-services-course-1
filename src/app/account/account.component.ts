import { Component, Input } from "@angular/core";
import { AccountService } from "../accounts.service";
import { LoggingService } from "../logging.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
  // providers: [LoggingService, AccountService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    // private loggingService: LoggingService,
    private accountServices: AccountService
  ) {}

  onSetTo(status: string) {
    this.accountServices.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountServices.statusUpdated.emit(status);
  }
}
