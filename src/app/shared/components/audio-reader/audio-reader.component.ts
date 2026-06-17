import { Component, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-audio-reader',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: `
    <div class="audio-reader-container">
      <button mat-button class="audio-btn play-btn" (click)="toggleVoice()" [attr.aria-label]="isPlaying ? 'Pause reading' : 'Start reading'">
        <mat-icon>{{ isPlaying ? 'pause' : 'volume_up' }}</mat-icon>
        <span>{{ isPlaying ? 'Pause' : 'Listen' }}</span>
      </button>
      <button mat-button class="audio-btn stop-btn" (click)="stopVoice()" *ngIf="isPlaying || isPaused" aria-label="Stop reading">
        <mat-icon>stop</mat-icon>
        <span>Stop</span>
      </button>
    </div>
  `,
  styles: [`
    .audio-reader-container {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0.5rem 0;
    }
    .audio-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      border-radius: var(--radius-md, 0.5rem);
      padding: 0.5rem 1rem;
      font-weight: 500;
      transition: all var(--transition-speed, 0.2s);
    }
    .play-btn {
      background-color: var(--color-accent);
      color: var(--color-white, #ffffff);
    }
    .play-btn:hover {
      filter: brightness(0.9);
    }
    .stop-btn {
      background-color: #e74c3c;
      color: #ffffff;
    }
    .stop-btn:hover {
      background-color: #c0392b;
    }
  `]
})
export class AudioReaderComponent implements OnDestroy {
  @Input() text: string = '';
  @Input() elementId: string = '';

  isPlaying = false;
  isPaused = false;
  private utterance: SpeechSynthesisUtterance | null = null;

  toggleVoice(): void {
    let textToSpeak = this.text;
    
    if (this.elementId) {
      const element = document.getElementById(this.elementId);
      if (element) {
        textToSpeak = element.innerText;
      }
    }

    if (!textToSpeak) {
      console.warn('AudioReader: No text specified to read.');
      return;
    }

    if (!this.utterance) {
      speechSynthesis.cancel();
      this.utterance = new SpeechSynthesisUtterance(textToSpeak);
      this.utterance.lang = 'en-US';
      
      this.utterance.onend = () => {
        this.resetState();
      };
      
      this.utterance.onerror = () => {
        this.resetState();
      };

      speechSynthesis.speak(this.utterance);
      this.isPlaying = true;
      this.isPaused = false;
    } else if (speechSynthesis.paused) {
      speechSynthesis.resume();
      this.isPlaying = true;
      this.isPaused = false;
    } else {
      speechSynthesis.pause();
      this.isPlaying = false;
      this.isPaused = true;
    }
  }

  stopVoice(): void {
    speechSynthesis.cancel();
    this.resetState();
  }

  private resetState(): void {
    this.utterance = null;
    this.isPlaying = false;
    this.isPaused = false;
  }

  ngOnDestroy(): void {
    if (this.isPlaying || this.isPaused) {
      speechSynthesis.cancel();
    }
  }
}
