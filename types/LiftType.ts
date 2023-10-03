export type LiftType = {
  name: string;
  id: string;
  date: Date;
  sets: SetType[] | 0;
};

export type SetType = {
  reps: number;
  weight: number;
};
