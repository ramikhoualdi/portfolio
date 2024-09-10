import { FollowPointer } from "@/components/ui/following-pointer";
import { usePortfolio } from "@/context/portfolio-context";

const DEBOUNCE_MS = 20; // Debounce time in milliseconds

export const UsersCursors = () => {
  const { state } = usePortfolio();
  const { usersCursor } = state;

  return (
    <>
      {Object.entries(usersCursor).map(([id, position]) => (
        <FollowPointer
          key={id}
          x={position.x}
          y={position.y}
          title={position.userName}
          className={`duration-[${DEBOUNCE_MS * 1.5}ms] transition-all`}
        />
      ))}
    </>
  );
};
