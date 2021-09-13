import { model, Schema } from 'mongoose';
import { BingoDocument, BingoModel } from '../interfaces';

// Defining the model for the errors
const bingoSchema = new Schema<BingoDocument, BingoModel>(
    {
        questions: [String],
        episode: Number,
        date: Date,
        closeDate: Date,
        solution: [Boolean],
        RWScore: Number,
        SDScore: Number,
        RWIds: [String], // or ObjectId[]
        SDIds: [String], // or ObjectId[]
    },
    { timestamps: true }
);

export const Bingo = model<BingoDocument, BingoModel>('Bingo', bingoSchema);
