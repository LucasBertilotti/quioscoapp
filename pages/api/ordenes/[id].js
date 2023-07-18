import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
    if(req.method == "POST") {

        const prisma = new PrismaClient();
        const { id } = req.query;

        const ordenActualizada = await prisma.orden.update({
            where: {
                id: parseInt(id)
            },
            data: {
                estado: true
            }
        })
        res.status(200).json(ordenActualizada);
    }
}