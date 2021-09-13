import { Document, Model } from 'mongoose';
import { ObjectId } from '../types';

// --------------- MONGOOSE INTERFACES --------------- //
// Interface for mongoose Document
export interface EntryDocument extends Document {
    _id: ObjectId;
    userId: string; // or ObjectId
    attempt: boolean[];
    episode: number;
    date: Date;
    score: number;
    RW: boolean;
    SD: boolean;
}

// Interface for mongoose Model
export interface EntryModel extends Model<EntryDocument> {}
