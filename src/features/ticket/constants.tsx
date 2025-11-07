import { LucideCircleCheck, LucideFileText, LucidePencil } from "lucide-react";
import { TicketStatus } from "./type";

export const TICKET_ICONS: Record<TicketStatus, React.ReactElement> = {
    OPEN: <LucideFileText />,
    IN_PROGRESS: <LucidePencil />,
    DONE: <LucideCircleCheck />
}
