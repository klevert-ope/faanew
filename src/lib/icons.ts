export type IconName =
  | "menu"
  | "close"
  | "work"
  | "services"
  | "fleet"
  | "industrial"
  | "about"
  | "partners"
  | "contact"
  | "consult"
  | "phone"
  | "mail";

export type IconShape =
  | { tag: "path"; d: string }
  | { tag: "circle"; cx: number; cy: number; r: number }
  | { tag: "rect"; x: number; y: number; width: number; height: number; rx?: number }
  | { tag: "line"; x1: number; y1: number; x2: number; y2: number };

export function shapesFor(icon: IconName): IconShape[] {
  switch (icon) {
    case "menu":
      return [
        { tag: "line", x1: 4, y1: 7, x2: 20, y2: 7 },
        { tag: "line", x1: 4, y1: 12, x2: 20, y2: 12 },
        { tag: "line", x1: 4, y1: 17, x2: 20, y2: 17 },
      ];
    case "close":
      return [
        { tag: "line", x1: 6, y1: 6, x2: 18, y2: 18 },
        { tag: "line", x1: 18, y1: 6, x2: 6, y2: 18 },
      ];
    case "work":
      return [
        { tag: "path", d: "M4 9.2 12 4.5l8 4.7-8 4.7L4 9.2Z" },
        { tag: "path", d: "M4 13.2 12 17.9l8-4.7" },
        { tag: "path", d: "M4 16.8 12 21.5l8-4.7" },
      ];
    case "services":
      return [
        { tag: "rect", x: 4, y: 4, width: 7, height: 7, rx: 0.5 },
        { tag: "rect", x: 13, y: 4, width: 7, height: 7, rx: 0.5 },
        { tag: "rect", x: 4, y: 13, width: 7, height: 7, rx: 0.5 },
        { tag: "rect", x: 13, y: 13, width: 7, height: 7, rx: 0.5 },
      ];
    case "fleet":
      return [
        { tag: "path", d: "M3 16.5V8h11v8.5" },
        { tag: "path", d: "M14 10.5h4.2L21 14v2.5h-2" },
        { tag: "path", d: "M3 16.5h18" },
        { tag: "circle", cx: 7.2, cy: 17.6, r: 1.55 },
        { tag: "circle", cx: 16.8, cy: 17.6, r: 1.55 },
      ];
    case "industrial":
      return [
        { tag: "path", d: "M4 21V12l4 3V12l4 3V8h8v13H4Z" },
        { tag: "rect", x: 16, y: 11, width: 2, height: 2 },
        { tag: "rect", x: 16, y: 15, width: 2, height: 2 },
      ];
    case "about":
      return [
        { tag: "circle", cx: 9, cy: 8, r: 2.35 },
        { tag: "circle", cx: 16.2, cy: 9.1, r: 1.9 },
        { tag: "path", d: "M4.2 18.5c.5-3 2.5-4.6 4.8-4.6s4.3 1.6 4.8 4.6" },
        { tag: "path", d: "M14.2 18.5c.25-1.7 1.3-2.9 3.1-3.1 1.7 0 3.1.9 3.5 2.6" },
      ];
    case "partners":
      return [
        { tag: "circle", cx: 7.2, cy: 12, r: 3 },
        { tag: "circle", cx: 16.8, cy: 12, r: 3 },
        { tag: "line", x1: 10.2, y1: 12, x2: 13.8, y2: 12 },
      ];
    case "contact":
      return [{ tag: "path", d: "M5 5.5h14v10.2H8.6L5 19V5.5Z" }];
    case "consult":
      return [
        { tag: "rect", x: 4, y: 5, width: 16, height: 15, rx: 1 },
        { tag: "line", x1: 4, y1: 10, x2: 20, y2: 10 },
        { tag: "line", x1: 8, y1: 3.2, x2: 8, y2: 6.4 },
        { tag: "line", x1: 16, y1: 3.2, x2: 16, y2: 6.4 },
      ];
    case "phone":
      return [
        {
          tag: "path",
          d: "M8.2 3.8h3.1l1.1 2.9-2 1.1a11.4 11.4 0 0 0 5.8 5.8l1.1-2 2.9 1.1v3.1a1.8 1.8 0 0 1-1.9 1.8A14.2 14.2 0 0 1 4.4 6.7a1.8 1.8 0 0 1 1.8-1.9Z",
        },
      ];
    case "mail":
      return [
        { tag: "rect", x: 3.5, y: 6, width: 17, height: 12, rx: 1 },
        { tag: "path", d: "M4.2 7.6 12 13.1l7.8-5.5" },
      ];
    default: {
      const _exhaustive: never = icon;
      throw new Error(`Unhandled icon: ${_exhaustive}`);
    }
  }
}
