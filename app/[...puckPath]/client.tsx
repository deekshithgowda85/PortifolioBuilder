"use client";

import type { Data } from "@measured/puck";
import { Render } from "@measured/puck";
import { useEffect, useState } from "react";
import config from "../../puck.config";

export function Client({ data }: { data: Data }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prevent hydration mismatch by only rendering on client
  if (!isClient) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#000',
        color: '#fff'
      }}>
        Loading...
      </div>
    );
  }

  return <Render config={config} data={data} />;
}
