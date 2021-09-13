import { model, Schema } from 'mongoose';
import { UserDocument, UserModel } from '../interfaces';

// Defining the model for the errors
const userSchema = new Schema<UserDocument, UserModel>(
    {
        username: String,
        discriminator: String,
        avatar: String,
        winstreakCurrent: Number,
        winstreakRecord: Number,
        lastWin: Number,
        numberOfBingos: Number,
        avgScore: Number,
        lastScore: Number,
        RWTotal: Number,
        SDTotal: Number,
        RWCurrently: Boolean,
        SDCurrently: Boolean,
    },
    { timestamps: true }
);

export const User = model<UserDocument, UserModel>('User', userSchema);
