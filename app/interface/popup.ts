// ============================================
// FILE: src/app/types/popup.ts
// ============================================
import { MediaItem } from "./MediaItem";

export interface PopUp {
  date: string;
  title: string;
  location: string;
  partner: string;
  media: MediaItem[];
}
