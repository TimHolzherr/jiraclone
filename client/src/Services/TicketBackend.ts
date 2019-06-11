import axios from "axios";
import { Ticket } from "../Models/Ticket";

const instance = axios.create({ baseURL: "/api/ticket" });

export async function getAllTickets(): Promise<Ticket[]> {
  var request = instance.get<Ticket[]>("");
  const response = await request;
  return response.data;
}

export async function deleteTicket(id: number): Promise<void> {
  var request = instance.delete(String(id));
  await request;
  return;
}

export async function createNewTicket(ticket: Ticket): Promise<void> {
  var request = instance.post("", ticket);
  await request;
  return;
}

export async function updateTicketInBackend(ticket: Ticket): Promise<void> {
  var request = instance.put(String(ticket.id), ticket);
  await request;
  return;
}

export function registerLoadingInterceptor(
  isLoading: (value: boolean) => void
) {
  let numberOfInflightRequests = 0;
  instance.interceptors.request.use(request => {
    numberOfInflightRequests++;
    isLoading(true);
    return request;
  });
  instance.interceptors.response.use(response => {
    numberOfInflightRequests--;
    // wait for callstack to be empty and promises to be resolved
    // before deciding that all inflight requests are finished
    setTimeout(() => {
      if (numberOfInflightRequests === 0) {
        isLoading(false);
      }
    });
    return response;
  });
}
