import React from "react";

type Props = {
  condition: boolean;
};

export default function RenderIf({
  condition,
  children,
}: React.PropsWithChildren<Props>) {
  return condition ? <React.Fragment>{children}</React.Fragment> : null;
}
