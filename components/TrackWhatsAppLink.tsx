"use client";

import { trackEvent } from "@/lib/analytics";

type Props = React.ComponentProps<"a"> & {
  servico: string;
  local: "hero" | "flutuante" | "contato";
};

export default function TrackWhatsAppLink({
  servico,
  local,
  onClick,
  ...props
}: Props) {
  return (
    <a
      {...props}
      onClick={(e) => {
        trackEvent("clique_whatsapp", { servico, local });
        onClick?.(e);
      }}
    />
  );
}
