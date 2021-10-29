import prisma from '../../lib/prisma'

const setSwitch = async (req, res) => {
    const { switchId, position } = req.body
    try {
        const switches = await prisma.switches.update({
            where: { id: switchId },
            data: { position: position }
        })
        res.status(200).json(switches)
    } catch (e) {
        console.error("ERROR UPDATING: ", e)
        res.status(500).json({ error: "Error fetching posts" })
    }
}

export default setSwitch