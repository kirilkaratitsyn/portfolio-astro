export function init() {
  (window as unknown as { __motion?: boolean }).__motion = true;
}
