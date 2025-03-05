
import type { MetadataRoute } from 'next';
import { category } from '@/constant';
import db from '@/lib/db';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const publicUrl = process.env.NEXT_PUBLIC_URL!;

    const categoryPages = category.map((c) => ({
        url: `${publicUrl}/${c.link}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: .7,
    }))

    const quiz = await db.quiz.findMany({
        orderBy: {
            users: "desc"
        },
        take: 100000,
        select: {
            url: true
        }
    })

    const lab = await db.imageLab.findMany({
        orderBy: {
            users: "desc"
        },
        take: 100000,
        select: {
            url: true
        }
    })

    const quizPages = quiz.map((q) => ({
        url: `${publicUrl}/quiz/${q.url}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: .9,
    }))


    const labPages = lab.map((l) => ({
        url: `${publicUrl}/ai/${l.url}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: .9,
    }))



    return [
        {
            url: `${publicUrl}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${publicUrl}/trending`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ...categoryPages,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ...labPages,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ...quizPages
    ]
}