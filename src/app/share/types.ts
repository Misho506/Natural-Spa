
export type Service = {
  name: string;
  price: string;
  details: Details;
  showDetails: boolean;
};

export type Details = {
  howWorksTitle: "¿Cómo funciona?";
  howWorksDetails: string;
  benefitsTitle: string;
  benefitsDetails: string;
  considerationsTitle: "Consideraciones";
  considerationsDetails: string;
}