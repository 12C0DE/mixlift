export type LiftType = {
  name: string;
  date: Date;
  sets: SetType[] | 0;
};

export type SetType = {
  reps: number;
  weight: number;
};
