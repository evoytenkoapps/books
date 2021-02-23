import {Component, EventEmitter, OnInit, Output} from "@angular/core";

@Component({
  selector: "app-tool-bar",
  templateUrl: "./tool-bar.component.html",
  styleUrls: ["./tool-bar.component.styl"],
})
export class ToolBarComponent implements OnInit {
  @Output() changeClick = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  public onCLick() {
    this.changeClick.emit();
  }
}
