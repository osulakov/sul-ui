import React from "react";
import { Button } from "./components/Button/Button";

export const SayHello = ({ name }: { name: string }): JSX.Element => {
  return <div>Hey {name}, say hello to TypeScript.</div>;
};

export const SUIButton = (): JSX.Element => {
  return <Button />;
};
