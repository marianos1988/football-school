
const Protected = async (req:any,res:any) =>{
    // const token = await req.cookies.token;
    // console.log(token);

    console.log("hola")
    res.json("hola")
}

export default {
    Protected,
}