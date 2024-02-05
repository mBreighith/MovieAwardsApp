export interface NomineesCategory {
    id: string;
    title: string;
    items: NomineeType[];
}

export interface NomineeType {
    title: string;
    photoUrL: string;
    id: string;
}