/* Style helper methods for common use in Bulma elements and components  */
export function getColor(color: string): string {
  return color ? ` is-${color}` : "";
}
export function getSize(size: string): string {
  return size ? ` is-${size}` : "";
}
export function getDisplay(display: string): string {
  return display ? ` is-${display}` : "";
}
export function getOutlined(isOutlined: boolean): string {
  return isOutlined ? ` is-outlined` : "";
}
