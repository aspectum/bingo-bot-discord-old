import { model, Schema } from 'mongoose';
import { EntryDocument, EntryModel } from '../interfaces';

// Defining the model for the errors
const entrySchema = new Schema<EntryDocument, EntryModel>(
    {
        userId: String, // or ObjectId
        attempt: [Boolean],
        episode: Number,
        date: Date,
        score: Number,
        RW: Boolean,
        SD: Boolean,
    },
    { timestamps: true }
);

export const Entry = model<EntryDocument, EntryModel>('Entry', entrySchema);
