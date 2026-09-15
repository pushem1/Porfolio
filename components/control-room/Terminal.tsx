"use client";
import { FormEvent, useState } from "react";
import { X } from "lucide-react";
import { useWorldStore } from "@/lib/world-state";

export default function Terminal() {
  const [value, setValue] = useState(""); const [lines, setLines] = useState(["WEB DZ COMMAND INTERFACE", "Type HELP to discover system commands."]);
  const emit = useWorldStore(s => s.emit); const open = useWorldStore(s => s.terminalOpen);
  if (!open) return null;
  const submit = (e: FormEvent) => { e.preventDefault(); const command = value.trim().toLowerCase(); let reply = "Unknown command. Try HELP.";
    if (command === "help") reply = "Commands: STATUS, NETWORK, DEBUG, RESET, CLOSE";
    if (command === "status") reply = "SYSTEMS NOMINAL · NETWORK ONLINE · ALG-01 READY";
    if (command === "network") { emit({ type: "NODE_SELECTED", id: "realtime" }); reply = "REALTIME CHANNEL BOOSTED. PACKETS ROUTED."; }
    if (command === "debug") reply = "DEBUG: quality=high · particles=260 · packets=6 · mode=terminal";
    if (command === "reset") { emit({ type: "SECTION_ENTER", mode: "intro" }); reply = "WORLD STATE RETURNED TO IDLE."; }
    if (command === "close") { emit({ type: "TERMINAL_CLOSE" }); return; }
    setLines(x => [...x, `> ${value}`, reply]); setValue(""); };
  return <section className="terminal" aria-label="WEB DZ command terminal"><button onClick={() => emit({type:"TERMINAL_CLOSE"})}><X/> CLOSE</button><div>{lines.map((line,i)=><p key={i}>{line}</p>)}</div><form onSubmit={submit}><label htmlFor="command">COMMAND</label><input id="command" autoFocus value={value} onChange={e=>setValue(e.target.value)} placeholder="help" /></form></section>;
}
