import mongoose from 'mongoose';

export interface WebSiteListDocument {
    url: string;
    createdAt?: Date;
    updatedAt: Date;
}

const WebSiteListSchema = new mongoose.Schema(
    {
        url: { type: String, required: true, unique: true }
    },
    { timestamps: true }
);

const WebSiteList = mongoose.model<WebSiteListDocument>('WebSite-List', WebSiteListSchema);

export default WebSiteList;