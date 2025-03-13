

const register = async (req:any, res:any) => {

    const data = await req.body;
    console.log(data)
}


export default {
    register
}