import db from "@/lib/db";

export const getWeeklyAndPopularData = async () => {
    try {

        const popular = await db.quiz.findMany({
            take: 5,
            orderBy: {
                users: "desc"
            }
        })

        const weekly = await db.imageLab.findMany({
            take: 5,
            orderBy: {
                users: "desc"
            }
        })

        return {
            data: {
                popular,
                weekly
            }
        }

    } catch {
        return { error: "Something went wrong!" }
    }
}