'use client'

import * as React from "react"
import { Search } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { MegaMenu } from "./mega-menu"

const faceItems = {
    title: "The Face",
    path: "/home1",
    categories: [

        {
            title: "Facial Treatments",
            treatments: [
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
            ],
        },
        {
            title: "Facial Treatments",
            treatments: [
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
            ],
        }
        ,
        {
            title: "Facial Treatments",
            treatments: [
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
            ],
        },
        {
            title: "Facial Treatments",
            treatments: [
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
            ],
        },
        {
            title: "Facial Treatments",
            treatments: [
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
            ],
        },
        {
            title: "Facial Treatments",
            treatments: [
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
            ],
        },
        {
            title: "Facial Treatments",
            treatments: [
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
            ],
        },
        {
            title: "Facial Treatments",
            treatments: [
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
            ],
        },
        {
            title: "Facial Treatments",
            treatments: [
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
            ],
        },
        {
            title: "Facial Treatments",
            treatments: [
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
            ],
        },
        {
            title: "Facial Treatments",
            treatments: [
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
            ],
        }
    ]
}

const bodyItems = {
    title: "The Body",
    categories: [
        {
            title: "Facial Treatments",
            treatments: [
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
            ],
        },
    ]
}

const weightLossItems = {
    title: "Weight Loss",
    categories: [
        {
            title: "Facial Treatments",
            treatments: [
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
            ],
        },
    ]
}

const hairLossItems = {
    title: "Hair Loss",
    categories: [
        {
            title: "Facial Treatments",
            treatments: [
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
            ],
        },
    ]
}

const femaleItems = {
    title: "Female Health",
    categories: [
        {
            title: "Facial Treatments",
            treatments: [
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
            ],
        },
    ]
}

const maleItems = {
    title: "Male Health",
    categories: [
        {
            title: "Facial Treatments",
            treatments: [
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
            ],
        },
    ]
}

const mediSpaItems = {
    title: "Medi Spa",
    categories: [
        {
            title: "Facial Treatments",
            treatments: [
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
                "Facial Treatments",
            ],
        },
    ]
}



export function NavBar() {
    return (
        <div className=" w-full">
            <div className="bg-[#00ff99] text-black py-3 px-4 text-center">
                <span className="text-sm">Need advice? Chat with the doctor now!</span>
                <Button variant="default" className="ml-4 bg-black text-white rounded hover:bg-gray-800 text-sm">
                    Chat Now!
                </Button>
            </div>

            <nav className="bg-[#2F5649] text-white">
                <div className="container mx-auto  py-4 flex items-center justify-start">
                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src="/logo_nexus.png"
                            alt="Nexus Clinic"
                            width={150}
                            height={50}
                            className="h-12 w-auto"
                        />
                    </Link>

                    <NavigationMenu className="flex-1 flex justify-start">
                        <NavigationMenuList className="flex items-center space-x-0">
                            <MegaMenu title="The Face" items={faceItems} />
                            <MegaMenu title="The Body" items={bodyItems} />
                            <MegaMenu title="Fat & Weight Loss" items={weightLossItems} />
                            <MegaMenu title="Hair Loss Treatment" items={hairLossItems} />
                            <MegaMenu title="Female Only" items={femaleItems} />
                            <MegaMenu title="Male Only" items={maleItems} />
                            <MegaMenu title="Medi Spa" items={mediSpaItems} />
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="flex items-center space-x-4">

                        <Button variant="ghost" size="icon" className="text-white hover:bg-[#234237]">
                            <Search className="h-5 w-5" />
                            <span className="sr-only">Search</span>
                        </Button>
                        <Link href="/home1">
                            <Button className="bg-white text-black hover:bg-gray-100 font-medium">
                                Book Now
                            </Button>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

