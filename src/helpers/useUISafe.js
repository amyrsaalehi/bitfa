const { useState, useEffect } = require("react")

export default function useUISafe() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, []);

  return mounted;
}