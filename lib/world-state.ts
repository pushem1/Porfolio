"use client";

import { create } from "zustand";

export type WorldMode = "intro" | "services" | "projects" | "engineering" | "contact" | "inspect" | "terminal";
export type CameraMode = "idle" | "focus-node" | "focus-project" | "inspect" | "section-transition";
export type WorldEvent =
  | { type: "CORE_ACTIVATED" }
  | { type: "NODE_SELECTED"; id: string }
  | { type: "NODE_HOVER"; id: string | null }
  | { type: "PROJECT_INSPECT_OPEN"; id: string }
  | { type: "PROJECT_INSPECT_CLOSE" }
  | { type: "SECTION_ENTER"; mode: WorldMode }
  | { type: "TERMINAL_OPEN" | "TERMINAL_CLOSE" | "EASTER_EGG_DISCOVERED" };

type WorldState = {
  mode: WorldMode; cameraMode: CameraMode; hoveredObject: string | null; selectedObject: string | null;
  networkActivity: number; coreState: "idle" | "hover" | "charging" | "active"; terminalOpen: boolean;
  discoveries: { core: boolean; terminal: boolean; packet: boolean }; quality: "low" | "high";
  emit: (event: WorldEvent) => void;
};

export const useWorldStore = create<WorldState>((set) => ({
  mode: "intro", cameraMode: "idle", hoveredObject: null, selectedObject: null, networkActivity: .28,
  coreState: "idle", terminalOpen: false, discoveries: { core: false, terminal: false, packet: false },
  quality: "high",
  emit: (event) => set((state) => {
    switch (event.type) {
      case "CORE_ACTIVATED": return { coreState: "active", networkActivity: 1, selectedObject: "core", cameraMode: "section-transition", discoveries: { ...state.discoveries, core: true } };
      case "NODE_HOVER": return { hoveredObject: event.id };
      case "NODE_SELECTED": return { selectedObject: event.id, cameraMode: "focus-node", networkActivity: .85 };
      case "PROJECT_INSPECT_OPEN": return { mode: "inspect", selectedObject: event.id, cameraMode: "inspect", networkActivity: .7 };
      case "PROJECT_INSPECT_CLOSE": return { mode: "projects", cameraMode: "idle", selectedObject: null };
      case "SECTION_ENTER": return { mode: event.mode, cameraMode: "section-transition", networkActivity: event.mode === "contact" ? .22 : event.mode === "engineering" ? .95 : .55 };
      case "TERMINAL_OPEN": return { terminalOpen: true, mode: "terminal", discoveries: { ...state.discoveries, terminal: true } };
      case "TERMINAL_CLOSE": return { terminalOpen: false, mode: "intro", cameraMode: "idle" };
      case "EASTER_EGG_DISCOVERED": return { discoveries: { ...state.discoveries, packet: true }, networkActivity: 1 };
    }
  }),
}));
