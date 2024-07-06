import type { MicroCMSImage,MicroCMSDate } from 'microcms-js-sdk';

export type Blog = {
    id: string;
    title: string;
    body: string;
    img: MicroCMSImage;
} & MicroCMSDate

