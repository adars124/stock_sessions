import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";

import Link from "next/link";
import Image from "next/image";

import { ScrollArea } from "./ui/scroll-area";
import { Separator } from './ui/separator';
import emptyCart from "@/public/hippo-empty-cart.png";

export function Cart() {
    const itemCount = 1;
    return (
        <Sheet>
            <SheetTrigger className='group -m-2 flex items-center p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
            </SheetTrigger>

            <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
                <SheetHeader className='space-y-2.5 pr-6'>
                    <SheetTitle>Cart (1)</SheetTitle>
                </SheetHeader>
                {itemCount > 0 ? (
                    <>
                        <div className='flex w-full flex-col pr-6'>
                            <ScrollArea>
                                <div>Technical Analysis</div>
                            </ScrollArea>
                        </div>
                        <div className='space-y-4 pr-6'>
                            <Separator />
                            <div className='space-y-1.5 text-sm'>
                                <div className='flex'>
                                    <span className='flex-1'>
                                        Transaction Fee
                                    </span>
                                    <span>4,000</span>
                                </div>
                                <div className='flex'>
                                    <span className='flex-1'>Total</span>
                                    <span>
                                        4,000
                                    </span>
                                </div>
                            </div>

                            <SheetFooter>
                                <SheetTrigger asChild>
                                    <Link
                                        href='/cart'
                                        className="w-full bg-blue-400 hover:bg-blue-600 hover:text-teal-200 transition-all duration-100 p-3 rounded-md text-center mt-5">
                                        Continue to Checkout
                                    </Link>
                                </SheetTrigger>
                            </SheetFooter>
                        </div>
                    </>
                ) : (
                    <div className='flex h-full flex-col items-center justify-center space-y-1'>
                        <div
                            aria-hidden='true'
                            className='relative mb-4 h-60 w-60 text-muted-foreground'>
                            <Image
                                src={emptyCart}
                                alt="empty cart image"
                            />
                        </div>
                        <div className='text-xl font-semibold'>
                            Your cart is empty
                        </div>
                        <SheetTrigger asChild>
                            <Link
                                href='/courses'
                                className="text-sm hover:underline text-muted-foreground">
                                Add items to your cart to checkout
                            </Link>
                        </SheetTrigger>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
};