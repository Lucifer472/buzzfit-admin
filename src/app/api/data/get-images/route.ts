import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {

        const data = await db.imageLab.findMany({
            take: 10,
            orderBy: {
                users: "desc"
            }
        })

        return NextResponse.json({
            code: 200,
            data,
        })

    } catch (error) {
        return NextResponse.json({
            code: 400,
            error: error
        })
    }
}