import { usePortfolio } from "@/context/portfolio-context";

export function useConfig() {
  const { state } = usePortfolio();
  const { theme, radius } = state;
  return [{ theme, radius }];
}
