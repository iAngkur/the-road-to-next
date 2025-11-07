import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ticketPath } from "@/path";
import Link from "next/link";
import { TICKET_ICONS } from "../constants";
import { Ticket } from "../type";
import { LucideSquareArrowOutUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import clsx from "clsx";

type TicketItemProps = { ticket: Ticket, isDetail?: boolean }

const TicketItem = ({ ticket, isDetail }: TicketItemProps) => {
    const detailButton = (
        <Link href={ticketPath(ticket.id)} className={buttonVariants({ variant: "outline", size: "icon-sm" })} title="View Details" >
            <LucideSquareArrowOutUpRight className="h-4 w-4" />
        </Link>
    )

    return (
        <div className={clsx("w-full flex gap-x-1", {
            "max-w-xl": isDetail,
            "max-w-md": !isDetail
        })}>
            <Card className="w-full hover:bg-accent dark:hover:bg-accent/80 transition-all duration-300 ease-in-out">
                <CardHeader>
                    <CardTitle className="flex items-center gap-x-2">
                        <span>{TICKET_ICONS[ticket.status]}</span>
                        <span>{ticket.title}</span>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className={clsx("whitespace-break-spaces", { "line-clamp-3": !isDetail })}>{ticket.content}</p>
                </CardContent>

            </Card>
            {
                isDetail ?
                    null : (
                        <div>
                            {detailButton}
                        </div>
                    )
            }
        </div >
    )
}

export default TicketItem;