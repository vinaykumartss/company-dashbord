import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports:[FormsModule, CommonModule]
})
export class HeaderComponent {
  availableYears: number[] = [2023, 2024, 2025];
  selectedYear: number = new Date().getFullYear();
  @Output() yearChanged = new EventEmitter<number>();

  onYearChange() {
    console.log('Selected year:', this.selectedYear);
    this.yearChanged.emit(this.selectedYear);  // emit to parent
  }
}
