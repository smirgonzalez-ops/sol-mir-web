"use client";

import { useEffect, useState } from "react";

const launchDate = new Date("2026-09-22T00:00:00-03:00").getTime();

function getMessage() {
  const days = Math.ceil((launchDate - Date.now()) / 86_400_000);
  if (days > 1) return `Faltan ${days} días para el lanzamiento`;
  if (days === 1) return "Falta 1 día para el lanzamiento";
  if (days === 0) return "El lanzamiento es hoy";
  return "Lanzamiento anunciado para el 22 de septiembre de 2026";
}

export default function LaunchCountdown() {
  const [message, setMessage] = useState("Lanzamiento: 22 de septiembre de 2026");

  useEffect(() => {
    const update = () => setMessage(getMessage());
    update();
    const interval = window.setInterval(update, 60 * 60 * 1000);
    return () => window.clearInterval(interval);
  }, []);

  return <p className="muted countdown-message">{message}</p>;
}
