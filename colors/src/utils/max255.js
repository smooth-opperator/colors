export default function max255(value) {
  if (!value || value < 0) return 0;
  return value > 255 ? 255 : value;
}
