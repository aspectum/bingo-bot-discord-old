import { Document, Model } from 'mongoose';
import { ObjectId } from '../types';

// What is sent by API
// export interface UserObject {
//     id: string;
//     username: string;
//     email: string;
// }

// --------------- MONGOOSE INTERFACES --------------- //
// Interface for mongoose Document
export interface UserDocument extends Document {
    _id: ObjectId;
    username: string;
    discriminator: string;
    avatar: string;
    // nickname: string;
    winstreakCurrent: number;
    winstreakRecord: number;
    lastWin: number; // bingo episode number
    numberOfBingos: number;
    avgScore: number;
    lastScore: number;
    RWTotal: number;
    SDTotal: number;
    RWCurrently: boolean;
    SDCurrently: boolean;
}

// Interface for mongoose Model
export interface UserModel extends Model<UserDocument> {}
