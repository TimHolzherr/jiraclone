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
