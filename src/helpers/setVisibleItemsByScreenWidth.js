import { BREAKPOINTS as bp } from "../config/screenBreakpoints";
import { CARDS_TO_SHOW as cards } from "../config/destinationCadsToShow";

export default function setItems(width) {
  if (width < bp.sm) {
    return cards.sm;
  } else if (width < bp.md) {
    return cards.md;
  } else if (width < bp.lg) {
    return cards.lg;
  } else if (width < bp.xl) {
    return cards.xl;
  } else if (width < bp["2xl"]) {
    return cards["2xl"];
  } else {
    return cards.larger;
  }
}
