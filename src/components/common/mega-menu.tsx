'use client'

import * as React from "react"


import {

    NavigationMenuItem,

    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

interface Treatment {
    title: string
    treatments: string[]
}

interface MegaMenuProps {
    title: string
    items: {
        title: string
        categories: Treatment[]
    }
}

export function MegaMenu({ title }: MegaMenuProps) {
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent max-w-max  text-white hover:bg-[#234237] data-[state=open]:bg-[#234237]">
                {title}
            </NavigationMenuTrigger>

        </NavigationMenuItem>
    )
}

