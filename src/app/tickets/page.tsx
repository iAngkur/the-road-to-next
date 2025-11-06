import { initialTickets } from "@/data";
import { ticketPath } from "@/path";
import Link from "next/link";

const TicketsPage = () => {
    return (
        <div className="flex-1 flex flex-col gap-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Ticket Page</h2>
                <p className="text-sm">All your tickets at one place</p>
            </div>


            <div className="flex-1 flex flex-col items-center gap-y-4">
                {initialTickets.map(ticket => (
                    <div key={ticket.id} className="w-full max-w-[420px] p-4 border border-slate-100 rounded">
                        <h3 className="text-lg font-semibold">{ticket.title}</h3>
                        <p className="text-sm text-slate-500 truncate">{ticket.content}</p>
                        <Link href={ticketPath(ticket.id)} className="text-sm underline">
                            View
                        </Link>
                    </div>

                ))
                }
            </div>
        </div>
    )
}

export default TicketsPage;