"use client";

import { BaseColor } from "@/lib/base-colors";
import React, {
  createContext,
  useContext,
  useReducer,
  Dispatch,
  ReactNode,
} from "react";

type Cursor = {
  x: number;
  y: number;
  userName: string;
};

type GeoLocation = {
  city: string;
  country: string;
};

type State = {
  currentUserLocation?: GeoLocation;
  isBroadcastConnected: boolean;
  usersCursor: Record<string, Cursor>;
  theme: BaseColor["name"];
  radius: number;
};

type Action =
  | { type: "UPDATE_USER_LOCATION"; payload: GeoLocation }
  | { type: "UPDATE_BROADCAST_CONNECTION"; payload: boolean }
  | { type: "UPDATE_USERS_CURSOR"; payload: Record<string, Cursor> }
  | { type: "RESET_CONTEXT" };

const initialState: State = {
  currentUserLocation: undefined,
  isBroadcastConnected: false,
  usersCursor: {},
  theme: "zinc",
  radius: 0.5,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "UPDATE_USER_LOCATION":
      return { ...state, currentUserLocation: action.payload };
    case "UPDATE_BROADCAST_CONNECTION":
      return { ...state, isBroadcastConnected: action.payload };
    case "UPDATE_USERS_CURSOR":
      return { ...state, usersCursor: action.payload };
    case "RESET_CONTEXT":
      return initialState;
    default:
      return state;
  }
};

type PortfolioContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(
  undefined,
);

type PortfolioProviderProps = {
  children: ReactNode;
};

export const PortfolioProvider: React.FC<PortfolioProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value: PortfolioContextType = {
    state,
    dispatch,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};
