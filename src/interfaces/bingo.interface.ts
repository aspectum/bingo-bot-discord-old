import { Document, Model } from 'mongoose';
import { ObjectId } from '../types';

// --------------- MONGOOSE INTERFACES --------------- //
// Interface for mongoose Document
export interface BingoDocument extends Document {
    _id: ObjectId;
    questions: string[];
    episode: number;
    date: Date;
    closeDate: Date;
    solution: boolean[];
    RWScore: number;
    SDScore: number;
    RWIds: string[]; // or ObjectId[]
    SDIds: string[]; // or ObjectId[]
}

// Interface for mongoose Model
export interface BingoModel extends Model<BingoDocument> {}
