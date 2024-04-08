const addNumbers = async (data, res) => {

    console.log(data);
    try {

        let sum = 0;
        for (let i = 0; i < data.length; i++) {
            sum = sum + data[i]
            console.log(sum, "sum")
        }
        return res.status(200).json({ msg: "sum all the numbers", sum });
    } catch (err) {
        console.log(err, "err");
    }
}
export default addNumbers