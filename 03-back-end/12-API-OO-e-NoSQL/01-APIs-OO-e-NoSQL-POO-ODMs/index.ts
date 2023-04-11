import { model, Schema, connect } from 'mongoose';

interface IPet {
  name: string;
  species: string;
  age?: number;
  weight: number;
  dailyMealsNumber: number;
}

const petSchema = new Schema<IPet>({
  name: { type: 'string', required: true },
  species: { type: 'string', required: true },
  age: { type: Number, required: false },
  weight: { type: Number, required: true },
  dailyMealsNumber: { type: Number, required: true, min: 2, max: 5 },
})

const Pet = model<IPet>('Pet', petSchema);