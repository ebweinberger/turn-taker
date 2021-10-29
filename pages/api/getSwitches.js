import prisma from '../../lib/prisma'

const getSwitch = async (req, res) => {
    try {
        const switches = await prisma.switches.findMany()
        res.status(200).json(switches)
    } catch (e) {
        console.error("ERROR: ", e)
        res.status(500).json({ error: "Error fetching posts" })
    }
}

export default getSwitch