const invoices = [
  {
    name: "Senta Monika",
    number: 1995,
    amount: "$10000",
    due: "12/03/1995",
  },
  {
    name: "Stankonia",
    number: 2000,
    amount: "$10800",
    due: "02/07/2000",
  },
  {
    name: "Ocean Avnue",
    number: 2003,
    amount: "$9500",
    due: "24/12/1997",
  },
];

export function getInvoices() {
  return invoices;
}

export function getInvoice(number) {
  return invoices.find((invoice) => {
    return invoice.number === number;
  });
}
