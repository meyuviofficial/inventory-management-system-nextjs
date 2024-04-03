// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div>
            <Switch
                defaultSelected
                size="md"
                color="success"
                startContent={<SunIcon />}
                endContent={<MoonIcon />}
                onClick={() =>  setTheme(theme === "dark" ? "light" : "dark")}
            >
                Dark mode
            </Switch>
        </div>
    )
};