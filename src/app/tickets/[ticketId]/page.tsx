import { initialTickets } from "@/data";

type TicketPageProps = {
    params: Promise<{
        ticketId: string;
    }>
}

const TicketsPage = async ({ params }: TicketPageProps) => {
    const { ticketId } = await params;

    const ticket = initialTickets.find(ticket => ticket.id === ticketId);

    if (!ticket) return <div>No ticket found with ID: {ticketId}</div>;

    return (
        <div>
            <h2 className="text-lg">{ticket.title}</h2>
            <p className="text-sm">{ticket.content}</p>
        </div>
    )
}

export default TicketsPage;