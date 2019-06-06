namespace TicketApi.Models
{
    public class Ticket
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Owner { get; set; }
        public bool IsComplete { get; set; }
    }
}