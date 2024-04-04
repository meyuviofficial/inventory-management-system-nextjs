import React from "react";
import { Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function CardComponent() {
    return (
        <div className="max-w-full grid justify-center pt-32">
            <Card shadow="md">
                <CardHeader className="flex-col items-center">
                    <h2 className="text-2xl font-bold">Register</h2>
                </CardHeader>
                <CardBody>
                    <form>
                        <div className="grid grid-cols-2 grid-flow-row auto-rows-max gap-4 p-4">
                            <div className="">
                                <Input type="text" label="First Name" placeholder="John" />
                            </div>
                            <div>
                                <Input type="text" label="Last Name" placeholder="Doe" />
                            </div>
                            <div className="">
                                <Input type="text" label="Phone Number" placeholder="Enter your phone number" />
                            </div>
                            <div>
                                <Input type="text" label="Date of Birth" placeholder="Enter your date of birth" />
                            </div>
                            <div className="col-span-2">
                                <Input type="email" label="Email" placeholder="Enter your email" />
                            </div>
                            <div className="col-span-2">
                                <Input type="password" label="Password" placeholder="Enter your password" />
                            </div>
                            <div className="col-span-2">
                                <Button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                                    Register
                                </Button>
                            </div>

                        </div>
                    </form>
                </CardBody>
            </Card>
        </div>
    )
}